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
const PanoramaView = requireNativeComponent('PanoramaView', null);

export default class RN360ImageViewer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Panorama View</Text>
        <PanoramaView
          style={{
            backgroundColor: 'red',
            flex: 1
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});