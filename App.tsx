/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, { Component } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './app/Components/BottomNavigation';




export default class App extends Component{
  render = () =>{
    return (
      <View style={{flex:1}}>
        <NavigationContainer>
          <BottomNavigation></BottomNavigation>
        </NavigationContainer>
      </View>
    )
  }
}






const styles = StyleSheet.create({
 
  footerContainer: {
    flex: 1
  },
  logo: {

  },
    


})