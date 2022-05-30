/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCityByName
// ====================================================

export interface getCityByName_getCityByName {
  __typename: "City";
  id: string | null;
  name: string | null;
}

export interface getCityByName {
  getCityByName: getCityByName_getCityByName | null;
}

export interface getCityByNameVariables {
  name: string;
}
