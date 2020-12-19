import React from 'react';
import {useFormik} from 'formik';
import {connect} from 'react-redux';
import Realm from 'realm';
import Toast from 'react-native-simple-toast';
import {View, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import {Button, Input, VSpace} from '../../components';
import {setUser} from '../../state/user/user.actions';
import {signUpSchema} from '../../validationSchemas/auth';
import UserSchema from '../../schemas/UserScheme';
import styles from './SignUp.style';

const SignUp = ({navigation, setCurrentUser}) => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit: async (formValues) => {
      Realm.open({schema: [UserSchema]})
        .then((realm) => {
          realm.write(() => {
            const user = realm.create('User', {
              firstName: formValues.firstName,
              lastName: formValues.lastName,
              email: formValues.email,
              password: formValues.password,
            });

            setCurrentUser(user);
          });
        })
        .catch((error) => {
          Toast.show(error.message);
        });
    },
  });

  const onPressSignIn = () => {
    // signInWithEmail({email, password});
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={styles.container}>
        <Input
          name="firstName"
          placeholder="First Name"
          value={values.firstName}
          onChangeText={handleChange('firstName')}
          onBlur={handleBlur('firstName')}
          error={
            touched.firstName && errors.firstName && errors.firstName.toString()
          }
        />
        <Input
          name="lastName"
          placeholder="Last Name"
          value={values.lastName}
          onChangeText={handleChange('lastName')}
          onBlur={handleBlur('lastName')}
          error={
            touched.lastName && errors.lastName && errors.lastName.toString()
          }
        />
        <Input
          name="email"
          placeholder="Email"
          value={values.email}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          error={touched.email && errors.email && errors.email.toString()}
        />
        <Input
          name="password"
          placeholder="Password"
          value={values.password}
          secureTextEntry
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={
            touched.password && errors.password && errors.password.toString()
          }
        />
        <View style={styles.bottomContainer}>
          <Button label="Sign Up" onClick={handleSubmit} disabled={!isValid} />
          <VSpace height={20} />
          <Button
            label="Already have an account? Sign in."
            mode="text"
            onClick={onPressSignIn}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default connect(null, {setCurrentUser: setUser})(SignUp);
