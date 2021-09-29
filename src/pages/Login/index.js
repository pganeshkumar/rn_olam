import React, {useState} from 'react';
import {View, KeyboardAvoidingView, Keyboard, Platform} from 'react-native';
import globalStyles from '../../globalStyle';
import Image from 'react-native-fast-image';
import {fields, initialValues} from './fields';
import Form from '../../components/Form';
import Typography from '../../components/Typography';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTheme} from '@react-navigation/native';
import {useEffect} from 'react/cjs/react.development';
import * as Keychain from 'react-native-keychain';
import axiosInstance from '../../utils/axiosInstance';

const Login = ({navigation}) => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const {colors} = useTheme();

  useEffect(() => {
    const keyboardDidShow = () => {
      setIsKeyboardVisible(true);
    };
    const keyboardDidHide = () => {
      setIsKeyboardVisible(false);
    };
    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const onSubmit = async (values, actions) => {
    try {
      const res = await axiosInstance.get('users', {
        params: values,
      });
      console.warn(res.data);
      if (res.data.length > 0) {
        await Keychain.setGenericPassword(values.username, values.password);

        // await AsyncStorage.setItem('user', JSON.stringify(res.data[0]));
        navigation.reset({
          index: 0,
          routes: [{name: 'Main'}],
        });
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={globalStyles.flex}>
      <KeyboardAvoidingView
        behavior="padding"
        enabled={Platform.OS === 'ios'}
        style={[globalStyles.flex, {justifyContent: 'space-evenly'}]}>
        <Image
          source={{
            uri: 'https://yagneshmodh.com/apple-touch-icon.png',
            priority: Image.priority.high,
          }}
          style={{height: isKeyboardVisible ? 50 : 150}}
          resizeMode="contain"
        />
        <Form
          initialValues={initialValues}
          onSubmit={onSubmit}
          fields={fields}
          btnProps={{
            title: 'Login',
          }}
        />
        <Typography
          variant="body1"
          style={{
            textAlign: 'center',
          }}>
          {`Dont hanve account? Please `}
          <Typography
            variant="body1"
            style={{
              color: colors.primary,
            }}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            Register
          </Typography>
        </Typography>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
