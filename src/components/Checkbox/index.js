import React, {useContext, useMemo, useState} from 'react';
import {View} from 'react-native';
import CheckBoxOutline from '../../assets/icons/check_box_outline.svg';
import CheckBox from '../../assets/icons/check_box.svg';
import {BorderlessButton} from 'react-native-gesture-handler';
import {useTheme} from '@react-navigation/native';

const Checkbox = ({checked, onChange}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const {colors} = useTheme();

  const iconProps = useMemo(
    () => ({
      height: 24,
      width: 24,
      fill: colors.primary,
    }),
    [colors.primary],
  );

  const toggleCheckbox = () => {
    setIsChecked(val => {
      onChange(!val);
      return !val;
    });
  };

  return (
    <BorderlessButton onPress={toggleCheckbox}>
      {isChecked ? (
        <CheckBox {...iconProps} />
      ) : (
        <CheckBoxOutline {...iconProps} />
      )}
    </BorderlessButton>
  );
};

export default Checkbox;
