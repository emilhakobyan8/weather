import React from 'react';

import GraphQlProvider from './context/Apollo.context';
import MainNavigation from './navigation/MainNavigation';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import 'react-native-gesture-handler';
import LocationProvider from './context/Location.context';
import {StyleSheet} from 'react-native';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <GraphQlProvider>
        <Provider store={store}>
          <LocationProvider>
            <MainNavigation />
          </LocationProvider>
        </Provider>
      </GraphQlProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {flex: 1},
});
