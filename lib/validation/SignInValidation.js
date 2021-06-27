import * as Yup from 'yup';
import {
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_PATTERN,
} from '../Constants';

const getMessage = (message, prefix) => {
  try {
    let messageSet = message[prefix];
    return function (property, interpollation) {
      let result = messageSet[property];
      if (interpollation) {
        for (const [key, value] of Object.entries(interpollation)) {
          result = result.replace('{' + key + '}', value);
        }
      }
      return result;
    };
  } catch (error) {
    return 'Failed to get message';
  }
};

function merge(...schemas) {
  const [first, ...rest] = schemas;
  const merged = rest.reduce(
    (mergedSchemas, schema) => mergedSchemas.concat(schema),
    first
  );
  return merged;
  // usage:
  // const merged = merge(schema1, schema2, schema3, etc);
}

const userNameSchema = (message) => {
  const signInLabel = getMessage(message, 'label');
  const errorValidate = getMessage(message, 'commonError');
  return Yup.string()
    .min(
      USERNAME_MIN_LENGTH,
      errorValidate('minLength', {
        subject: signInLabel('userName'),
        length: USERNAME_MIN_LENGTH,
      })
    )
    .max(
      USERNAME_MAX_LENGTH,
      errorValidate('minLength', {
        subject: signInLabel('userName'),
        length: USERNAME_MAX_LENGTH,
      })
    )
    .required(
      errorValidate('required', {
        subject: signInLabel('userName'),
      })
    );
};

const passwordSchema = (message) => {
  const signInLabel = getMessage(message, 'label');
  const errorValidate = getMessage(message, 'commonError');
  return Yup.string()
    .min(
      PASSWORD_MIN_LENGTH,
      errorValidate('minLength', {
        subject: signInLabel('password'),
        length: PASSWORD_MIN_LENGTH,
      })
    )
    .max(
      PASSWORD_MAX_LENGTH,
      errorValidate('minLength', {
        subject: signInLabel('password'),
        length: PASSWORD_MAX_LENGTH,
      })
    )
    .required(
      errorValidate('required', {
        subject: signInLabel('password'),
      })
    )
    .matches(
      PASSWORD_PATTERN,
      errorValidate('notMatch', {
        subject: signInLabel('password'),
      })
    );
};

const signInSchema = (message) =>
  Yup.object({
    userName: userNameSchema(message),
    password: passwordSchema(message),
  });

export { signInSchema, userNameSchema, passwordSchema, merge };
