import {createSlice} from '@reduxjs/toolkit';
import {ID} from '../../types';
import {GetCityByName_getCityByName} from '../../screens/HomeScreen/__generated__/GetCityByName';

export type CityMapType = {[key: string]: GetCityByName_getCityByName};

export interface CitiesState {
  cityIds: ID[];
  cityMap: CityMapType;
  searchData: any;
}

const initialState: CitiesState = {
  cityIds: [],
  cityMap: {},
  searchData: null,
};

const citiesSlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCityList: (state, action) => {
      state.cityMap =
        action.payload?.reduce(
          (acc: CityMapType, current: GetCityByName_getCityByName) => ({
            ...acc,
            [current.id as keyof GetCityByName_getCityByName]: current,
          }),
          {},
        ) || {};
    },
    storeCityId: (state, action) => {
      state.cityIds = [
        ...state.cityIds.filter((id: ID) => id !== action.payload),
        action.payload,
      ];
    },
    setSortedIds: (state, action) => {
      state.cityIds = action.payload;
    },
    removeCity: (state, action) => {
      state.cityIds = state.cityIds.filter((id: ID) => id !== action.payload);

      const updatedCityMap = state.cityMap;
      delete updatedCityMap[action.payload];
      state.cityMap = updatedCityMap;
    },
    setCurrentLocationCity: (state, action) => {
      state.cityMap = {...state.cityMap, [action.payload.id]: action.payload};
      state.cityIds = [
        ...state.cityIds.filter((id: ID) => id !== action.payload.id),
        action.payload.id,
      ];
    },
  },
});

export const {
  setCityList,
  storeCityId,
  removeCity,
  setSortedIds,
  setCurrentLocationCity,
} = citiesSlice.actions;

export default citiesSlice.reducer;
