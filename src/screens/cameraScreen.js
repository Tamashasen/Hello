import React, { Component } from 'react'
import { StyleSheet, View, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class CamerScreen extends {
    render() {
      return (
        <View style={styles.container}>
          <RNCamera
            style={{ flex: 1, alignItems: 'center' }}
            ref={ref => {
              this.camera = ref
            }}
          />
        </View>
      );
    },
  }
  
  {}
