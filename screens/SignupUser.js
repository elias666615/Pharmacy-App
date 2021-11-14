
import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, ImageBackground, ScrollView, TextInput, onPress, Keyboard, StatusBar } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from '@react-navigation/native'

export default function SignupUser(props) {

    const navigation = useNavigation(), screen = "Login", screen1 = "Verificationcode";

    const [first, setfirst] = useState('');
    const [last, setlast] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [repassword, setrepassword] = useState('');

    const SignUp = async () => {

        if (password != repassword) {
            console.log("passwords don't match")
        }

        try {
         const response = await fetch('http://10.0.2.2:8000/auth/register/', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: email,
              password: password,
              first_name: first,
              last_name: last,
              phone_number: phone,
              role: 'BYR',
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
            <ScrollView>
            < SafeAreaView style={[styles.group]}>
                <View style={styles.flex}>
                    <StatusBar backgroundColor='#fff' barStyle="dark-content" />

                    {/**-----------------------------------------------------------------------Sign Up text-----------------------------------------------------------------------*/}
                    <View style={styles.flex_row}>
                        <View style={styles.sign_up_box}>
                            <Text style={styles.sign_up} ellipsizeMode={'clip'}>
                                {'Sign up'}
                            </Text>
                        </View>
                    </View>

                    {/**-----------------------------------------------------------------------First Last Name input-----------------------------------------------------------------------*/}
                    <View style={styles.flex_row}>
                        <View style={styles.flex1}>
                            {/** User icon */}
                            <View style={styles.flex1_col}>
                                <ImageBackground
                                    style={styles.icon}
                                    source={require('../assets/images/usericon.png')}
                                />
                            </View>
                            <View style={styles.flex1_space} />
                            {/** First Name field */}
                            <View style={styles.flex1_col1}>
                                <View style={styles.input_box}>
                                    <TextInput placeholder={"First Name"} style={{ width: "100%", fontSize: 15, marginLeft: 18 }} onChangeText={first => setfirst(first)} />
                                </View>
                            </View>
                            <View style={styles.flex1_space} />
                            {/** Last Name field */}
                            <View style={styles.flex1_col1}>
                                <View style={styles.input_box}>
                                    <TextInput placeholder={"Last Name"} style={{ width: "100%", fontSize: 15 }} onChangeText={last => setlast(last)} />
                                </View>
                            </View>
                        </View>
                    </View>


                    {/** First Last Name Line */}
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
                                    <TextInput placeholder={"Phone"} style={{ width: "100%", fontSize: 15 }} onChangeText={phone => setphone(phone)} />
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
                    {/**-----------------------------------------------------------------------Email input-----------------------------------------------------------------------*/}
                    <View style={styles.flex_row}>
                        <View style={[styles.flex3]}>
                            <View style={styles.flex1_col}>
                                <ImageBackground
                                    style={[styles.icon]}
                                    source={require('../assets/images/emicon.png')} />
                            </View>
                            <View style={styles.flex1_space} />
                            <View style={styles.flex1_col1}>
                                <View style={[styles.input_box]}>
                                    <TextInput placeholder={"Email"} style={{ width: "100%", fontSize: 15 }} onChangeText={email => setemail(email)} />
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

                    {/** Email Line */}
                    <View style={styles.flex_row}>
                        <View style={styles.flex2}>
                            <View style={styles.line} />
                        </View>
                    </View>

                    {/**-----------------------------------------------------------------------Terms & Conditions-----------------------------------------------------------------------*/}
                    <View style={styles.flex_row} style={{ alignItems: 'center' }}>
                        <View style={[styles.flex3]} >
                            <View style={styles.flex1_col}>
                                <BouncyCheckbox size={25} fillColor="#00E3F4" />
                            </View>
                            <View style={styles.flex1_space} />
                            <Text style={styles.text1} ellipsizeMode={'clip'}>
                                {'I agree to the '}
                            </Text>
                            <TouchableOpacity >
                                <Text style={styles.small_text_body}>
                                    {'Terms & conditions'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.text_body_box]}>
                            <Text style={styles.text1} ellipsizeMode={'clip'}>
                                {' and '}
                            </Text>
                            <TouchableOpacity >
                                <Text style={styles.small_text_body}>
                                    {'Privacy policy'}
                                </Text>

                            </TouchableOpacity>
                        </View>
                    </View>

                    {/**-----------------------------------------------------------------------Create account button-----------------------------------------------------------------------*/}
                    <View marginTop={25} style={styles.flex_row}>
                        <TouchableOpacity onPress={() => SignUp()}>
                            <View style={[styles.cover_group]}>
                                <View style={[styles.button1_box]}>
                                    <Text style={styles.button1} ellipsizeMode={'clip'}>
                                        {'Create account'}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>


                    {/**-----------------------------------------------------------------------Already have an account? Login text-----------------------------------------------------------------------*/}
                    <View style={styles.flex_row}>
                        <View style={[styles.flex2]} justifyContent={'center'}>

                            {/** New to Pharmacia? */}
                            <View style={styles.flex3_col}>
                                <View style={[styles.text_body_box]}>
                                    <Text style={styles.text1} ellipsizeMode={'clip'}>
                                        {'Already have an account?'}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.flex1_space} />
                            {/** Sign up text button */}
                            <TouchableOpacity onPress={() => navigation.navigate(screen)}>
                                <Text style={styles.small_text_body}>
                                    {'Login'}
                                </Text>
                            </TouchableOpacity>

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

    sign_up_box: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    sign_up: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#4D4C4C',
        textAlign: 'center'
    },

    flex1: {
        flexDirection: 'row',
        overflow: 'visible',
        marginTop: 72,
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

    flex1_space1: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 52
    },

    flex1_col1: {
        flexGrow: 0,
        flexShrink: 1,
        minWidth: 0
    },

    flex2_col: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 150
    },

    line: {
        width: '100%',
        backgroundColor: '#f1f3f7ff',
        height: 1,
        flexGrow: 1,
    },

    flex3: {
        flexDirection: 'row',
        overflow: 'visible',
        marginTop: 33.5,
        marginLeft: 12,
        flexGrow: 1,
        marginRight: 12
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

    button1_box: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 0,
        marginBottom: 15,
        marginLeft: 0,
        flexGrow: 1,
        marginRight: 0
    },

    button1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4D4C4C',
    },

    cover_group: {
        width: '100%',
        backgroundColor: '#00c7fc27',
        borderRadius: 20,
        overflow: 'visible',
        justifyContent: 'center',
        marginTop: 0,
        marginBottom: 0,
        minHeight: 50,
        marginLeft: 0,
        flexGrow: 1,
        marginRight: 0
    },

    flex3_col: {
        flexGrow: 0,
        flexShrink: 1,
        minWidth: 140
    },

    flex2_col2: {
        flexGrow: 0,
        flexShrink: 1,
        marginTop: "15%",
        minWidth: 60
    },

    text1: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4D4C4C',
    },

    small_text_body: {
        color: '#00E3F4',
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
    }


});