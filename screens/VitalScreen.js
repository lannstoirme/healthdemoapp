import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
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
    text: 'center',
    fontSize: '20',
});