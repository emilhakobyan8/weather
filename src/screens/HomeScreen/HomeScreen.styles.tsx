import {StyleSheet} from 'react-native';
import type {ViewStyle} from 'react-native';

type IStyles = {
  container: ViewStyle;
  loaderContainer: ViewStyle;
  flatList: ViewStyle;
};

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    paddingHorizontal: 8,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    paddingTop: 130,
  },
});

export default styles;
