import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Keychain from 'react-native-keychain';
import {useColorScheme} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeFilledIcon from './src/assets/icons/home_filled.svg';
import HomeOutlineIcon from './src/assets/icons/home_outline.svg';
import SettingsFilledIcon from './src/assets/icons/settings_filled.svg';
import SettingOutlineIcon from './src/assets/icons/settings_outline.svg';
import MenuIcon from './src/assets/icons/menu.svg';
import {BorderlessButton} from 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const SettingsStack = createNativeStackNavigator();

const DrawerContainer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        getComponent={() => require('./src/pages/Home').default}
      />
      <Drawer.Screen
        name="Notifications"
        getComponent={() => require('./src/pages/Settings').default}
      />
    </Drawer.Navigator>
  );
};

const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SettingsStack.Screen
        name="SettingsScreen"
        getComponent={() => require('./src/pages/Settings').default}
      />
      <SettingsStack.Screen
        name="ProfileScreen"
        getComponent={() => require('./src/pages/Profile').default}
      />
      <SettingsStack.Screen
        name="ChangePasswordScreen"
        getComponent={() => require('./src/pages/ChangePassword').default}
      />
    </SettingsStack.Navigator>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => {
        return {
          tabBarIcon: ({focused, color, size}) => {
            const iconProps = {
              height: size,
              width: size,
              fill: color,
            };
            switch (route.name) {
              case 'Home':
                if (focused) {
                  return <HomeFilledIcon {...iconProps} />;
                } else {
                  return <HomeOutlineIcon {...iconProps} />;
                }
              case 'Settings':
                if (focused) {
                  return <SettingsFilledIcon {...iconProps} />;
                } else {
                  return <SettingOutlineIcon {...iconProps} />;
                }

              default:
                return null;
            }
          },
          headerLeft: () => {
            return (
              <BorderlessButton
                style={{marginLeft: 10}}
                onPress={() => navigation.openDrawer()}>
                <MenuIcon height={24} width={24} fill="red" />
              </BorderlessButton>
            );
          },
        };
      }}>
      <Tab.Screen
        name="Home"
        getComponent={() => require('./src/pages/Home').default}
      />
      <Tab.Screen name="Settings" component={SettingsStackNavigator} />
    </Tab.Navigator>
  );
};

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#000',
  },
};

const customLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const App = () => {
  const scheme = useColorScheme();
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={scheme === 'dark' ? customDarkTheme : customLightTheme}
      onReady={async () => {
        try {
          // const user = await AsyncStorage.getItem('user');
          const credentials = await Keychain.getGenericPassword();

          if (credentials) {
            navigationRef.resetRoot({
              index: 0,
              routes: [{name: 'Main'}],
            });
          } else {
            navigationRef.resetRoot({
              index: 0,
              routes: [{name: 'Login'}],
            });
          }
        } catch (error) {}
      }}>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="Login"
            getComponent={() => require('./src/pages/Login').default}
          />
          <Stack.Screen
            name="Register"
            getComponent={() => require('./src/pages/Register').default}
          />
          <Stack.Screen name="Main" component={MainTab} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   Image,
//   useColorScheme,
//   Button,
//   TouchableHighlight,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   Pressable,
//   TextInput,
//   PixelRatio,
// } from 'react-native';
// import FastImage from 'react-native-fast-image';
// import Svg, {Circle, Rect} from 'react-native-svg';
// // import Icon from 'react-native-vector-icons/MaterialIcons';
// import FavoriteIcon from './src/assets/icons/favorite_border.svg';
// import Config from 'react-native-config';

// const ButtonUI = () => {
//   return (
//     <View
//       style={{
//         height: 40,
//         backgroundColor: 'tomato',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//       }}>
//       <FavoriteIcon height={24} width={24} fill="red" />
//       {/* <Icon name="search" size={30} color="#900" /> */}
//       <Text
//         style={{
//           fontSize: 18,
//           color: '#fff',
//           fontWeight: '500',
//         }}>
//         Submit
//       </Text>
//     </View>
//   );
// };

// const CustomTextInput = () => {
//   return (
//     <TextInput
//       style={{
//         borderWidth: 1,
//         borderColor: '#BDBDBD',
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         margin: 10,
//         fontSize: 16,
//         height: 40,
//       }}
//     />
//   );
// };

// const App = () => {
//   const colorScheme = useColorScheme();
//   console.warn(Config.API_URL);

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//       }}>
//       <FastImage
//         source={{
//           uri: 'https://reactjs.org/logo-og.png',
//           priority: FastImage.priority.high,
//         }}
//         style={{
//           height: 100,
//           flex: 1,
//           borderRadius: 20,
//         }}
//         resizeMode="stretch"
//       />
//       <Svg height="50%" width="50%" viewBox="0 0 100 100">
//         <Circle
//           cx="50"
//           cy="50"
//           r="45"
//           stroke="blue"
//           strokeWidth="2.5"
//           fill="green"
//         />
//         <Rect
//           x="15"
//           y="15"
//           width="70"
//           height="70"
//           stroke="red"
//           strokeWidth="2"
//           fill="yellow"
//         />
//       </Svg>

//       <CustomTextInput />
//       <Text>{PixelRatio.get()}</Text>
//       <Button title="Submit" onPress={() => {}} />
//       <TouchableHighlight
//         style={{
//           margin: 10,
//           borderRadius: 5,
//         }}
//         onPress={() => {}}>
//         <ButtonUI />
//       </TouchableHighlight>

//       <TouchableOpacity
//         style={{
//           margin: 10,
//           borderRadius: 5,
//         }}
//         onPress={() => {}}>
//         <ButtonUI />
//       </TouchableOpacity>

//       <TouchableWithoutFeedback
//         style={{
//           margin: 10,
//           borderRadius: 5,
//         }}
//         onPress={() => {}}>
//         <ButtonUI />
//       </TouchableWithoutFeedback>

//       <Pressable
//         android_ripple={{
//           color: 'red',
//           radius: 5,
//         }}
//         style={{
//           margin: 10,
//           height: 40,
//           backgroundColor: 'tomato',
//           justifyContent: 'center',
//           alignItems: 'center',
//           borderRadius: 5,
//         }}
//         onPress={() => {}}>
//         <Text
//           style={{
//             fontSize: 18,
//             color: '#fff',
//             fontWeight: '500',
//           }}>
//           Submit
//         </Text>
//       </Pressable>
//     </SafeAreaView>
//   );
// };

// export default App;
