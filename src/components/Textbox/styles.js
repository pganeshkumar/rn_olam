import {StyleSheet} from 'react-native';

const styles = colors =>
  StyleSheet.create({
    textbox: {
      borderRadius: 5,
      height: 40,
      paddingHorizontal: 10,
      borderWidth: 1,
      fontSize: 18,
      fontWeight: '500',
      borderColor: colors.border,
      backgroundColor: colors.card,
      color: colors.text,
    },
    iconStyle: {
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
      right: 10,
      top: 0,
      height: 40,
      zIndex: 10,
    },
  });

export default styles;
