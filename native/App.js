import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native'

import InputNativeBaseComponent from '../src/native/InputNativeBaseComponent'
import InputHOC from '../src/hoc/InputHOC'

export default class App extends Component {
  render() {
    const InputComponent = InputHOC(InputNativeBaseComponent)
    return (
      <View style={styles.container}>
        <InputComponent title='native' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
