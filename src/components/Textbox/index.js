import React, {useContext, memo} from 'react';
import {TextInput} from 'react-native';
import styles from './styles';
import {ThemeContext} from '../../context/themeContext';

const Textbox = ({style, ...rest}) => {
  console.warn('Textbox Rendered');
  const {colors} = useContext(ThemeContext);
  return <TextInput style={[styles(colors).textbox, style]} {...rest} />;
};

export default memo(Textbox);
