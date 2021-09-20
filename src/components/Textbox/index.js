import React, {useContext, memo} from 'react';
import {TextInput} from 'react-native';
import styles from './styles';
import {ThemeContext} from '../../context/themeContext';

const Textbox = ({style, ...rest}) => {
  const {colors} = useContext(ThemeContext);
  return <TextInput style={[styles(colors).textbox, style]} {...rest} />;
};

export default memo(Textbox);
