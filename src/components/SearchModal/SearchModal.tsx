import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, ScrollView, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import debounce from 'lodash.debounce';

import styles from './SearchModal.styles';
import {useLazyQuery} from '@apollo/client';
import {searchQuery} from './Search.query';

import {storeCityId, setSearchData} from '../../store/slices/citiesSlice';
import SearchResultItem from '../SearchResultItem/SearchResultItem';
import {useAppDispatch, useAppSelector} from '../../hooks/store';
import {searchDataSelector} from '../../store/selectors/citySelectors';

const SearchModal = ({closeModal}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const searchData = useAppSelector(searchDataSelector);

  const handleChange = (value: string) => {
    setSearchValue(value);
    debouncer(value);
  };

  const [search, {loading, data}] = useLazyQuery(searchQuery);

  const searchCities = useCallback(
    (newValue: string) => {
      return search({variables: {name: newValue}});
    },
    [search],
  );

  const debouncer = debounce(searchCities, 1000);

  useEffect(() => {
    dispatch(setSearchData(data?.getCityByName));
  }, [dispatch, data]);

  const onResultPress = useCallback(
    (result: any) => () => {
      dispatch(storeCityId(result?.id));
      closeModal();
    },
    [dispatch],
  );

  const searchResults = useMemo(() => {
    if (searchData) {
      return Object.values(searchData)?.map((item, index) => (
        <SearchResultItem
          key={index}
          name={item.name}
          onPress={onResultPress(item)}
        />
      ));
    }
    return null;
  }, [onResultPress, searchData]);
  return (
    <>
      <View style={styles.searchInputWrapper}>
        <Icon name="search" color="white" />
        <TextInput
          value={searchValue}
          onChangeText={handleChange}
          style={styles.searchInput}
          placeholder="Search for cities"
          placeholderTextColor="#fff"
          autoFocus={true}
        />
        {loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator />
          </View>
        )}
      </View>
      <ScrollView>{searchResults}</ScrollView>
    </>
  );
};

export default SearchModal;
