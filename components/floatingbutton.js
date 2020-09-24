import { FloatingAction } from 'react-native-floating-action';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import HomeScreen from './../screens/HomeScreen';
import MeasureScreen from './../screens/MeasureScreen';
import Stack from './../nav/stacknav';

const actions = [
    {
    text: "Measure",
    icon: require("./../img/icons8-unchecked-radio-button-96.png"),
    name: "bt_measure",
    position: right,
    animated: true,  
    },
    {
    text: "Home",
    icon: require("./../img/icons8-unchecked-radio-button-96.png"), 
    name: "bt_home",
    position: right,
    animated: true,  
    }
];

const MeasureButton = ({navigation}) => {
    return (
<View style={styles.container}>
    <Text style={styles.text}>Measure</Text>
        <FloatingAction
            actions={actions}
            onPressItem={
                        (name) => {
                            if (name == 'bt_measure') {
                                this.props.navigation.navigate({HomeScreen})
                                                      } 
                            if (name == 'bt_home') {
                                this.props.navigation.navigate({MeasureScreen})
                                                   }     
                                }
                        } 
        />
</View>
);
}
           
            
const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        paddingTop: 10,
        paddingBottom: 10,
    },
    container: {
        alignItems: 'flex-end',
    }
})

export default MeasureButton;
