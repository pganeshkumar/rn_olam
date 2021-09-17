import React, {useContext} from 'react';
import {Text} from 'react-native';
import {ThemeContext} from '../../context/themeContext';
import styles from './styles';

const Typography = ({variant, children, style}) => {
  const {colors} = useContext(ThemeContext);
  return (
    <Text style={[styles[variant], {color: colors.text}, style]}>
      {children}
    </Text>
  );
};

export default Typography;
