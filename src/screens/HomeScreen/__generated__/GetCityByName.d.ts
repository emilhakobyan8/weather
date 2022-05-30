/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConfigInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetCityByName
// ====================================================

export interface GetCityByName_getCityByName_weather_temperature {
  __typename: "Temperature";
  actual: number | null;
  feelsLike: number | null;
  min: number | null;
  max: number | null;
}

export interface GetCityByName_getCityByName_weather_wind {
  __typename: "Wind";
  speed: number | null;
  deg: number | null;
}

export interface GetCityByName_getCityByName_weather_clouds {
  __typename: "Clouds";
  all: number | null;
  visibility: number | null;
  humidity: number | null;
}

export interface GetCityByName_getCityByName_weather {
  __typename: "Weather";
  temperature: GetCityByName_getCityByName_weather_temperature | null;
  timestamp: number | null;
  wind: GetCityByName_getCityByName_weather_wind | null;
  clouds: GetCityByName_getCityByName_weather_clouds | null;
}

export interface GetCityByName_getCityByName {
  __typename: "City";
  id: string | null;
  name: string | null;
  country: string | null;
  weather: GetCityByName_getCityByName_weather | null;
}

export interface GetCityByName {
  getCityByName: GetCityByName_getCityByName | null;
}

export interface GetCityByNameVariables {
  name: string;
  config?: ConfigInput | null;
}
