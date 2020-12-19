import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email must be a valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const signUpSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Email must be a valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});
