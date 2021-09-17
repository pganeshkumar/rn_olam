import React, {createContext} from 'react';
import {useColorScheme} from 'react-native';

const lightTheme = {
  primary: 'rgb(255, 45, 85)',
  background: 'rgb(242, 242, 242)',
  card: 'rgb(255, 255, 255)',
  text: 'rgb(28, 28, 30)',
  border: 'rgb(199, 199, 204)',
  notification: 'rgb(255, 69, 58)',
};

const darkThme = {
  primary: 'rgb(10, 132, 255)',
  background: 'rgb(1, 1, 1)',
  card: 'rgb(18, 18, 18)',
  text: 'rgb(229, 229, 231)',
  border: 'rgb(70, 80, 90)',
  notification: 'rgb(255, 69, 58)',
};

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const colorScheme = useColorScheme();
  return (
    <ThemeContext.Provider
      value={{
        theme: colorScheme,
        colors: colorScheme === 'dark' ? darkThme : lightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
