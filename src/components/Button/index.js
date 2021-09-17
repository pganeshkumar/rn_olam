import React, {useContext} from 'react';
import {View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {ThemeContext} from '../../context/themeContext';
import Typography from '../Typography';
import styles from './styles';
import globalStyle from '../../globalStyle';

const Button = ({title, ...rest}) => {
  const {colors} = useContext(ThemeContext);
  return (
    <RectButton style={[styles(colors).btn, globalStyle.center]} {...rest}>
      <View accessible accessibilityRole="button">
        <Typography variant="button">{title}</Typography>
      </View>
    </RectButton>
  );
};

export default Button;
