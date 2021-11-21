import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dropdown from '../components/dropdown'
import Product from '../components/Product';
import { SearchBar } from 'react-native-elements';


export default function HomePageSeller() {
  const [Search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ marginTop: 50 }}>
        <SearchBar style={styles.item} placeholder="Type Here..." onChangeText={Search => setSearch(Search)} />
      </View>
      <Product />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  item: {
    backgroundColor: "white",
    marginVertical: 4,
    marginHorizontal: 16,
  },


});
