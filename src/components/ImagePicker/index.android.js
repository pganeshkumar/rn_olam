import React, {PureComponent} from 'react';
import {View, PermissionsAndroid} from 'react-native';
import {RectButton, gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';
import Typography from '../Typography';
import actions from './actions';

const CustomRectButton = gestureHandlerRootHOC(({onPress, toggleModal}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      {actions.map(x => {
        return (
          <RectButton onPress={() => onPress(x)} style={{padding: 10}}>
            <View accessible accessibilityRole="button">
              <Typography variant="body1">{x.title}</Typography>
            </View>
          </RectButton>
        );
      })}
      <RectButton onPress={toggleModal} style={{padding: 10}}>
        <View accessible accessibilityRole="button">
          <Typography variant="body1">Cancel</Typography>
        </View>
      </RectButton>
    </View>
  );
});

class ImagePicker extends PureComponent {
  state = {isVisible: false};

  openImagePicker = () => {
    this.setState(({isVisible}) => ({isVisible: !isVisible}));
  };

  onPressItem = async item => {
    if (item.type === 'capture') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'This App Camera Permission',
          message:
            'This App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.warn(granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        launchCamera(item.options, res => {
          this.setState({isVisible: false});
          this.props.onSelectImage(res);
        });
      } else {
        console.log('Camera permission denied');
      }
    } else if (item.type === 'library') {
      launchImageLibrary(item.options, res => {
        this.setState({isVisible: false});
        this.props.onSelectImage(res);
      });
    }
  };

  render() {
    const {isVisible} = this.state;
    return (
      <Modal isVisible={isVisible}>
        <CustomRectButton
          toggleModal={this.openImagePicker}
          onPress={this.onPressItem}
        />
      </Modal>
    );
  }
}

export default ImagePicker;
