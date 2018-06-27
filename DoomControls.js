import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  NativeModules,
  TouchableOpacity,
} from 'react-native';
const { ControlManager } = NativeModules;

export default class Doom extends Component {
  onFireButtonPress = () => {
    ControlManager.fire();
  };

  onFunButtonPress = () => {
    ControlManager.fun();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onFireButtonPress}>
          <Image
            style={{ width: 48, height: 48 }}
            source={require('./fire.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onFunButtonPress}>
          <Image
            style={{ width: 48, height: 48 }}
            source={require('./party.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
