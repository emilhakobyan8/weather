import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 120,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 16,
  },
  searchInput: {
    color: '#fff',
    width: '100%',
    height: 30,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 8,
  },
});

export default styles;
