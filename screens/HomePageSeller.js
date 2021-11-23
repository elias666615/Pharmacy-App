import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Dropdown from '../components/dropdown'
import Product from '../components/Product';
import { SearchBar } from 'react-native-elements';


export default function HomePageSeller() {
  const [Search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar style={{ marginTop: 50 }} style={styles.item} placeholder="Type Here..." onChangeText={Search => setSearch(Search)} />

      <ScrollView style={styles.scrollView}>
        <View style={styles.inner, styles.shadow}>
          <Product />
        </View>
        <View style={styles.inner, styles.shadow}>
          <Product />
        </View>
        <View style={styles.inner, styles.shadow}>
          <Product />
        </View>
        <View style={styles.inner, styles.shadow}>
          <Product />
        </View>
        <View style={styles.inner, styles.shadow}>
          <Product />
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  item: {
    backgroundColor: "white",
    marginVertical: 4,
    marginHorizontal: 16,
  },
  inner: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    height: '100%',
    width: '100%',

  },
  scrollView: {
    backgroundColor: 'white'
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10, },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5
  },


});
/*<SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.flex1_space} />

      <View style={styles.container1}>
        <SearchBar style={{ marginTop: 50 }} style={styles.item} placeholder="Type Here..." onChangeText={Search => setSearch(Search)} />

        <ScrollView style={styles.scrollView}>

          <View style={styles.box}>
            <View style={styles.inner}>
              <Product />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <Product />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <Product />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <Product />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <Product />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <Product />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <Product />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <Product />
            </View>
          </View>


        </ScrollView>
      </View>
    </SafeAreaView>*/