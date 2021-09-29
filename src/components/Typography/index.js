import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Typography = ({variant, children, style, ...rest}) => {
  const {colors} = useTheme();
  return (
    <Text style={[styles(colors)[variant], style]} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;
