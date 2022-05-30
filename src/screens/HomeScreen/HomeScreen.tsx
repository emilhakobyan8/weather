import React, {useContext, useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useQuery} from '@apollo/client';

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
  setCurrentLocationCity,
  setCityList,
  setSortedIds,
} from '../../store/slices/citiesSlice';
import {LocationContext} from '../../context/Location.context';
import {ID} from '../../types';
import {GetCityById, GetCityByIdVariables} from './__generated__/GetCityById';
import {
  GetCityByName,
  GetCityByNameVariables,
} from './__generated__/GetCityByName';
import {unitSelector} from '../../store/selectors/configSelectors';
import {Unit} from '../../../__generated__/globalTypes';

const HomeScreen = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const storedCityIds = useAppSelector(cityIdsSelector);
  const cityMap = useAppSelector(cityListSelector);
  const unit = useAppSelector(unitSelector);

  const {currentCityName} = useContext(LocationContext);
  const cityListVariables = useMemo(
    () => ({
      id: Object.values(storedCityIds),
      config: {
        units: unit as Unit,
      },
    }),
    [storedCityIds, unit],
  );

  const cityByNameVariables = useMemo(
    () => ({
      name: currentCityName,
      config: {
        units: unit as Unit,
      },
    }),
    [currentCityName, unit],
  );

  const {
    data: cityList,
    error: listFetchingError,
    loading: listLoading,
    refetch: refetchCityById,
  } = useQuery<GetCityById, GetCityByIdVariables>(getCityById, {
    fetchPolicy: 'network-only',
    variables: cityListVariables,
  });

  const {
    data: cityByName,
    error: cityFetchingError,
    loading: nameLoading,
    refetch: refetchCityByName,
  } = useQuery<GetCityByName, GetCityByNameVariables>(getCityByName, {
    fetchPolicy: 'network-only',
    variables: cityByNameVariables,
  });

  useEffect(() => {
    if (storedCityIds?.length > 0) {
      refetchCityById(cityListVariables);
    } else {
      refetchCityByName(cityByNameVariables);
    }
  }, [
    currentCityName,
    storedCityIds,
    refetchCityByName,
    refetchCityById,
    cityListVariables,
    cityByNameVariables,
  ]);

  useEffect(() => {
    if (cityList?.getCityById && !listFetchingError) {
      dispatch(setCityList(cityList.getCityById));
    }
  }, [dispatch, cityList, listFetchingError]);

  useEffect(() => {
    if (cityByName?.getCityByName && !cityFetchingError) {
      dispatch(setCurrentLocationCity(cityByName.getCityByName));
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
