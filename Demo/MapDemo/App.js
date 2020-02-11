import React from 'react';
import {StyleSheet, View, Platform, Alert} from 'react-native';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {request, PERMISSIONS} from 'react-native-permissions';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: null,
    };
  }
  componentDidMount() {
    this.requestLocationPermissions();
  }

  requestLocationPermissions = async () => {
    if (Platform.OS === 'android') {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (response === 'granted') {
        this.locateCurrentPosition();
      }
    }
  };

  locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log('current position: ' + JSON.stringify(position));
        let initialPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035,
        };
        this.setState({initialPosition});
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 10000, maximumAge: 10000},
    );
  };

  onRegionChange(initialPosition) {
    this.locateCurrentPosition();
  }

  render() {
    const {initialPosition} = this.state;
    if (!initialPosition) {
      return null;
    }
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={map => (this.map = map)}
          showsUserLocation={true}
          style={styles.map}
          initialRegion={initialPosition}
          onRegionChange={this.onRegionChange()}>
          <Marker
            coordinate={initialPosition}
            title={'Home'}
            description={'Current position'}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    bottom: '0%',
    right: '0%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    bottom: '0%',
    right: '0%',
  },
});
