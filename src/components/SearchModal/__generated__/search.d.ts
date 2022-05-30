/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: search
// ====================================================

export interface search_getCityByName {
  readonly __typename: "City";
  readonly id: string | null;
  readonly name: string | null;
}

export interface search {
  readonly getCityByName: search_getCityByName | null;
}

export interface searchVariables {
  readonly name: string;
}
