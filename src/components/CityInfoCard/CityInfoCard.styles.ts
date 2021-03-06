import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: '#468498',
    shadowColor: '#7fa0a9',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    height: 100,
    justifyContent: 'space-between',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  temperature: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  footer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  windInfo: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  temperatureInfo: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  draggingStyles: {
    opacity: 0.8,
  },
  deleteButton: {
    width: 75,
    backgroundColor: '#ee4545',
    marginTop: 8,
    height: 100,
    justifyContent: 'center',
    paddingLeft: 25,
    borderRadius: 8,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default styles;
