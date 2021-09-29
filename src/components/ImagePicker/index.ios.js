import {PureComponent} from 'react';
import {ActionSheetIOS} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import actions from './actions';

class ImagePicker extends PureComponent {
  state = {
    response: null,
  };

  openImagePicker = () => {
    const {dark} = this.props;
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', ...actions.map(x => x.title)],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
        userInterfaceStyle: dark ? 'dark' : 'light',
      },
      buttonIndex => {
        console.warn(buttonIndex);
        if (buttonIndex === 0) {
        } else if (actions[buttonIndex - 1].type === 'capture') {
          launchCamera(
            actions[buttonIndex - 1].options,
            this.props.onSelectImage,
          );
        } else if (actions[buttonIndex - 1].type === 'library') {
          launchImageLibrary(
            actions[buttonIndex - 1].options,
            this.props.onSelectImage,
          );
        }
      },
    );
  };
  render() {
    return null;
  }
}

export default ImagePicker;
