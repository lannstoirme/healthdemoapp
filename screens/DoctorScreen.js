import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import MeasureButton from './../components/floatingbutton';

const DoctorScreen = ({ navigation }) => {
        return (
            <View>
                <Text>Contact the Doctor</Text>
                <MeasureButton />
            </View> 
        );
    }

export default DoctorScreen;