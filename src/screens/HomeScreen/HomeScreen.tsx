import React, {useCallback, useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import {useLazyQuery} from '@apollo/client';

import DraggableFlatList, {
  OpacityDecorator,
  RenderItemParams,
} from 'react-native-draggable-flatlist';

import {getCityById, getCityByName} from './HomeScreen.query';
import styles from './HomeScreen.styles';
import CityInfoCard from '../../components/CityInfoCard/CityInfoCard';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import SearchModal from '../../components/SearchModal/SearchModal';
import {useAppDispatch, useAppSelector} from '../../hooks/store';
import {
  cityIdsSelector,
  cityListSelector,
} from '../../store/selectors/citySelectors';
import {
  removeCity,
  setCityCurrentLocationCity,
  setCityList,
  setSortedIds,
} from '../../store/slices/citiesSlice';
import {LocationContext} from '../../context/Geocoding.context';
import {ID} from '../../types';

const HomeScreen = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const storedCityIds = useAppSelector(cityIdsSelector);
  const cityMap = useAppSelector(cityListSelector);
  const [fetchCityById, {data: cityList, error: listFetchingError}] =
    useLazyQuery(getCityById);
  const [fetchCityByName, {data: cityByName, error: cityFetchingError}] =
    useLazyQuery(getCityByName);

  const {currentCityName} = useContext(LocationContext);

  const fetchCityList = useCallback(() => {
    console.log(currentCityName, storedCityIds);
    if (storedCityIds?.length > 0) {
      fetchCityById({
        variables: {
          id: Object.values(storedCityIds),
          config: {
            units: 'metric',
          },
        },
      });
    } else if (currentCityName) {
      fetchCityByName({
        variables: {
          name: currentCityName,
          config: {
            units: 'metric',
          },
        },
      });
    }
  }, [currentCityName, fetchCityByName, fetchCityById, storedCityIds]);

  useEffect(() => {
    fetchCityList();
  }, [fetchCityList]);

  useEffect(() => {
    if (cityList && !listFetchingError) {
      dispatch(setCityList(cityList?.getCityById));
    }
  }, [dispatch, cityList, listFetchingError]);

  useEffect(() => {
    if (cityByName && !cityFetchingError) {
      dispatch(setCityCurrentLocationCity(cityByName?.getCityByName));
    }
  }, [dispatch, cityByName, cityFetchingError]);

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  const updateList = (sortedIds: ID[]) => {
    dispatch(setSortedIds(sortedIds));
  };

  const deleteCityFromList = (cityId: ID) => () => {
    dispatch(removeCity(cityId));
  };
  const renderItem = ({
    item: id,
    drag,
    isActive,
    index,
  }: RenderItemParams<any>) => {
    return (
      <OpacityDecorator activeOpacity={0.7}>
        <CityInfoCard
          data={cityMap[id]}
          onLongPress={drag}
          dragging={isActive}
          onItemDelete={deleteCityFromList(id)}
          isFirst={!index}
        />
      </OpacityDecorator>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <DraggableFlatList
          contentContainerStyle={styles.flatList}
          data={storedCityIds || []}
          onDragEnd={({data}) => updateList(data)}
          renderItem={renderItem}
          keyExtractor={id => id}
        />
        <Header openSearch={openSearchModal} />
      </View>
      <Modal isVisible={isSearchModalOpen} closeModal={closeSearchModal}>
        <SearchModal closeModal={closeSearchModal} />
      </Modal>
    </>
  );
};

export default HomeScreen;
