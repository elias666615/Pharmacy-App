//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login'
import Choose from './screens/Choose'
import SignupUser from './screens/SignupUser'
import SignupPharmacy from './screens/SignupPharmacy'
import Forgotpassword from './screens/Forgotpassword'
import Verificationcode from './screens/Verificationcode'
import HomePage from './screens/HomePage'
import HomePageSeller from './screens/HomePageSeller'


const Stack = createNativeStackNavigator()


export default function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
        <Stack.Screen name="Choose" component={Choose} />
        <Stack.Screen name="SignupUser" component={SignupUser} />
        <Stack.Screen name="SignupPharmacy" component={SignupPharmacy} />
        <Stack.Screen name="Verificationcode" component={Verificationcode} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="HomePageSeller" component={HomePageSeller} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

