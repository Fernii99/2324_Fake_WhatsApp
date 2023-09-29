/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, { Component } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera  } from '@fortawesome/free-solid-svg-icons/faCamera'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons/faNoteSticky'
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear'
import { faComment } from '@fortawesome/free-solid-svg-icons/faComment'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import News from './app/Components/News';
import Calls from './app/Components/Calls';
import Communities from './app/Components/Communities';
import Chats from './app/Components/Chats';
import Settings from './app/Components/Settings';


const Tab = createBottomTabNavigator();


export default class App extends Component{
  render = () =>{
    return (

      <View style={ styles.footerContainer}>
        <NavigationContainer >
          <Tab.Navigator screenOptions={{
              tabBarStyle: { backgroundColor: 'green)'},
            }}>
            <Tab.Screen  name="news" component={ News } options={{
                headerStyle: {
                  height:0,
                } ,
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="bell" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen name="Calls" component={Calls} options={{
                headerStyle: {
                  height:0,
                } ,
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="bell" color={color} size={26} />
                ),
              }}/>
            <Tab.Screen name="Communities" component={Communities} options={{
                headerStyle: {
                  height:0,
                } ,
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="bell" color={color} size={26} />
                ),
              }}/>
            <Tab.Screen name="Chats" component={Chats} options={{
                headerStyle: {
                  height:0,
                } ,
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="bell" color={color} size={26} />
                ),
              }}/>
            <Tab.Screen name="Settings" component={ Settings }   options={{
                headerStyle: {
                  height:0,
                } ,
                tabBarIcon: ({ color }) => (
                  <FontAwesomeIcon icon={faGear} size={25} color={color} />
                  

                ),
              }}/>
          </Tab.Navigator>
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