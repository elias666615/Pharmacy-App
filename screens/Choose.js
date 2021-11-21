import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Choose(props) {

    const navigation = useNavigation(), screen = "SignupUser", screen2 = "SignupPharmacy";

    return (
        <SafeAreaView style={styles.group}>
            <StatusBar style="auto" />

            <View style={styles.flex}>
                <StatusBar backgroundColor='#fff' barStyle="dark-content" />

                <View style={styles.flex_row}>
                    <View style={styles.title_box}>
                        <Text style={styles.title}>
                            Sign up as a
                        </Text>
                    </View>
                </View>


                <View style={styles.flex_row}>
                    <View style={styles.content_box}>

                        <TouchableOpacity onPress={() => navigation.navigate(screen)}>
                            <View style={styles.content_box_row}>
                                <View style={styles.flex1}>
                                    <View style={styles.flex1_col}>
                                        <View style={styles.customer_box}>
                                            <Text style={styles.customer} ellipsizeMode={'clip'}>
                                                Customer
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.flex1_space} />
                                    <View style={styles.flex1_col1}>
                                        <ImageBackground
                                            style={styles.img}
                                            source={require('../assets/images/arrow.png')}
                                        />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.content_box_row}>
                            <View style={styles.line} />
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate(screen2)}>
                            <View style={styles.content_box_row}>
                                <View style={styles.flex1}>
                                    <View style={styles.flex1_col}>
                                        <View style={styles.customer_box} style={{ marginBottom: 26 }}>
                                            <Text style={styles.customer} ellipsizeMode={'clip'}>
                                                Pharmacy
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.flex1_space} />
                                    <View style={styles.flex1_col1}>
                                        <ImageBackground
                                            style={styles.img}
                                            source={require('../assets/images/arrow.png')}
                                        />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>
                </View>


            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    group: {
        width: '100%',
        backgroundColor: '#ffffffff',
        overflow: 'hidden',
        minHeight: 844,
        flexGrow: 1,
    },

    flex: {
        overflow: 'visible',
        marginTop: 72,
        marginBottom: 112,
        marginLeft: 29,
        flexGrow: 1,
        marginRight: 29
    },

    flex_row: {
        flexGrow: 0,
        flexShrink: 1
    },

    title_box: {
        marginTop: 38,
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    title: {
        fontSize: 35,
        marginTop: 38,
        flexGrow: 1,
        fontWeight: 'bold',
        color: '#4D4C4C',
        flexDirection: 'row',
        alignItems: 'flex-start',
        textAlign: 'center',
        justifyContent: 'center'
    },

    content_box: {
        backgroundColor: '#f6f6f6ff',
        borderRadius: 18,
        overflow: 'visible',
        marginTop: 59,
        flexGrow: 1,

    },
    content_box_row: {
        flexGrow: 0,
        flexShrink: 1,
    },

    flex1: {
        flexDirection: 'row',
        overflow: 'visible',
        marginTop: 26,
        flexGrow: 1,
        textAlign: 'center',
        justifyContent: 'center'
    },

    flex1_col: {
        flexGrow: 0,
        flexShrink: 1,
        minWidth: 83
    },

    customer_box: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    customer: {
        fontSize: 20,
        width: 100,
        textAlign: 'center'
    },
    flex1_space: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 129
    },
    flex1_col1: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 7.2
    },

    img: {
        resizeMode: 'contain',
        marginTop: 8,
        height: 12,
        marginBottom: 7,
        width: 7.2,
        minWidth: 7.2,
    },

    line: {
        width: '100%',
        backgroundColor: '#9a9a9aff',
        marginTop: 21.5,
        height: 1,
        flexGrow: 1,
    },



});
