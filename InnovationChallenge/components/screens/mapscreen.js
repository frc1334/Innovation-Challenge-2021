
// mapscreen.js
import React, { Component } from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

import MapView from 'react-native-maps';

export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
    });
};

var UserLocation = {
    latitude: 0,
    longitude: 10,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
}

export default class Mapscreen extends Component {

    constructor (props) {
        super(props);
        this.states = {
          region: UserLocation
        }
    }

    componentDidMount() {
        return getCurrentLocation().then(position => {
          if (position) {
            this.states.region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.02,
                longitudeDelta: 0.04,
              },
              executed = true;
              
              this.forceUpdate();
          }},);
    }

    render() {
        return (
            <View style={styles.container}>
            <MapView style={StyleSheet.absoluteFillObject}
                provider = 'google'
                showsUserLocation
                region = {this.states.region}>
            </MapView>
            </View>
            )
        }
    }

function toUser({}){
    return getCurrentLocation().then(position => {
      if (position) {
          UserLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          },
        console.log(1)
      }
    },
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    contentContainer: {
      paddingTop: 30,
    },
    overlay: {
      position: 'absolute',
      bottom: 50,
      paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: "#007bff",
        borderColor: "#eee",
        borderRadius: 5,
        elevation: 10
    },
    overlay2: {
      position: 'absolute',
      right: 20,
      bottom: 50,
      paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: "white",
        borderColor: "#eee",
        borderRadius: 5,
        elevation: 10
    },
  });