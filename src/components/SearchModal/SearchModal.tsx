import React, {useEffect} from 'react';

import {useLazyQuery} from '@apollo/client';
import {getCityByNameQuery} from './Search.query';

import {storeCityId} from '../../store/slices/citiesSlice';
import {useAppDispatch} from '../../hooks/store';
import GooglePlacesAutoComplete from '../PlacesAutocomplete/PlacesAutocomplete';

type SearchModalProps = {
  closeModal: () => void;
};

const SearchModal: React.FC<SearchModalProps> = ({closeModal}) => {
  const dispatch = useAppDispatch();
  const [getCityByName, {data}] = useLazyQuery(getCityByNameQuery);

  useEffect(() => {
    data?.getCityByName && dispatch(storeCityId(data?.getCityByName?.id));
  }, [dispatch, data]);

  const onResultPress = (result: any) => {
    const cityName = result.terms[0]?.value;
    getCityByName({variables: {name: cityName}});
    closeModal();
  };
  return (
    <>
      <GooglePlacesAutoComplete onRowPress={onResultPress} />
    </>
  );
};

export default SearchModal;
