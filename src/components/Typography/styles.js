import {StyleSheet} from 'react-native';

const styles = colors =>
  StyleSheet.create({
    h1: {
      fontSize: 24,
      fontWeight: '500',
      lineHeight: 28,
      letterSpacing: 2,
      color: colors.text,
    },
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {
      fontSize: 18,
      fontWeight: '400',
      lineHeight: 22,
      letterSpacing: 1.2,
      color: colors.text,
    },
    body2: {},
    button: {
      fontSize: 18,
      fontWeight: '500',
      lineHeight: 22,
      letterSpacing: 1.2,
      color: colors.text,
    },
    caption: {},
    overline: {},
    error: {
      fontSize: 12,
      fontWeight: '300',
      lineHeight: 14,
      letterSpacing: 0.8,
      color: colors.notification,
    },
  });

export default styles;
