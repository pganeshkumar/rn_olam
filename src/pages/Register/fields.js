import {createRef} from 'react';
import Textbox from '../../components/Textbox';

const usernameInputRef = createRef(null);
const passwordInputRef = createRef(null);
const confirmPasswordInputRef = createRef(null);

export const fields = [
  {
    name: 'name',
    component: Textbox,
    placeholder: 'Name',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      usernameInputRef.current.focus();
    },
    validate: value => {
      let error = '';
      if (!value) {
        error = 'Name Required';
      }
      return error;
    },
  },
  {
    innerRef: usernameInputRef,
    name: 'username',
    component: Textbox,
    placeholder: 'Username',
    keyboardType: 'email-address',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      passwordInputRef.current.focus();
    },
    validate: value => {
      let error = '';
      if (!value) {
        error = 'Username Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid username';
      }
      return error;
    },
  },
  {
    innerRef: passwordInputRef,
    name: 'password',
    component: Textbox,
    placeholder: 'Password',
    secureTextEntry: true,
    returnKeyType: 'next',
    onSubmitEditing: () => {
      confirmPasswordInputRef.current.focus();
    },
    validate: value => {
      let error = '';
      if (!value) {
        error = 'Password Required';
      }
      return error;
    },
  },
  {
    innerRef: confirmPasswordInputRef,
    name: 'confirmPassword',
    component: Textbox,
    placeholder: 'Confirm Password',
    secureTextEntry: true,
    returnKeyType: 'go',
    validate: value => {
      let error = '';
      if (!value) {
        error = 'Confirm Password Required';
      }
      return error;
    },
  },
];

export const initialValues = {
  name: '',
  username: '',
  password: '',
  confirmPassword: '',
};
