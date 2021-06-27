import { useTranslations } from 'next-intl';
const SignInForm = (props) => {
  const signInLabel = useTranslations('label');

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={props.handleSubmit}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          {signInLabel('userName')}
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
          ${
            props.errors && props.touched.userName && props.errors.userName
              ? `border-red-500`
              : ``
          }`}
          type="text"
          id="userName"
          placeholder={`${signInLabel('userName')}`}
          value={props.values.userName}
          onChange={props.handleChange}
          onBlur={(e) => props.handleBlur(e)}
        />

        {props.errors && props.touched.userName && props.errors.userName ? (
          <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.userName}
          </span>
        ) : null}
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          {signInLabel('password')}
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
          ${
            props.errors && props.touched.password && props.errors.password
              ? `border-red-500`
              : ``
          }`}
          id="password"
          type="password"
          placeholder={`${signInLabel('password')}`}
          value={props.values.password}
          onChange={props.handleChange}
          onBlur={(e) => props.handleBlur(e)}
        />
        {props.errors && props.touched.password && props.errors.password ? (
          <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {props.errors.password}
          </span>
        ) : null}
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {signInLabel('signIn')}
        </button>
        <a
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          {signInLabel('forgotPassword')}
        </a>
      </div>
    </form>
  );
};

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../../messages/signIn/${locale}.json`),
      },
    },
  };
}

export default SignInForm;
