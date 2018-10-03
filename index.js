import React from 'react';
import {
  AppRegistry,
  NativeModules,
  StyleSheet,
  Text,
  View
} from 'react-native';

var PanoramaView = NativeModules.PanoramaView;

export default class RN360ImageViewer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Text above panorama view</Text>
        <Text>Text under panorama view</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('RN360ImageViewer', () => RN360ImageViewer);
