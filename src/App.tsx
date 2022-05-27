import React from 'react';

import GraphQlProvider from './context/Apollo.context';
import MainNavigation from './navigation/MainNavigation';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import 'react-native-gesture-handler';
import LocationProvider from './context/Geocoding.context';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
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
