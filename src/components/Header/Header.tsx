import React, {useState} from 'react';
import {Text, TextInput} from 'react-native';
import {BlurView} from '@react-native-community/blur';

import styles from './Header.styles';

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const handleChange = (value: string) => {
    setSearchValue(value);
  };
  return (
    <BlurView
      blurType="dark"
      blurAmount={20}
      reducedTransparencyFallbackColor={'black'}
      style={styles.container}>
      <Text style={styles.title}>Weather</Text>
      <TextInput
        value={searchValue}
        onChangeText={handleChange}
        style={styles.searchInput}
        placeholder="Search for cities"
        placeholderTextColor="#fffs"
      />
    </BlurView>
  );
};

export default Header;
