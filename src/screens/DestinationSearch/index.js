import React, {useState} from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

const DestinationSearchScreen = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Input component */}
            <GooglePlacesAutocomplete
                placeholder='Where are you going?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    navigation.navigate('Guests', { viewport: details.geometry.viewport });
                }}
                fetchDetails
                styles={{
                    textInput: styles.textInput
                }}
                query={{
                    key: 'AIzaSyB_qvUZncgDnHu3gCrC9eCwQ6KqUMLKnRM',
                    language: 'en',
                    types: '(cities)'
                }}
                suppressDefaultStyles
                renderRow={ (item) => <SuggestionRow item={item} /> }
            />
        </View>
    )
}

export default DestinationSearchScreen;