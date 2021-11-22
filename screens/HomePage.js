import React from 'react';
import { StyleSheet, text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './HomePageSeller';
import Messages from './Messages';
import orders from './orders';
import ProfileSeller from './ProfileSeller';
import add from './add';

const Tab = createBottomTabNavigator();



const HomePage = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false, tabBarHideOnKeyboard: true, headerShown: false, tabBarStyle: {
                position: 'absolute',
                elevation: 0,
                backgroundColor: '#fff',
                flex: 1,
                borderRadius: 15,
                height: 90,
            }
        }}>


            <Tab.Screen name="Home" component={Home} options={{
                tabBarButton: props => <TouchableOpacity {...props} />,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image source={require('../assets/images/home.png')} resizeMode='contain' style={{ width: 35, height: 35 }} />
                    </View>
                ),
            }} />


            <Tab.Screen name="orders" component={orders} options={{
                tabBarButton: props => <TouchableOpacity {...props} />,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image source={require('../assets/images/orders.png')} resizeMode='contain' style={{ width: 35, height: 35 }} />
                    </View>
                ),
            }} />


            <Tab.Screen name="add" component={add} options={{
                tabBarButton: props => <TouchableOpacity {...props} style={{ justifyContent: 'center', alignItems: 'center', ...styles.shadow, paddingLeft: 50, paddingRight: 50 }} />,

                tabBarIcon: ({ focused }) => (
                    <View style={{ width: 60, height: 60, borderRadius: 35, backgroundColor: '#00C6FB' }}>
                        <Image source={require('../assets/images/plus.png')} resizeMode='contain' style={{ width: 35, height: 35, paddingRight: 60, marginTop: 13 }} />
                    </View>
                )
            }} />


            <Tab.Screen name="Messages" component={Messages} options={{
                tabBarButton: props => <TouchableOpacity {...props} />,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image source={require('../assets/images/message.png')} resizeMode='contain' style={{ width: 35, height: 35 }} />
                    </View>
                ),
            }} />


            <Tab.Screen name="ProfileSeller" component={ProfileSeller} options={{
                tabBarButton: props => <TouchableOpacity {...props} />,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image source={require('../assets/images/profile.png')} resizeMode='contain' style={{ width: 35, height: 35 }} />
                    </View>
                ),
            }} />


        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5
    }
})


export default HomePage;