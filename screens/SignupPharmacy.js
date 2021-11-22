
import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image, ImageBackground, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, TextInput, onPress, Keyboard, StatusBar, Alert } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from '@react-navigation/native';

export default function SignupPharmacy(props) {

    const navigation = useNavigation(), screen = "Login", screen1 = "Verificationcode", login = "Login";
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [repassword, setrepassword] = useState('');
    const [location, setlocation] = useState('');

    const [nameerror, setnameerror] = useState('');
    const [phoneerror, setphoneerror] = useState('');
    const [emailerror, setemailerror] = useState('');
    const [passworderror, setpassworderror] = useState('');
    const [repassworderror, setrepassworderror] = useState('');
    const [locationerror, setlocationerror] = useState('');

    const SignUp = async () => {

        validation()

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
                    storename: name,
                    location: location,
                    email: email,
                    password: password,
                    phone_number: phone,
                    name: name,
                    location: location,
                    role: 'SLR',
                })
            });
            // const json = await response.json();
            navigation.navigate(login)
        } catch (error) {
            console.error(error);
        }
    }

    function validateEmail(text) {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            return false;
        }
        else return true;
    }

    function validation() {
        var isValidated = "false"
        if (!name) { setnameerror("*Please fill"); } else { setnameerror(""); }
        if (!phone) { setphoneerror("*Please fill"); } else { setphoneerror(""); }
        if (!email) { setemailerror("*Please fill"); } else { setemailerror(""); }
        if (!password) { setpassworderror("*Please fill"); } else { setpassworderror(""); }
        if (!repassword) { setrepassworderror("*Please fill"); } else { setrepassworderror(""); }
        if (!location) { setlocationerror("*Please fill"); } else { setlocationerror(""); }
        if (repassword && password != repassword) { setrepassworderror("*Password does not match"); }
        if (email && !validateEmail(email)) { setemailerror("*Please enter valide email"); }


        if ((!name) || (!phone) || (!email) || (!password) || (!repassword) || (!location) || (repassword && password != repassword) || (email && !validateEmail(email))) Alert.alert("wrong");
        else Alert.alert("Success");

    }


    // async function chooseFile() {
    //     try {
    //         const res = await DocumentPicker.pick({
    //             type: [DocumentPicker.types.images],
    //         });
    //         console.log(
    //             res.uri,
    //             res.type, // mime type
    //             res.name,
    //             res.size
    //         );
    //     } catch (err) {
    //         if (DocumentPicker.isCancel(err)) {
    //             // User cancelled the picker, exit any dialogs or menus and move on
    //         } else {
    //             throw err;
    //         }
    //     }
    // }

    return (
        <KeyboardAvoidingView behavior={"height"} style={{ flex: 1 }}>
            <ScrollView>
                < SafeAreaView style={[styles.group]}>

                    <View style={styles.flex}>
                        <StatusBar style="auto" />

                        {/**-----------------------------------------------------------------------Sign Up text-----------------------------------------------------------------------*/}
                        <View style={styles.flex_row}>
                            <View style={styles.sign_up_box}>
                                <Text style={styles.sign_up} ellipsizeMode={'clip'}>
                                    {'Sign up'}
                                </Text>
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
                        <Text style={[styles.error]}>{nameerror}</Text>

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
                        <Text style={[styles.error]}>{phoneerror}</Text>

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
                        <Text style={[styles.error]}>{emailerror}</Text>

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
                        <Text style={[styles.error]}>{passworderror}</Text>

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
                        <Text style={[styles.error]}>{repassworderror}</Text>

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
                        <Text style={[styles.error]}>{locationerror}</Text>

                        {/** location Line */}
                        <View style={styles.flex_row}>
                            <View style={styles.flex2}>
                                <View style={styles.line} />
                            </View>
                        </View>
                        {/**-----------------------------------------------------------------------Attach-----------------------------------------------------------------------*/}
                        <View style={styles.flex_row}>
                            <View style={[styles.flex3]}>
                                <View style={styles.flex1_col}>
                                    <ImageBackground
                                        style={[styles.icon]}
                                        source={require('../assets/images/attachicon.png')} />
                                </View>
                                <View style={styles.flex1_space} />
                                <View style={styles.flex1_col1}>
                                    <TouchableOpacity>
                                        <Text style={styles.small_text_body}>
                                            {'Attach license'}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {/** attach Line */}
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
        marginTop: 20,
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
    error: {
        fontSize: 10,
        color: '#f00',
        marginLeft: 45,
        marginBottom: -7
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
    },

});
