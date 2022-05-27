import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {CitiesState} from '../slices/citiesSlice';

const citiesState = (state: RootState) => state.city;

export const cityListSelector = createSelector(
  citiesState,
  (state: CitiesState) => state.cityMap,
);

export const searchDataSelector = createSelector(
  citiesState,
  (state: CitiesState) => state.searchData,
);

export const cityIdsSelector = createSelector(
  citiesState,
  (state: CitiesState) => state.cityIds,
);
