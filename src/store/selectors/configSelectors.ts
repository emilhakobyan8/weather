import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {ConfigState} from '../slices/configsSlice';

const configState = (state: RootState) => state.config;

export const unitSelector = createSelector(
  configState,
  (state: ConfigState) => state.unit,
);
