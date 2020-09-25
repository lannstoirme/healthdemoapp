import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MeasureFloatButton from '../components/measurebutton';

const DoctorScreen = ({ navigation }) => {
        return (
            <View>
                <Text style={styles.text}>Contact the Doctor</Text>
                <MeasureFloatButton />
            </View> 
        );
    }

export default DoctorScreen;

const styles = StyleSheet.create ({
    text: {
        fontSize: 20,
    },
});