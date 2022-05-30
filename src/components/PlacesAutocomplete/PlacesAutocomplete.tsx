import React from 'react';
import {
  GooglePlaceData,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import styles from './PlacesAutocomplete.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View} from 'react-native';
import Config from 'react-native-config';

type GooglePlacesAutoCompleteProps = {
  onRowPress: (data: GooglePlaceData) => void;
};

const GooglePlacesAutoComplete: React.FC<GooglePlacesAutoCompleteProps> = ({
  onRowPress,
}) => (
  <>
    <View style={styles.searchIconWrapper}>
      <Icon name="search" color="white" style={styles.searchIcon} />
    </View>
    <GooglePlacesAutocomplete
      placeholder="Search for cities"
      suppressDefaultStyles={true}
      styles={{
        textInput: styles.searchInput,
        textInputContainer: styles.searchInputContainer,
        listView: styles.listView,
      }}
      listUnderlayColor="rgba(255, 255, 255, 0.2)"
      textInputProps={{
        placeholderTextColor: '#fff',
        autoFocus: true,
      }}
      onPress={onRowPress}
      enablePoweredByContainer={false}
      query={{
        key: Config.GOOGLE_API_KEY,
        language: 'en',
        types: '(cities)',
      }}
      renderRow={data => <ListRow data={data} />}
    />
  </>
);

type ListRowProps = {
  data: GooglePlaceData;
};

const ListRow: React.FC<ListRowProps> = ({data}) => {
  return (
    <View style={styles.listRow}>
      <Text style={styles.listRowText}>{data.description}</Text>
    </View>
  );
};

export default GooglePlacesAutoComplete;
