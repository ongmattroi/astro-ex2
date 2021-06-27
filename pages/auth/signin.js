import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { withFormik } from 'formik';
import { signInSchema } from '../../lib/validation/SignInValidation';
import SignInForm from '../../components/form/SignInForm';
import { signInRequest } from '../../redux/actions/signInAction';

function SignIn(props) {
  const dispatch = useDispatch(),
    SignInFormWithFormik = withFormik({
      mapPropsToValues: () => ({ userName: '', password: '' }),
      validationSchema: signInSchema(props.messages),
      validateOnBlur: true,
      validateOnChange: true,
      handleSubmit: (values, { setSubmitting }) => {
        dispatch(signInRequest(values));
        setSubmitting(false);
      },
      displayName: 'BasicForm',
    })(SignInForm);

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="mx-auto max-w-xs">
        <Image
          src="/logo-400.gif"
          width="300"
          height="300"
          layout="responsive"
        />
        <SignInFormWithFormik />
      </div>
    </div>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../../messages/signIn/${locale}.json`),
        ...require(`../../messages/error/${locale}.json`),
      },
    },
  };
}

export default SignIn;
