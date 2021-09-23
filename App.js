import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import {useColorScheme} from 'react-native';
import Home from './src/pages/Home';

const Stack = createNativeStackNavigator();

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
  return (
    <NavigationContainer
      theme={scheme === 'dark' ? customDarkTheme : customLightTheme}>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Group>
        <Stack.Screen name="Home" component={Home} />
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
