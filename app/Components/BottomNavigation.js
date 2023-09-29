import React, { Component } from 'react';
import {View, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


import News from './app/components/News';
import Calls from './app/components/Calls';
import Communities from './app/components/Communities';
import Chats from './app/components/Chats';
import Settings from './app/components/Settings';




export default class BottomNavigation extends Component{
    render = () => {
        return (
            <NavigationContainer>
                <Tab.Navigator>
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
                    <Tab.Screen name="Settings" component={ Settings } options={{
                        headerStyle: {
                        height:0,
                        } ,
                        tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                        ),
                    }}/>
                </Tab.Navigator>
            </NavigationContainer>

          );
        }
    }