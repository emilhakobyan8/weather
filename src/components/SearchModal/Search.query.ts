import {gql} from '@apollo/client';

export const searchQuery = gql`
  query search($name: String!) {
    getCityByName(name: $name) {
      id
      name
    }
  }
`;
