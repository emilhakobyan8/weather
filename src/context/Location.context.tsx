import React, {useCallback, useEffect, useState} from 'react';
import {Platform} from 'react-native';

import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import Config from 'react-native-config';

Geocoder.init(Config.GOOGLE_API_KEY);

const isIos = Platform.OS === 'ios';
const defaultCityName = 'Yerevan';

type LocationContextType = {
  currentCityName: string;
};

export const LocationContext = React.createContext<LocationContextType>({
  currentCityName: defaultCityName,
});

type LocationProviderProps = {};

const LocationProvider: React.FC<LocationProviderProps> = ({children}) => {
  const [currentCityName, setCurrentCityName] = useState('');
  const getLocationName = (coords: number[]) => {
    Geocoder.from(coords)
      .then(json => {
        let city = json.results[0].address_components[2];
        setCurrentCityName(city?.long_name || defaultCityName);
      })
      .catch(error => console.log(error));
  };

  const getCurrentCoordinates = useCallback(() => {
    Geolocation.getCurrentPosition(
      position => {
        getLocationName([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        setCurrentCityName(defaultCityName);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  const checkAndRequestPermissions = useCallback(() => {
    if (isIos) {
      check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        .then(result => {
          switch (result) {
            case RESULTS.DENIED:
              request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(
                permissionsStatus => {
                  switch (permissionsStatus) {
                    case RESULTS.GRANTED:
                      getCurrentCoordinates();
                      break;
                    case RESULTS.BLOCKED:
                      setCurrentCityName(defaultCityName);
                  }
                },
              );
              break;
            case RESULTS.GRANTED:
              getCurrentCoordinates();
              break;
            case RESULTS.BLOCKED:
              setCurrentCityName(defaultCityName);
              break;
          }
        })
        .catch(err => console.log(err));
    } else {
      check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
        switch (result) {
          case RESULTS.DENIED:
            request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(
              permissionsStatus => {
                switch (permissionsStatus) {
                  case RESULTS.GRANTED:
                    console.log('getCurrentCoordinates();');
                    getCurrentCoordinates();
                    break;
                  case RESULTS.BLOCKED:
                    console.log('setCurrentCityName(defaultCityName);');
                    setCurrentCityName(defaultCityName);
                }
              },
            );
            break;
          case RESULTS.GRANTED:
            getCurrentCoordinates();
            break;
          case RESULTS.BLOCKED:
            setCurrentCityName(defaultCityName);
            break;
        }
      });
    }
  }, [getCurrentCoordinates]);

  useEffect(() => {
    checkAndRequestPermissions();
  }, [checkAndRequestPermissions]);

  return (
    <LocationContext.Provider value={{currentCityName}}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
