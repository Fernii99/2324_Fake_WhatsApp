import React, { Component } from 'react';
import {View, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


import News from './News/News';
import Calls from './Calls/Calls';
import Communities from './Communities';
import Chats from './Chats/Chats';
import Settings from './Settings';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faNewspaper } from '@fortawesome/free-solid-svg-icons/faNewspaper';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup';
import { faComment } from '@fortawesome/free-solid-svg-icons/faComment';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';

import styles from '../styles'




export default class BottomNavigation extends Component{
    render = () => {
        return (
                <Tab.Navigator  screenOptions={{
                    tabBarStyle: { backgroundColor: '#F7F7F7' },
                  }}>
                    <Tab.Screen  name="news" component={ News } options={{
                        headerStyle: {
                        height:0,
                        } ,
                        tabBarIcon: ({ color }) => (                       
                            <View><FontAwesomeIcon icon={faNewspaper} /></View>

                        ),
                    }}
                    />
                    <Tab.Screen name="Calls" component={ Calls } options={{
                        headerStyle: {
                        height:0,
                        } ,
                        tabBarIcon: ({ color }) => (                        
                            <View><FontAwesomeIcon icon={faPhone}/></View>

                        ),
                    }}/>
                    <Tab.Screen name="Communities" component={Communities} options={{
                        headerStyle: {
                        height:0,
                        } ,
                        tabBarIcon: ({ color }) => (                        
                            <View><FontAwesomeIcon icon={faUserGroup}/></View>

                        ),
                    }}/>
                    <Tab.Screen name="Chats" component={Chats} options={{
                        headerStyle: {
                        height:0,
                        } ,
                        tabBarIcon: ({ color }) => (
                            <View><FontAwesomeIcon icon={faComment}/></View>

                        ),
                    }}/>
                    <Tab.Screen name="Settings" component={ Settings } options={{
                        headerStyle: {
                        height:0,
                        } ,
                        tabBarIcon: ({ color }) => (
                            <View><FontAwesomeIcon icon={faGear} /></View>
                        ),
                    }}/>
                </Tab.Navigator>

          );
        }
    }