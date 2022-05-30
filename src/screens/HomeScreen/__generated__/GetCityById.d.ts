/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConfigInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetCityById
// ====================================================

export interface GetCityById_getCityById_weather_temperature {
  __typename: "Temperature";
  actual: number | null;
  feelsLike: number | null;
  min: number | null;
  max: number | null;
}

export interface GetCityById_getCityById_weather_wind {
  __typename: "Wind";
  speed: number | null;
  deg: number | null;
}

export interface GetCityById_getCityById_weather_clouds {
  __typename: "Clouds";
  all: number | null;
  visibility: number | null;
  humidity: number | null;
}

export interface GetCityById_getCityById_weather {
  __typename: "Weather";
  temperature: GetCityById_getCityById_weather_temperature | null;
  timestamp: number | null;
  wind: GetCityById_getCityById_weather_wind | null;
  clouds: GetCityById_getCityById_weather_clouds | null;
}

export interface GetCityById_getCityById {
  __typename: "City";
  id: string | null;
  name: string | null;
  country: string | null;
  weather: GetCityById_getCityById_weather | null;
}

export interface GetCityById {
  getCityById: (GetCityById_getCityById | null)[] | null;
}

export interface GetCityByIdVariables {
  id?: string[] | null;
  config?: ConfigInput | null;
}
