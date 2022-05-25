import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';

import {getCityByName} from './HomeScreen.query';

import styles from './HomeScreen.styles';
import CityInfoCard from '../../components/CityInfoCard/CityInfoCard';
import Header from '../../components/Header/Header';

const HomeScreen = () => {
  const {data, loading, error} = useQuery(getCityByName, {
    variables: {
      name: 'Yerevan',
      config: {
        units: 'metric',
      },
    },
  });

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator />
      </View>
    );
  }
  const renderItem = ({item}) => <CityInfoCard data={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={[data?.getCityByName]}
        renderItem={renderItem}
        keyExtractor={item => item?.name}
      />
      <Header />
    </View>
  );
};

export default HomeScreen;
