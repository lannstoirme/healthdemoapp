import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeFloatButton from '../components/measurebutton';

const MeasureScreen = ({ navigation }) => {
        return (
      <View>
          <Text style={styles.text}>This is the Measure Screen!</Text>      
    <HomeFloatButton />
    </View>
    
        );
    }


export default MeasureScreen;

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
})