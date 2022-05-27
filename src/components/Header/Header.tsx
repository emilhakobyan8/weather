import React from 'react';
import {Pressable, Text} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Header.styles';

Icon.loadFont();

type HeaderProps = {
  openSearch: () => void;
};

const Header: React.FC<HeaderProps> = ({openSearch}) => {
  return (
    <BlurView blurType="dark" blurAmount={20} style={styles.container}>
      <Text style={styles.title}>Weather</Text>
      <Pressable style={styles.searchInputView} onPress={openSearch}>
        <Icon name="search" color="white" />
        <Text style={styles.searchInputViewLabel}>Search for cities</Text>
      </Pressable>
    </BlurView>
  );
};

export default Header;
