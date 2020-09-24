import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { create } from 'react-test-renderer';
import HomeScreen from './../screens/HomeScreen';
import DoctorScreen from './../screens/DoctorScreen';
import VitalScreen from './../screens/VitalScreen';


const TabNav = createBottomTabNavigator();

export default function NavMain() {
    return (
        <NavigationContainer>
            <TabNav.Navigator>
                <TabNav.Screen name="Home" component={HomeScreen} />
                <TabNav.Screen name="Vitals" component={VitalScreen} />
                <TabNav.Screen name="Doctor" component={DoctorScreen} />
            </TabNav.Navigator>
        </NavigationContainer>
    );
}