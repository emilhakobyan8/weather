import {gql} from '@apollo/client';
import {CITY_FIELDS} from './HomeScreen.fragments';

export const getCityById = gql`
  ${CITY_FIELDS}
  query GetCityById($id: [String!], $config: ConfigInput) {
    getCityById(id: $id, config: $config) {
      ...CityFields
    }
  }
`;

export const getCityByName = gql`
  ${CITY_FIELDS}
  query GetCityByName($name: String!, $config: ConfigInput) {
    getCityByName(name: $name, config: $config) {
      ...CityFields
    }
  }
`;
