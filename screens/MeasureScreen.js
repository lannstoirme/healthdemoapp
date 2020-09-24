
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import MeasureButton from './components/floatingbutton';

const MeasureScreen = ({ navigation }) => {
        return (
            <View style={styles.container}>
                <Card style={styles.card}>
    
    <CardImage style={styles.image}
      source={{uri: 'https://i.ibb.co/vhP2dyC/yep.jpg'}} 
      title="Chillax" /> 
    <CardContent style={styles.cardcontent}>
   
    <Text style={styles.description}>This is the measure screen</Text>
 
   
    </CardContent>
    
    </Card>
    <MeasureButton />
    </View>
    
        );
    }


export default MeasureScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c8a2c8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    card: {
        borderBottomWidth: 20,
        borderBottomColor: '#C8A2CB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 300,
        width: 400,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 100,
    },
    intro: {
        height: 250,
    },
    cardcontent: {
        borderBottomColor: '#F5F380',
        borderBottomWidth: 20,
        borderTopWidth: 20,
        borderTopColor: '#F5F380', 
       },
})