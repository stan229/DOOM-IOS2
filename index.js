import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

class Doom extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Text>Hello World</Text>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
} });

AppRegistry.registerComponent('Doom', () => Doom);
