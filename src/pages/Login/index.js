import React from 'react';
import {View} from 'react-native';
import Typography from '../../components/Typography';
import globalStyles from '../../globalStyle';
import Image from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Formik} from 'formik';
import Textbox from '../../components/Textbox';
import Button from '../../components/Button';

const validateLogin = values => {
  let errors = {};
  if (!values.username) {
    errors.username = 'Username Required';
  }
  if (!values.password) {
    errors.password = 'Password Required';
  }
  return errors;
};

const Login = ({navigation}) => {
  const insets = useSafeAreaInsets();

  const onSubmit = values => {
    console.warn(values);
  };
  return (
    <View
      style={[
        globalStyles.flex,
        {
          paddingTop: insets.top,
        },
      ]}>
      <Image
        source={{
          uri: 'https://yagneshmodh.com/apple-touch-icon.png',
          priority: Image.priority.high,
        }}
        style={{
          height: 150,
        }}
        resizeMode="contain"
      />
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validate={validateLogin}
        onSubmit={onSubmit}>
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
        }) => {
          return (
            <View style={{marginHorizontal: 10}}>
              <View style={{marginVertical: 10}}>
                <Textbox
                  name="username"
                  placeholder="Username"
                  value={values.username}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                />
                {touched.username && errors.username && (
                  <Typography variant="error">{errors.username}</Typography>
                )}
              </View>
              <View style={{marginVertical: 10}}>
                <Textbox
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry
                />
                {touched.password && errors.password && (
                  <Typography variant="error">{errors.password}</Typography>
                )}
              </View>
              <Button
                title="Login"
                onPress={handleSubmit}
                style={{marginVertical: 10}}
              />
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default Login;
