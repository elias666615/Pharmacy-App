import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, ImageBackground, TouchableOpacity, KeyboardAvoidingView, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


export default function ProfileSeller() {
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [password, setpassword] = useState('');
    const [repassword, setrepassword] = useState('');
    const [location, setlocation] = useState('');
    return (
        <KeyboardAvoidingView behavior={"height"} style={{ flex: 1 }}>
            <ScrollView>
                < SafeAreaView style={[styles.group]}>

                    <View style={styles.flex}>
                        <StatusBar style="auto" />

                        <View style={styles.flex_row}>
                            <View style={styles.content_box}>
                                <View style={{ marginTop: 25, marginBottom: 25 }}>
                                    <Text style={styles.title}>
                                        name
                                    </Text>
                                    <Text style={styles.title2}>
                                        email
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {/**-----------------------------------------------------------------------Pharmacy Name input-----------------------------------------------------------------------*/}
                        <View style={styles.flex_row}>
                            <View style={[styles.flex3]}>
                                <View style={styles.flex1_col}>
                                    <ImageBackground
                                        style={[styles.icon]}
                                        source={require('../assets/images/pharmacyicon.png')} />
                                </View>
                                <View style={styles.flex1_space} />
                                <View style={styles.flex1_col1}>
                                    <View style={[styles.input_box]}>
                                        <TextInput placeholder={"Pharmacy name"} style={{ width: "100%", fontSize: 15 }} onChangeText={name => setname(name)} />
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/** Email Line */}
                        <View style={styles.flex_row}>
                            <View style={styles.flex2}>
                                <View style={styles.line} />
                            </View>
                        </View>

                        {/**-----------------------------------------------------------------------Phone number input-----------------------------------------------------------------------*/}
                        <View style={styles.flex_row}>
                            <View style={[styles.flex3]}>
                                <View style={styles.flex1_col}>
                                    <ImageBackground
                                        style={[styles.icon]}
                                        source={require('../assets/images/phoneicon.png')} />
                                </View>
                                <View style={styles.flex1_space} />
                                <Text style={styles.text1} style={{ marginTop: 8 }} ellipsizeMode={'clip'}>{'+961 '}</Text>

                                <View style={styles.flex1_col1}>
                                    <View style={[styles.input_box]}>
                                        <TextInput keyboardType="numeric" placeholder={"Phone"} style={{ width: "100%", fontSize: 15 }} onChangeText={phone => setphone(phone)} />
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/** Phone Number Line */}
                        <View style={styles.flex_row}>
                            <View style={styles.flex2}>
                                <View style={styles.line} />
                            </View>
                        </View>

                        {/**-----------------------------------------------------------------------Password input-----------------------------------------------------------------------*/}
                        <View style={styles.flex_row}>
                            <View style={[styles.flex3]}>
                                <View style={styles.flex1_col}>
                                    <ImageBackground
                                        style={[styles.icon]}
                                        source={require('../assets/images/passicon.png')} />
                                </View>
                                <View style={styles.flex1_space} />
                                <View style={styles.flex1_col1}>
                                    <View style={[styles.input_box]}>
                                        <TextInput secureTextEntry={true} placeholder={"Password"} style={{ width: "100%", fontSize: 15 }} onChangeText={password => setpassword(password)} />
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/** Password Line */}
                        <View style={styles.flex_row}>
                            <View style={styles.flex2}>
                                <View style={styles.line} />
                            </View>
                        </View>

                        {/**-----------------------------------------------------------------------Confirm Password input-----------------------------------------------------------------------*/}
                        <View style={styles.flex_row}>
                            <View style={[styles.flex3]}>
                                <View style={styles.flex1_col}>
                                    <ImageBackground
                                        style={[styles.icon]}
                                        source={require('../assets/images/repassicon.png')} />
                                </View>
                                <View style={styles.flex1_space} />
                                <View style={styles.flex1_col1}>
                                    <View style={[styles.input_box]}>
                                        <TextInput secureTextEntry={true} placeholder={"Confirm password"} style={{ width: "100%", fontSize: 15 }} onChangeText={repassword => setrepassword(repassword)} />
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/** repassword Line */}
                        <View style={styles.flex_row}>
                            <View style={styles.flex2}>
                                <View style={styles.line} />
                            </View>
                        </View>
                        {/**-----------------------------------------------------------------------Location-----------------------------------------------------------------------*/}
                        <View style={styles.flex_row}>
                            <View style={[styles.flex3]}>
                                <View style={styles.flex1_col}>
                                    <ImageBackground
                                        style={[styles.icon]}
                                        source={require('../assets/images/locationicon.png')} />
                                </View>
                                <View style={styles.flex1_space} />
                                <View style={styles.flex1_col1}>
                                    <View style={[styles.input_box]}>
                                        <TextInput placeholder={"Location"} style={{ width: "100%", fontSize: 15 }} onChangeText={location => setlocation(location)} />
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/** location Line */}
                        <View style={styles.flex_row}>
                            <View style={styles.flex2}>
                                <View style={styles.line} />
                            </View>
                        </View>

                    </View>
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>

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
        marginTop: 59,
        marginBottom: 75,
        marginLeft: 29,
        flexGrow: 1,
        marginRight: 29
    },
    flex_row: {
        flexGrow: 0,
        flexShrink: 1
    },

    flex1_col: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 25
    },
    icon: {
        resizeMode: 'contain',
        marginTop: 4,
        height: 25,
        width: 25,
        minWidth: 25,
    },

    flex1_space: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 13
    },


    flex1_col1: {
        flexGrow: 0,
        flexShrink: 1,
        minWidth: 0
    },
    input_box: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 4,
        marginBottom: 3,
        marginLeft: 0,
        flexGrow: 1,
        marginRight: 0
    },

    flex3: {
        flexDirection: 'row',
        overflow: 'visible',
        marginTop: 20,
        marginLeft: 12,
        flexGrow: 1,
        marginRight: 12
    },
    flex2: {
        flexDirection: 'row',
        overflow: 'visible',
        marginTop: 11.5,
        flexGrow: 1,
    },

    line: {
        width: '100%',
        backgroundColor: '#f1f3f7ff',
        height: 1,
        flexGrow: 1,
    },

    text1: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4D4C4C',
    },

    content_box: {
        backgroundColor: '#f6f6f6ff',
        borderRadius: 18,
        overflow: 'visible',
        flexGrow: 1,

    },


    title: {
        fontSize: 24,
        flexGrow: 1,
        fontWeight: 'bold',
        color: '#4D4C4C',
        textAlign: 'center',
        justifyContent: 'center',
    },
    title2: {
        fontSize: 12,
        flexGrow: 1,
        color: '#4D4C4C',
        textAlign: 'center',
        justifyContent: 'center',
    },




});

