import React from "react";
import {
  Dimensions,
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
const {width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default class RN360ImageViewer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PanoramaView
          style={{
            backgroundColor: 'red',
            width: screenWidth,
            height: screenHeight,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
