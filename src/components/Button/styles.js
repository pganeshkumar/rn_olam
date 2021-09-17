import {StyleSheet} from 'react-native';

const styles = colors =>
  StyleSheet.create({
    btn: {
      height: 40,
      backgroundColor: colors.primary,
      borderRadius: 5,
      paddingHorizontal: 20,
    },
  });

export default styles;
