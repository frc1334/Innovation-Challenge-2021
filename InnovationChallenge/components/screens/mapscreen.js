
// mapscreen.js
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

import MapView from 'react-native-maps';

export default class Mapscreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MapView
         style={{ flex: 1 }}
         provider='google'
         showsUserLocation
         initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421}}
      ></MapView>
      </View>
    )
  }
}