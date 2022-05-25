import React from 'react';
import {View, Text} from 'react-native';
import styles from './CityInfoCard.styles';

const CityInfoCard = ({data}) => {
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.locationName}>{data.name}</Text>
        <Text style={styles.temperature}>
          {Math.round(data.weather.temperature.actual)}°
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.windInfo}>Wind: {data.weather.wind.speed}km/h</Text>
        <Text style={styles.windInfo}>
          Visibility: {Math.round(data.weather.clouds.visibility / 1000)}km
        </Text>
        <Text style={styles.temperatureInfo}>
          {`H: ${Math.round(data.weather.temperature.max)}° M:${Math.round(
            data.weather.temperature.min,
          )}°`}
        </Text>
      </View>
    </View>
  );
};

export default CityInfoCard;
