import React, { useState } from 'react';
import { Text, View, TextInput, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import MultiSelectTags from '../components/tags'
import MultiSelectCategories from '../components/Categories.js'
import Textarea from 'react-native-textarea';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProductType from '../components/ProductType'
export default function EditProduct() {
    const [Name, setName] = useState('');
    const [Price, setPrice] = useState('');
    const [Quantity, setQuantity] = useState('');
    const [Discount, setDiscount] = useState('');


    const HideKeyboard = ({ children }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );

    return (

        <HideKeyboard>
            < SafeAreaView style={[styles.group]}>
                <View style={{ flex: 1, justifyContent: 'center' }}>

                    <StatusBar style="auto" />

                    <View style={styles.flex_row}>
                        <View style={[styles.flex1]}>

                            <View style={styles.flex1_col2}>
                                <View style={styles.flex_row}>
                                    <Text style={styles.title} ellipsizeMode={'clip'}>
                                        {'Product Detailts'}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.flex1_col2}>
                                <TouchableOpacity>
                                    <View style={[styles.cover_group]}>
                                        <View style={[styles.login_box1]}>
                                            <Text style={styles.login1} style={{ fontSize: 18 }} ellipsizeMode={'clip'}>
                                                {'Save'}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={styles.flex_row}>
                        <View style={[styles.flex1]}>
                            <View style={styles.flex1_space} />
                            <View style={styles.flex1_col1}>
                                <View style={[styles.email_box]}>
                                    <TextInput placeholder={"Product Name"} style={{ width: "100%", fontSize: 15 }} onChangeText={Name => setName(Name)} />
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={styles.flex_row}>
                        <View style={[styles.line]} />
                    </View>

                    <View>
                        <ProductType />
                    </View>
                    <View style={styles.flex1_space} />

                    <View style={styles.container}>
                        <Text>Product description</Text>
                        <Textarea
                            containerStyle={styles.textareaContainer}
                            style={styles.textarea}
                            maxLength={120}
                            placeholder={'Description....'}
                            placeholderTextColor={'#c7c7c7'}
                            underlineColorAndroid={'transparent'}
                        />
                    </View>



                    <View style={styles.flex_row}>
                        <View style={styles.flex1}>
                            <View style={styles.flex1_space} />

                            {/** Price field */}
                            <View style={styles.flex1_col1}>
                                <View style={styles.input_box}>
                                    <TextInput placeholder={"Price"} style={{ width: "100%", fontSize: 15, marginLeft: 18 }} onChangeText={Price => setPrice(Price)} />
                                </View>
                            </View>
                            <View style={styles.flex1_space} />
                            {/** Quantity field */}
                            <View style={styles.flex1_col1}>
                                <View style={styles.input_box}>
                                    <TextInput placeholder={"Quantity"} style={{ width: "100%", fontSize: 15 }} onChangeText={Quantity => setQuantity(Quantity)} />
                                </View>
                            </View>
                            {/** Discount field */}
                            <View style={styles.flex1_col1}>
                                <View style={styles.input_box}>
                                    <TextInput placeholder={"Discount"} style={{ width: "100%", fontSize: 15, marginLeft: 18 }} onChangeText={Discount => setDiscount(Discount)} />
                                </View>
                            </View>

                        </View>
                    </View>


                    {/** First Last Name Line */}
                    <View style={styles.flex_row}>
                        <View style={styles.line} />
                    </View>


                    <View style={styles.text}>
                        <TextInput
                            style={styles.inputStyle}
                            autoCorrect={false}
                            placeholder="Add custom tags..." />

                        <TouchableOpacity>
                            <AntDesign style={styles.icon} color="black" name="pluscircle" size={25} />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <MultiSelectTags></MultiSelectTags>
                    </View>


                    <View>
                        <MultiSelectCategories></MultiSelectCategories>
                    </View>
                </View>
            </SafeAreaView >
        </HideKeyboard >
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    group: {
        overflow: 'hidden',
        backgroundColor: '#ffffffff',
        flexGrow: 1,

    },

    textareaContainer: {
        height: 180,
        padding: 5,
        backgroundColor: '#F5FCFF',
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        color: '#333'
    },

    icon: { padding: 10 },
    text: {
        flexDirection: 'row',
        borderRadius: 12,
        borderColor: '#000',
        borderWidth: 1,
        height: 50,
        margin: 12

    },
    inputStyle: {
        paddingLeft: 10,
        flex: 1
    },

    flex_row: {
        flexGrow: 0,
        flexShrink: 1,
        marginRight: 12,
        marginLeft: 12


    },
    flex1: {
        flexDirection: 'row',
        overflow: 'visible',
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
        minWidth: '30%'
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
    }, dropdown: {
        height: 50,
        backgroundColor: '#00C6FB',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4D4C4C',

    },
    login_box1: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexGrow: 1,
    },

    login1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4D4C4C',
    },
    cover_group: {
        width: '100%',
        backgroundColor: '#00c7fc27',
        borderRadius: 20,
        overflow: 'visible',
        flexGrow: 1,
        width: '30%'
    }, flex1_col2: {
        flexGrow: 0,
        flexShrink: 1,
        minWidth: '75%'
    },
});
