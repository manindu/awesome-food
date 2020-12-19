import React from 'react';
import {connect} from 'react-redux';
import {useFormik} from 'formik';
import Toast from 'react-native-simple-toast';
import Realm from 'realm';
import {View, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import {Input, Button, VSpace} from '../../components';
import {setUser} from '../../state/user/user.actions';
import {signInSchema} from '../../validationSchemas/auth';
import styles from './SignIn.style';
import UserSchema from '../../schemas/UserScheme';

const SignIn = ({navigation, setCurrentUser}) => {
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
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: async (formValues) => {
      Realm.open({schema: [UserSchema]})
        .then((realm) => {
          const users = realm
            .objects('User')
            .filtered(
              'email == $0 && password == $1',
              formValues.email,
              formValues.password,
            );
          const loggedInUser = users[0];
          if (loggedInUser) {
            setCurrentUser(loggedInUser);
          } else {
            Toast.show('Invalid email or password.');
          }
        })
        .catch((error) => {
          Toast.show(error.message);
        });
    },
  });

  const onPressSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={styles.container}>
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
          <Button label="Sign In" onClick={handleSubmit} disabled={!isValid} />
          <VSpace height={20} />
          <Button
            label="Don't have an account? Sign up now."
            mode="text"
            onClick={onPressSignUp}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default connect(null, {setCurrentUser: setUser})(SignIn);
