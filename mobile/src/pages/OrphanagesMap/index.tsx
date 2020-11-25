import React, { useEffect, useState } from 'react'

import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito'

import { Feather } from '@expo/vector-icons';

import mapMarker from '../../assets/images/map-marker.png';

import styles from'./styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function OrphanagesMap() {
  const navigation = useNavigation();

  const [orphanges, setOrphanages] = useState<Orphanage[]>([]);

  console.log(orphanges)

  useFocusEffect(() => {
    api.get('/orphanages').then(response => {
      setOrphanages(response.data);
    });
  });

  const handleNavigateToCreateOrphanage = () => {
    navigation.navigate('SelectMapPosition');
  }

  const handleNavigationOrphanageDetails = (id: number) => {
    navigation.navigate('OrphanageDetails', { id });
  }

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold, 
    Nunito_700Bold, 
    Nunito_800ExtraBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
    <MapView  
      style={styles.map} 
      provider={PROVIDER_GOOGLE}
      initialRegion={{  
        latitude: -7.1164938,
        longitude: -34.8276623,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
      }} >

        { orphanges.map(orphange => {
          return (
            <Marker 
            key={orphange.id}
            icon={mapMarker}
            calloutAnchor={{
              x: 2.7,
              y: 0.8,
            }}
            coordinate={{
              latitude: orphange.latitude,
              longitude: orphange.longitude,
            }}
          >
            <Callout tooltip={true} onPress={() => handleNavigationOrphanageDetails(orphange.id)} >
              <View style={ styles.calloutContainer } >
                <Text style={ styles.calloutText } >{orphange.name}</Text>
              </View>
            </Callout>
         </Marker>   
          );
        }) }

     </MapView>   

     <View style={styles.footer}>
          <Text style={styles.footerText}>
            {orphanges.length} orfanatos encontradose
          </Text>

          <RectButton  style={styles.createOphanageButton} onPress={handleNavigateToCreateOrphanage} >
            <Feather  name="plus" size={20} color="#fff" />
          </RectButton>
     </View>
  </View>
  );
}