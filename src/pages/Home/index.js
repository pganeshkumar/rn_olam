import React, {useState} from 'react';
import {View} from 'react-native';
import Pangesture from './Pangesture';

const Home = () => {
  const [container, setContainer] = useState(null);
  return (
    <View
      style={{flex: 1}}
      onLayout={({nativeEvent: {layout}}) => {
        setContainer(layout);
      }}>
      {container && <Pangesture {...container} />}
    </View>
  );
};

// const Home = () => {
//   const redOpacity = useRef(new Animated.Value(1)).current;
//   const orangeOpacity = useRef(new Animated.Value(0.2)).current;
//   const greenOpacity = useRef(new Animated.Value(0.2)).current;
//   const [currentLight, setCurrentLight] = useState('red');
//   const intervalRef = useRef(null);

//   const startTrafficLight = useCallback(() => {
//     Animated.parallel([
//       Animated.timing(redOpacity, {
//         toValue: currentLight === 'red' ? 1 : 0.2,
//       }),
//       Animated.timing(orangeOpacity, {
//         toValue: currentLight === 'orange' ? 1 : 0.2,
//       }),
//       Animated.timing(greenOpacity, {
//         toValue: currentLight === 'green' ? 1 : 0.2,
//       }),
//     ]).start();
//   }, [currentLight, redOpacity, orangeOpacity, greenOpacity]);

//   useEffect(() => {
//     startTrafficLight();
//   }, [currentLight, startTrafficLight]);

//   const moveBall = () => {
//     intervalRef.current = setInterval(() => {
//       setCurrentLight(val => {
//         if (val === 'red') {
//           return 'orange';
//         }
//         if (val === 'orange') {
//           return 'green';
//         }
//         if (val === 'green') {
//           return 'red';
//         }
//       });
//     }, 1000);
//   };

//   const stopTrafficLight = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }
//   };

//   return (
//     <View>
//       <Typography variant="body1">Home page</Typography>

//       <Animated.View
//         style={{
//           height: 100,
//           width: 100,
//           backgroundColor: 'red',
//           borderRadius: 50,
//           opacity: redOpacity,
//         }}></Animated.View>

//       <Animated.View
//         style={{
//           height: 100,
//           width: 100,
//           backgroundColor: 'orange',
//           borderRadius: 50,
//           opacity: orangeOpacity,
//         }}></Animated.View>

//       <Animated.View
//         style={{
//           height: 100,
//           width: 100,
//           backgroundColor: 'green',
//           borderRadius: 50,
//           opacity: greenOpacity,
//         }}></Animated.View>

//       <Button
//         title="Start Traffic Light"
//         onPress={moveBall}
//         style={{
//           marginVertical: 10,
//         }}
//       />
//       <Button
//         title="Stop Traffic Light"
//         onPress={stopTrafficLight}
//         style={{
//           marginVertical: 10,
//         }}
//       />
//     </View>
//   );
// };

export default Home;
