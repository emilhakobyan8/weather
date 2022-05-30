import {gql} from '@apollo/client';

export const getCityByNameQuery = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      id
      name
    }
  }
`;
