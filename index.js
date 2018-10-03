import React from 'react';
import { NativeModules, StyleSheet, Text, View } from 'react-native';

var PanoramaView = NativeModules.PanoramaView;

export default class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <PanoramaView/>
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
