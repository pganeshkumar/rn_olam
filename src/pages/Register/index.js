import React from 'react';
import {View} from 'react-native';
import globalStyles from '../../globalStyle';
import Image from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {fields, initialValues} from './fields';
import Form from '../../components/Form';

const Register = ({navigation}) => {
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
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        fields={fields}
        btnProps={{
          title: 'Register',
        }}
      />
    </View>
  );
};

export default Register;
