import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

export const {width} = Dimensions.get('window');
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

const assets = [
  require('../../assets/images/card1.png'),
  require('../../assets/images/card2.png'),
  require('../../assets/images/card3.png'),
  require('../../assets/images/card4.png'),
  require('../../assets/images/card5.png'),
  require('../../assets/images/card6.png'),
];

const Card = ({card}) => {
  return (
    <Image
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: 'cyan',
        borderRadius: 16,
      }}
      source={assets[card]}
    />
  );
};

export default Card;
