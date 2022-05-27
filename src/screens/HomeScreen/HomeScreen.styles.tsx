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
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    paddingTop: 130,
    height: height - 130,
  },
});

export default styles;
