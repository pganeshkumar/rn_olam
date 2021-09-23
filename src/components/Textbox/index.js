import React, {memo, forwardRef, useState} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import VisibilityIcon from '../../assets/icons/visibility.svg';
import VisibilityOffIcon from '../../assets/icons/visibility_off.svg';
import {BorderlessButton} from 'react-native-gesture-handler';
import Typography from '../Typography';

const Textbox = ({
  field: {name, value, onChange, onBlur},
  form: {touched, errors},
  style,
  secureTextEntry,
  innerRef,
  ...rest
}) => {
  const {colors} = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);
  return (
    <View style={{marginVertical: 10}}>
      <View>
        <TextInput
          ref={innerRef}
          name={name}
          value={value}
          onChangeText={onChange(name)}
          onBlur={onBlur(name)}
          secureTextEntry={!isPasswordVisible}
          style={[styles(colors).textbox, style]}
          {...rest}
        />
        {secureTextEntry && (
          <BorderlessButton
            style={styles(colors).iconStyle}
            onPress={() => setIsPasswordVisible(val => !val)}>
            {isPasswordVisible ? (
              <VisibilityIcon height={24} widhth={24} fill={colors.primary} />
            ) : (
              <VisibilityOffIcon
                height={24}
                widhth={24}
                fill={colors.primary}
              />
            )}
          </BorderlessButton>
        )}
      </View>
      {touched[name] && errors[name] && (
        <Typography variant="error">{errors[name]}</Typography>
      )}
    </View>
  );
};
export default memo(Textbox);
