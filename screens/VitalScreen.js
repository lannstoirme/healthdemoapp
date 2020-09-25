import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MeasureFloatButton from '../components/measurebutton';

const VitalScreen = ({ navigation }) => {
        return (
            <View>
                <Text style={styles.text}>Vitals!</Text>
                <MeasureFloatButton />
            </View> 
        );
    }

export default VitalScreen;

const styles = StyleSheet.create ({
    text: {
        fontSize: 20,
    }
});