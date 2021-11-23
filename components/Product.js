import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView, FlatList, Button, } from 'react-native';
import { AirbnbRating } from 'react-native-elements';
export default function Product(props) {

    return (
        <View style={styles.container}>


            <Image style={styles.productImg} source={require('../assets/images/product.png')} />
            <Text style={styles.name}>Name</Text>
            <Text style={styles.price}>$ 12.22</Text>
            <AirbnbRating count={5} readonly={true} defaultRating={0} size={16} reviews={false} />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },

    productImg: {
        resizeMode: 'cover',
        height: 150, width: 50,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: 'bold'
    },
    price: {
        marginTop: 10,
        fontSize: 18,
        color: "green",
        fontWeight: 'bold'
    },



});
