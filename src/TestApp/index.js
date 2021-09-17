import React from 'react';
import {View, Text} from 'react-native';
import {LocaleContext} from '../context/localeContext';

const TestApp = () => {
  return (
    <View>
      <Text>Test Application</Text>

      <LocaleContext.Consumer>
        {value => {
          console.log('render Test App');
          return <Text>{value.locale}</Text>;
        }}
      </LocaleContext.Consumer>
    </View>
  );
};

export default TestApp;
