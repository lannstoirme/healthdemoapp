import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MeasureFloatButton from '../components/measurebutton';

const HomeScreen = ({ navigation }) => {
        return (
            <View>
                <Text style={styles.text}>Home!</Text>
                <MeasureFloatButton />
            </View> 
        );
    }
export default HomeScreen;

const styles = StyleSheet.create ({
    text: {
        fontSize: 20,
    },
});