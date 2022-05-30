import {createSlice} from '@reduxjs/toolkit';
import {Units} from '../../types';
import {Unit} from '../../../__generated__/globalTypes';

export interface ConfigState {
  unit: keyof typeof Unit;
}

const initialState: ConfigState = {
  unit: Units.metric,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    changeWeatherUnit: (state, action) => {
      state.unit = action.payload;
    },
  },
});

export const {changeWeatherUnit} = configSlice.actions;

export default configSlice.reducer;
