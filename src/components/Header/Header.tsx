import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Header.styles';
import {useAppDispatch, useAppSelector} from '../../hooks/store';
import {unitSelector} from '../../store/selectors/configSelectors';
import {changeWeatherUnit} from '../../store/slices/configsSlice';
import {Units} from '../../types';
import Switch from '../Switch/Switch';

Icon.loadFont();

type HeaderProps = {
  openSearch: () => void;
};

const unitsMapping: Record<string, string> = {
  [Units.imperial]: 'F',
  [Units.metric]: 'C',
};

const Header: React.FC<HeaderProps> = ({openSearch}) => {
  const unit = useAppSelector(unitSelector);
  const dispatch = useAppDispatch();

  const toggleUnit = () => {
    dispatch(
      changeWeatherUnit(unit === Units.metric ? Units.imperial : Units.metric),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather</Text>
      <Pressable style={styles.searchInputView} onPress={openSearch}>
        <Icon name="search" color="white" />
        <Text style={styles.searchInputViewLabel}>Search for cities</Text>
      </Pressable>
      <View style={styles.unitButton}>
        <Text style={styles.switchLabel}>{unitsMapping[unit]}</Text>
        <Switch onChange={toggleUnit} value={unit} style={styles.switch} />
      </View>
    </View>
  );
};

export default Header;
