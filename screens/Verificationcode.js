import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, StyleSheet, Text, TouchableOpacity, disabled, onPress, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
//import OTPInputView from '@twotalltotems/react-native-otp-input';


const DissmissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default function Verification(props) {

    const [counter, setCounter] = React.useState(59);
    React.useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <DissmissKeyboard>
            <View style={styles.group}>
                <View style={styles.flex}>

                    <StatusBar style="auto" />

                    <View style={styles.flex_row}>
                        <View>
                            <TouchableOpacity>
                                <Icon name="chevron-left" size={35} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.flex_row}>
                        <View style={styles.hero_title_box}>
                            <Text style={styles.hero_title} ellipsizeMode={'clip'}>
                                {'Enter the verification code '}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.flex_row}>
                        <View style={styles.text_body_box}>
                            <Text style={styles.text_body} ellipsizeMode={'clip'}>
                                {'We sent a verification code via the phone number +961 123 456'}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.flex_row}>
                        <View style={styles.flex1}>
                            {/*<OTPInputView pinCount={4} autoFocusOnLoad={false} style={styles.otpView} codeInputFieldStyle={styles.underlineStyleBase}
                                onCodeFilled={value => { console.log(`Your code is: ${value}`); }} />/** */}
                        </View>
                    </View>

                    <TouchableOpacity>
                        <View style={styles.flex_row}>
                            <View style={styles.cover_group}>
                                <View
                                    style={styles.submit_code_box}>
                                    <Text style={styles.submit_code} ellipsizeMode={'clip'}>
                                        {'Submit Code'}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.flex_row}>
                        <View style={styles.text_body_box}>
                            <Text style={styles.text_body} ellipsizeMode={'clip'}>
                                {'Code expires in' + ' 00:' + counter}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={disabled ? 1 : 0.5} onPress={!disabled && onPress}>
                        <View style={styles.flex_row}>
                            <View style={styles.hero_title_box} style={{ marginTop: 10 }}>
                                <Text style={styles.resend_code} ellipsizeMode={'clip'}>
                                    {'Resend Code'}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        </DissmissKeyboard >
    );
}


const styles = StyleSheet.create({
    group: {
        width: '100%',
        backgroundColor: '#ffffffff',
        flexGrow: 1,
    },

    flex: {
        overflow: 'visible',
        marginTop: 80,
        marginBottom: 379,
        marginLeft: 38,
        marginRight: 38
    },

    flex_row: {
        flexGrow: 0,
        flexShrink: 1
    },

    hero_title_box: {
        flexDirection: 'row',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    hero_title: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#4D4C4C'
    },

    text_body_box: {
        flexGrow: 1,
        marginTop: 25,
        opacity: 0.44999998807907104,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    text_body: {
        fontSize: 14,
        textAlign: 'center',
    },

    flex1: {
        flexDirection: 'row',
        overflow: 'visible',
        marginTop: 25,
        marginLeft: 40,
        flexGrow: 1,
        marginRight: 40,
        paddingBottom: 20
    },

    cover_group: {
        width: '100%',
        backgroundColor: '#00c7fc27',
        borderRadius: 20,
        justifyContent: 'center',
        overflow: 'visible',
        minHeight: 50
    },

    resend_code: {
        color: '#00E3F4',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    submit_code: {
        color: '#273339ff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '800',
    },

    submit_code_box: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },







    otpView: {
        width: '100%',
        height: 50,
        color: 'black',
        justifyContent: 'center'
    },
    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        color: '#090F47',
        borderBottomColor: '#090F47',
    },


});
