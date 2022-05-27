import React, {
  DragEventHandler,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {View, Text, Pressable} from 'react-native';
import Swipeable, {
  SwipeableProps,
} from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './CityInfoCard.styles';

Icon.loadFont();

type CityInfoCardProps = {
  data: any;
  onLongPress: () => void;
  dragging: boolean;
  onItemDelete: () => void;
  isFirst: boolean;
};

const CityInfoCard: React.FC<CityInfoCardProps> = ({
  data,
  onLongPress,
  dragging,
  onItemDelete,
  isFirst,
}) => {
  const [swipeableNode, setSwipeableNode] = useState<Swipeable | null>(null);

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
      <Icon name="trash" size={25} color="#fff" />
    </Pressable>
  );

  return (
    <Swipeable renderRightActions={rightButtons} ref={setSwipeableNode}>
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
            Wind: {data.weather.wind.speed}km/h
          </Text>
          <Text style={styles.windInfo}>
            Visibility: {Math.round(data.weather.clouds.visibility / 1000)}km
          </Text>
          <Text style={styles.temperatureInfo}>
            {`H: ${Math.round(data.weather.temperature.max)}° M:${Math.round(
              data.weather.temperature.min,
            )}°`}
          </Text>
        </View>
      </Pressable>
    </Swipeable>
  );
};

export default CityInfoCard;
