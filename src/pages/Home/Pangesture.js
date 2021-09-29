import React from 'react';
import {View, Dimensions} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import Card, {CARD_WIDTH, CARD_HEIGHT} from './Card';
import {clamp} from 'react-native-redash';
const {height, width} = Dimensions.get('window');

const Pangesture = () => {
  const boundX = width - CARD_WIDTH;
  const boundY = height - CARD_HEIGHT;

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_event, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (_event, ctx) => {
      translateX.value = clamp(ctx.offsetX + _event.translationX, 0, boundX);
      translateY.value = clamp(ctx.offsetY + _event.translationY, 0, boundY);
    },
    onEnd: ({velocityX, velocityY}) => {
      translateX.value = withDecay({
        velocity: velocityX,
        clamp: [0, boundX],
      });
      translateY.value = withDecay({
        velocity: velocityY,
        clamp: [0, boundY],
      });
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <View style={{flex: 1}}>
      <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View {...{style}}>
          <Card card={0} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Pangesture;
