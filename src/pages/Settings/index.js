import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Typography from '../../components/Typography';

const data = [
  {
    name: 'Profile',
    screen: 'ProfileScreen',
  },
  {
    name: 'Change Password',
    screen: 'ChangePasswordScreen',
  },
  {
    name: 'Logout',
  },
];

const Settings = ({navigation}) => {
  const onPressItem = item => {
    if (item.screen) {
      navigation.navigate(item.screen);
    }
  };

  const renderItem = ({item}) => {
    return (
      <RectButton
        onPress={() => onPressItem(item)}
        style={{paddingVertical: 10, paddingHorizontal: 10}}>
        <View accessible accessibilityRole="button">
          <Typography variant="body1">{item.name}</Typography>
        </View>
      </RectButton>
    );
  };

  return <FlatList data={data} renderItem={renderItem} />;
};

export default Settings;
