import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { create } from 'react-test-renderer';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>

    );
}

function VitalScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Vitals</Text>
        </View>
    );
}

function DoctorScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Contact Doctor</Text>
        </View>
    );
}

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