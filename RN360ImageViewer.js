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
const nativeModules = NativeModules;
debugger;
const PanoramaView = requireNativeComponent('PanoramaView', 'JHW360ViewManager');
const OriginalPanoramaView = requireNativeComponent('PanoramaView', 'PanoramaView');
const JHW360ViewManager = requireNativeComponent('JHW360ViewManager', 'JHW360ViewManager');
const JHW360View = requireNativeComponent('JHW360View', null);

export default class RN360ImageViewer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Panorama View</Text>
        <PanoramaView
          image="R0010020"
        />
        <Text>original panorama view</Text>
        <OriginalPanoramaView/>
        <Text>jhw360 View Manager</Text>
        <JHW360ViewManager/>
        <Text>JHW360 View</Text>
        <JHW360View style={{ flex: 1 }}/>
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