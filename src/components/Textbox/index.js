import React, {memo} from 'react';
import {TextInput} from 'react-native';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

const Textbox = ({style, ...rest}) => {
  const {colors} = useTheme();
  return <TextInput style={[styles(colors).textbox, style]} {...rest} />;
};

export default memo(Textbox);
