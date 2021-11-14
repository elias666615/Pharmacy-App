import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, StyleSheet, Text, Image, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, StatusBar, TouchableWithoutFeedback, onPress, Keyboard } from 'react-native';



export default function Reset(props) {

    return (
        < SafeAreaView style={[styles.group]}>

            <ScrollView>
                <KeyboardAvoidingView behavior={"position"} style={{ flex: 1 }}>


                    <View style={styles.flex}>

                        <StatusBar backgroundColor='#fff' barStyle="dark-content" />

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
                                    {'Forgot password?'}
                                </Text>
                            </View>
                        </View>


                        <View style={styles.flex_row}>
                            <View style={styles.SectionStyle}>
                                <Image style={styles.Image} source={require('../assets/images/mailicon.png')} />
                                <TextInput placeholder="Enter your email address"
                                    style={styles.input} />
                            </View>
                        </View>

                        <View style={styles.flex_row}>
                            <View style={styles.text}>
                                <Text style={styles.txt}>* We will send you a message to set or reset your new password</Text>
                            </View>
                        </View>



                        <View marginTop={50} style={styles.flex_row}>
                            <TouchableOpacity>
                                <View style={[styles.cover_group]}>
                                    <View style={[styles.submit_box]}>
                                        <Text style={styles.submit} ellipsizeMode={'clip'}>
                                            {'Submit'}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>


                    </View>
                </KeyboardAvoidingView>

            </ScrollView>
        </SafeAreaView>


    );
}

Reset.inStorybook = true;
Reset.fitScreen = false;
Reset.scrollHeight = 844;

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
        marginTop: 80,
        marginBottom: 80,
        marginLeft: 36,
        flexGrow: 1,
        marginRight: 36
    },

    flex_row: {
        flexGrow: 0,
        flexShrink: 1
    },

    hero_title_box: {
        flexGrow: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    hero_title: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#4D4C4C',
        height: 92,
        width: 290,
    },

    SectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f6f6f6ff',
        borderRadius: 10,
        marginTop: 40,
        height: 50,
        flexGrow: 1,
        width: "100%",
    },

    Image: {
        padding: 10,
        margin: 5,
        marginLeft: 10,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },

    input: {
        width: "100%",
        paddingLeft: 10,
    },

    text: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 25,
    },

    txt: {
        fontSize: 14,
    },

    cover_group: {
        width: '100%',
        backgroundColor: '#00c7fc27',
        borderRadius: 20,
        justifyContent: 'center',
        overflow: 'visible',
        minHeight: 50,
        justifyContent: 'center',
    },

    submit: {
        color: '#4D4C4C',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },

    submit_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    }

});
