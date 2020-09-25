import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import MeasureButton from '../components/measurebutton';

const HomeScreen = ({ navigation }) => {
        return (
            <View>
                <Text style={styles.text}>Home!</Text>
                <MeasureButton />
            </View> 
        );
    }
export default HomeScreen;

const styles = StyleSheet.create ({
    text: 'center',
    fontSize: '20',
});