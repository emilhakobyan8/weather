import {Dimensions, StyleSheet} from 'react-native';
import type {ViewStyle} from 'react-native';

type IStyles = {
  container: ViewStyle;
  loaderContainer: ViewStyle;
  flatList: ViewStyle;
};

const {height} = Dimensions.get('window');

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    paddingHorizontal: 16,
  },
  loaderContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    paddingTop: 130,
    height: height - 130,
  },
});

export default styles;
