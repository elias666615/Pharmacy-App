
import { View, StyleSheet, Text, Image, ImageBackground, StatusBar, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, onPress, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react';
export default function Login(props) {
    const navigation = useNavigation(), screen = "Choose", screen1 = "Forgotpassword", screen2 = "EditProduct";
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const LogIn = async () => {

        try {
            const response = await fetch('http://10.0.2.2:8000/auth/login/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            });
            const json = await response.json();
            console.log(json)
        } catch (error) {
            console.error(error);
        }
    }


    return (

        <KeyboardAvoidingView behavior={"height"} style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }} bounce={false}>
                < SafeAreaView style={[styles.group]}>
                    <StatusBar style="auto" />
                    <View style={[styles.flex]}>

                        <StatusBar backgroundColor='#fff' barStyle="dark-content" />

                        <View style={styles.flex_row}>
                            <View style={[styles.group1]}>
                                <Image source={require('../assets/images/login.png')}></Image>
                            </View>
                        </View>
                        {/**-----------------------------------------------------------------------Login Text-----------------------------------------------------------------------*/}
                        <View style={styles.flex_row}>
                            <View style={[styles.login_box]}>
                                <Text style={styles.login} ellipsizeMode={'clip'}>
                                    {'Login'}
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate(screen2)}>
                            <View style={styles.flex2_col2}>
                                <Text style={styles.small_text_body}>
                                    {'Home'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {/**-----------------------------------------------------------------------Email field-----------------------------------------------------------------------*/}
                        <View style={styles.flex_row}>
                            <View style={[styles.flex1]}>
                                <View style={styles.flex1_col}>
                                    <ImageBackground
                                        style={[styles.icon]}
                                        source={require('../assets/images/emicon.png')} />
                                </View>
                                <View style={styles.flex1_space} />
                                <View style={styles.flex1_col1}>
                                    <View style={[styles.email_box]}>
                                        <TextInput placeholder={"Email"} style={{ width: "100%", fontSize: 15 }} onChangeText={email => setemail(email)} />
                                    </View>
                                </View>
                            </View>
                        </View>


                        {/** Line for Email input */}
                        <View style={styles.flex_row}>
                            <View style={[styles.line]} />
                        </View>


                        {/**-----------------------------------------------------------------------Password field-----------------------------------------------------------------------*/}
                        <View style={styles.flex_row}>
                            <View style={[styles.flex1]}>
                                <View style={styles.flex1_col}>
                                    <ImageBackground
                                        style={[styles.icon]}
                                        source={require('../assets/images/passicon.png')} />
                                </View>
                                <View style={styles.flex1_space} />
                                <View style={styles.flex1_col1}>
                                    <View style={[styles.password_box]}>
                                        <TextInput secureTextEntry={true} placeholder={"Password"} style={{ width: "100%", fontSize: 15 }} onChangeText={password => setpassword(password)} />
                                    </View>
                                </View>


                                {/** Forgot password? */}
                                <View style={styles.flex2_space1} />
                                <TouchableOpacity onPress={() => navigation.navigate(screen1)}>
                                    <View style={styles.flex2_col2}>
                                        <Text style={styles.small_text_body}>
                                            {'Forgot?'}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>


                        {/**Line for Password input*/}
                        <View style={styles.flex_row}>
                            <View style={[styles.line]} />
                        </View>


                        {/**-----------------------------------------------------------------------Login button-----------------------------------------------------------------------*/}

                        <View marginTop={50} style={styles.flex_row}>
                            <TouchableOpacity onPress={() => LogIn()}>
                                <View style={[styles.cover_group]}>
                                    <View style={[styles.login_box1]}>
                                        <Text style={styles.login1} style={{ fontSize: 18 }} ellipsizeMode={'clip'}>
                                            {'Login'}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>


                        {/**-----------------------------------------------------------------------Sign up text bottom-----------------------------------------------------------------------*/}
                        <View style={styles.flex_row}>
                            <View style={[styles.flex1]} justifyContent={'center'}>


                                {/** New to Pharmacia? */}
                                <View style={styles.flex3_col}>
                                    <View style={[styles.text_body_box]}>
                                        <Text style={styles.text1} ellipsizeMode={'clip'}>
                                            {'New to Pharmacia?'}
                                        </Text>
                                    </View>
                                </View>


                                {/** Sign up text button */}
                                <TouchableOpacity onPress={() => navigation.navigate(screen)}>
                                    <View style={styles.flex2_col2}>
                                        <Text style={styles.small_text_body}>
                                            {'Sign up'}
                                        </Text>
                                    </View>
                                </TouchableOpacity>


                            </View>
                        </View>


                    </View>
                </ SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>

    );
}


{/**-----------------------------------------------------------------------Style-----------------------------------------------------------------------*/ }
const styles = StyleSheet.create({

    group: {
        overflow: 'hidden',
        backgroundColor: '#ffffffff',
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

    group1: {
        width: '100%',
        overflow: 'visible',
        height: 234,
        flexGrow: 1,
    },

    login_box: {
        marginTop: 39,
        width: 109,
        minWidth: 109,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    login: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#4D4C4C',
        width: 109,
        height: 46
    },

    flex1: {
        flexDirection: 'row',
        overflow: 'visible',
        marginTop: 44,
        marginBottom: 0,
        marginLeft: 0,
        flexGrow: 1,
        marginRight: 0
    },

    flex1_col: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 25
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

    icon: {
        resizeMode: 'contain',
        marginTop: 4,
        height: 25,
        marginBottom: 0,
        marginLeft: 0,
        width: 25,
        minWidth: 25,
        marginRight: 0
    },

    email_box: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 4,
        marginBottom: 3,
        marginLeft: 0,
        flexGrow: 1,
        marginRight: 0
    },

    line: {
        width: '100%',
        backgroundColor: '#f1f3f7ff',
        marginTop: 11.5,
        height: 1,
        marginBottom: 0,
        marginLeft: 0,
        flexGrow: 1,
        marginRight: 0
    },

    flex2_space1: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 145
    },

    flex2_col2: {
        flexGrow: 0,
        flexShrink: 1,
        marginTop: "15%",
        minWidth: 60
    },

    password_box: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 3,
        marginBottom: 4,
        marginLeft: 12,
        flexGrow: 1,
        marginRight: 0
    },

    small_text_body: {
        color: '#00E3F4',
    },

    cover_group: {
        width: '100%',
        backgroundColor: '#00c7fc27',
        borderRadius: 20,
        overflow: 'visible',
        marginTop: 0,
        marginBottom: 0,
        minHeight: 50,
        marginLeft: 0,
        flexGrow: 1,
        marginRight: 0
    },

    login_box1: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 0,
        marginBottom: 15,
        marginLeft: 0,
        flexGrow: 1,
        marginRight: 0
    },

    login1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4D4C4C',
    },

    flex3_col: {
        flexGrow: 0,
        flexShrink: 1,
        minWidth: 140
    },

    text_body_box: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        flexGrow: 1,
        marginRight: 0
    },

    text1: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4D4C4C',
    },



});
