import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import HomeScreen from '../screens/HomeScreen';
import MeasureScreen from '../screens/MeasureScreen';
import Stack from '../nav/stacknav';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { iconbutton } from './App';


FloatingButtonEventNavOne=()=>{
    this.props.navigation.navigate({MeasureScreen})
}
     
const MeasureFloatButton = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Measure</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={this.FloatingButtonEventNavOne}
            style={styles.TouchabeOpacityStyle} >
                <Image source={iconbutton} style={styles.FloatingButtonStyle} />
            </TouchableOpacity>

</View>
);
}
            
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#e5e5e5'
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
});

export default MeasureFloatButton;
