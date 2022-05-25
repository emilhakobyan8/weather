import {gql} from '@apollo/client';

export const getCityByName = gql`
  query GetCityByName($name: String!, $config: ConfigInput) {
    getCityByName(name: $name, config: $config) {
      id
      name
      country
      weather {
        temperature {
          actual
          feelsLike
          min
          max
        }
        timestamp
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
      }
    }
  }
`;
