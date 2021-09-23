import {createRef} from 'react';
import Textbox from '../../components/Textbox';

const passwordInputRef = createRef(null);

export const fields = [
  {
    name: 'username',
    component: Textbox,
    placeholder: 'Username',
    keyboardType: 'email-address',
    autoCompleteType: 'email',
    textContentType: 'emailAddress',
    returnKeyType: 'next',
    autoCapitalize: 'none',
    onSubmitEditing: () => {
      // passwordInputRef.current.focus();
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
    autoCapitalize: 'none',
    placeholder: 'Password',
    autoCompleteType: 'password',
    textContentType: 'password',
    secureTextEntry: true,
    returnKeyType: 'next',
    validate: value => {
      let error = '';
      if (!value) {
        error = 'Password Required';
      }
      return error;
    },
  },
];

export const initialValues = {
  username: '',
  password: '',
};
