import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

type SearchResultItemProps = {
  name: string;
  onPress: () => void;
};

const SearchResultItem: React.FC<SearchResultItemProps> = ({name, onPress}) => {
  return (
    <Pressable style={styles.resultWrapper} onPress={onPress}>
      <Text style={styles.resultText}>{name}</Text>
    </Pressable>
  );
};

export default SearchResultItem;

const styles = StyleSheet.create({
  resultWrapper: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  resultText: {
    color: '#fff',
  },
});
