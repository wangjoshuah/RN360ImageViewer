import React from "react";
import {
  NativeModules,
  requireNativeComponent,
  StyleSheet,
  Text,
  View
} from "react-native";
console.log('Native Modules');
console.log(NativeModules);
console.log(NativeModules.UIManager);
const nativeModules = NativeModules;
const PanoramaView = requireNativeComponent('PanoramaView', null);
// const JHW360ViewManager = requireNativeComponent('JHW360ViewManager', 'JHW360ViewManager');
// const JHW360View = requireNativeComponent('JHW360View', null);

export default class RN360ImageViewer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Panorama View</Text>
        <PanoramaView
          style={{ flex: 1 }}
        />
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