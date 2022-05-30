import {gql} from '@apollo/client';

export const CITY_FIELDS = gql`
  fragment CityFields on City {
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
`;
