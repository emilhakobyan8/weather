import {Platform, StyleSheet} from 'react-native';

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
    borderBottomWidth: 0.5,
    borderColor: '#303032',
    backgroundColor: 'rgb(25,25,26)',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 16,
  },
  searchInputView: {
    color: '#fff',
    width: '100%',
    height: 30,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInputViewLabel: {
    color: '#fff',
    marginLeft: 8,
  },
  unitButton: {
    position: 'absolute',
    top: 40,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  unitButtonText: {
    color: '#fff',
  },
  switch: {
    ...Platform.select({
      ios: {
        marginLeft: 6,
      },
    }),
  },
  switchLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
