import {useTheme} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {BorderlessButton} from 'react-native-gesture-handler';
import PersonIcon from '../../assets/icons/person_outline.svg';
import ImagePicker from '../../components/ImagePicker';

const Profile = () => {
  const {dark} = useTheme();
  const imagePickerRedf = useRef(null);
  const [imageRes, setImageRes] = useState(null);

  return (
    <View>
      <View style={{alignItems: 'center', marginVertical: 10}}>
        <BorderlessButton
          onPress={() => {
            imagePickerRedf.current.openImagePicker();
          }}
          style={{
            borderWidth: 3,
            borderColor: '#222',
            borderRadius: 50,
            height: 100,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {imageRes?.assets && imageRes?.assets.length > 0 ? (
            <FastImage
              source={{
                uri: imageRes?.assets[0].uri,
              }}
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
              }}
            />
          ) : (
            <PersonIcon height={80} width={80} fill="#222" />
          )}
        </BorderlessButton>
        <ImagePicker
          ref={imagePickerRedf}
          dark={dark}
          onSelectImage={setImageRes}
        />
      </View>
    </View>
  );
};

export default Profile;
