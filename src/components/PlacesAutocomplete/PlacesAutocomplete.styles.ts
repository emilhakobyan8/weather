import {Dimensions, Platform, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  searchIconWrapper: {
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  searchIcon: {
    position: 'absolute',
    top: 9,
    left: 8,
  },
  searchInputContainer: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingLeft: 20,
    borderRadius: 8,
    height: 30,
  },
  searchInput: {
    color: '#fff',
    paddingHorizontal: 8,
    height: 30,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0)',
    flexDirection: 'row',
    alignItems: 'center',
    ...Platform.select({
      android: {
        padding: 0,
        margin: 0,
        borderWidth: 0,
      },
    }),
  },
  listView: {
    marginTop: 16,
    height: height - 108,
  },
  listRow: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listRowText: {
    color: '#fff',
  },
});

export default styles;
