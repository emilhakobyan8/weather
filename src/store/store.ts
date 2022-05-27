import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import slices from './slices';
import citiesSlice from './slices/citiesSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const cityPersistConfig = {
  key: 'authReducer',
  storage: AsyncStorage,
  whitelist: ['cityIds'],
};

const rootReducer = combineReducers({
  ...slices,
  city: persistReducer(cityPersistConfig, citiesSlice),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({reducer: persistedReducer});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
