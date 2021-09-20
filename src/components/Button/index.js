import React from 'react';
import {View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useTheme} from '@react-navigation/native';
import Typography from '../Typography';
import styles from './styles';
import globalStyle from '../../globalStyle';

const Button = ({title, style, disabled, ...rest}) => {
  const {colors} = useTheme();
  return (
    <RectButton
      style={[
        styles(colors).btn,
        globalStyle.center,
        disabled ? {backgroundColor: '#2d2d2d'} : {},
        style,
      ]}
      {...rest}>
      <View accessible accessibilityRole="button">
        <Typography variant="button">{title}</Typography>
      </View>
    </RectButton>
  );
};

export default Button;
