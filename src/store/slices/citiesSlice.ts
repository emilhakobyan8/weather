import {createSlice} from '@reduxjs/toolkit';
import {ID} from '../../types';

// Define a type for the slice state
export interface CitiesState {
  cityIds: any;
  cityMap: any;
  searchData: any;
}

// Define the initial state using that type
const initialState: CitiesState = {
  cityIds: [],
  cityMap: {},
  searchData: null,
};

export const citiesSlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCityList: (state, action) => {
      state.cityMap =
        action.payload?.reduce(
          (acc, current) => ({
            ...acc,
            [current.id]: current,
          }),
          {},
        ) || {};
    },
    storeCityId: (state, action) => {
      state.cityIds = [
        action.payload,
        ...state.cityIds.filter((id: ID) => id !== action.payload),
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
    setCityCurrentLocationCity: (state, action) => {
      state.cityMap = {...state.cityMap, [action.payload.id]: action.payload};
      state.cityIds = [
        action.payload.id,
        ...state.cityIds.filter((id: ID) => id !== action.payload.id),
      ];
    },
    setSearchData: (state, action) => {
      if (action.payload) {
        state.searchData = [action.payload];
      } else {
        state.searchData = null;
      }
    },
  },
});

export const {
  setCityList,
  storeCityId,
  removeCity,
  setSearchData,
  setSortedIds,
  setCityCurrentLocationCity,
} = citiesSlice.actions;

export default citiesSlice.reducer;
