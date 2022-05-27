import {StyleSheet} from 'react-native';
import type {ViewStyle} from 'react-native';

type IStyles = {
  searchInputWrapper: ViewStyle;
  searchInput: ViewStyle;
  loaderContainer: ViewStyle;
};

const styles = StyleSheet.create<IStyles>({
  searchInputWrapper: {
    width: '100%',
    height: 30,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  searchInput: {
    color: '#fff',
    paddingHorizontal: 8,
  },
  loaderContainer: {
    position: 'absolute',
    right: 8,
  },
});

export default styles;
