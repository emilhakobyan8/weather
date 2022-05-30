import React, {useCallback, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './CityInfoCard.styles';
import {Units} from '../../types';
import {useAppSelector} from '../../hooks/store';
import {unitSelector} from '../../store/selectors/configSelectors';
Icon.loadFont();

type CityInfoCardProps = {
  data: any;
  onLongPress: () => void;
  dragging: boolean;
  onItemDelete: () => void;
  isFirst: boolean;
};

const speedUnitsMapping: Record<string, string> = {
  [Units.metric]: 'mps',
  [Units.imperial]: 'mph',
};

const CityInfoCard: React.FC<CityInfoCardProps> = ({
  data,
  onLongPress,
  dragging,
  onItemDelete,
  isFirst,
}) => {
  const [swipeableNode, setSwipeableNode] = useState<Swipeable | null>(null);
  const unit = useAppSelector(unitSelector);
  const animateFirst = useCallback(() => {
    if (isFirst) {
      swipeableNode?.openRight();
      setTimeout(() => {
        swipeableNode?.close();
      }, 500);
    }
  }, [swipeableNode, isFirst]);

  if (!data?.id) {
    return null;
  }

  const rightButtons = () => (
    <Pressable style={styles.deleteButton} onPress={onItemDelete}>
      <Icon name="trash-can-outline" size={25} color="#fff" />
    </Pressable>
  );

  return (
    <Swipeable
      renderRightActions={rightButtons}
      ref={setSwipeableNode}
      overshootRight={false}>
      <Pressable
        style={styles.container}
        onLongPress={onLongPress}
        onPress={animateFirst}
        disabled={dragging}>
        <View style={styles.heading}>
          <Text style={styles.locationName}>{data.name}</Text>
          <Text style={styles.temperature}>
            {Math.round(data.weather.temperature.actual)}°
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.windInfo}>
            <Icon name="weather-windy" size={16} /> {data.weather.wind.speed}
            {speedUnitsMapping[unit]}
          </Text>
          <Text style={styles.windInfo}>
            <Icon name="eye-outline" size={16} />
            {Math.round(data.weather.clouds.visibility / 1000)}km
          </Text>
          <View style={styles.row}>
            <Icon name="arrow-up-thin" size={20} color="#fff" />
            <Text style={styles.temperatureInfo}>
              ${Math.round(data.weather.temperature.max)}°
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="arrow-down-thin" size={20} color="#fff" />
            <Text style={styles.temperatureInfo}>
              {Math.round(data.weather.temperature.min)}°
            </Text>
          </View>
        </View>
      </Pressable>
    </Swipeable>
  );
};

export default CityInfoCard;
