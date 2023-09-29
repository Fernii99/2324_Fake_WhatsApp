import React, { Component } from 'react';
import { View, Animated, ActivityIndicator, FlatList, StyleSheet,Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera  } from '@fortawesome/free-solid-svg-icons/faCamera'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons/faNoteSticky'




import axios from 'axios';
import { FAKE_PROFILE } from '../data';


import ListChat from './ListChat'


export default class Chats extends Component{
    render = () => {
        if(this.state.loaded){
            return(
                <View style={{flex: 1}}>
                    <View style={{flex: 1/7, height: 90, backgroundColor: "rgba(246,246,247,255)"}}>
                        <Text></Text>
                    </View>
            
                    <View style={{flex:6/7}}>
                        <View>
                            <Text style={{fontSize: 30, fontWeight: 'bold'}}>CHATS</Text>
                        </View>
                        <FlatList
                            data={this.state.chatList}
                            renderItem={({item}) => (
                                <ListChat 
                                    first_name={item.first_name}
                                    message={item.message}
                                    image={item.image}
                                    date={item.date}
                                    time={item.time}
                                />
                            )}
                            keyExtractor={item => item.id}
                            style={styles.flatList}
                            
                        />
                    </View>
                </View>
            )
        }else{
            return(
                <ActivityIndicator size="large" />
            )
        }
    }
       
    

        constructor(props) {
            super(props)
            this.state = {
                chatList: [],
                loaded: false
            }
        }
        
        componentDidMount(){
            axios.get(FAKE_PROFILE)
            .then((response) => {
                this.setState({
                    chatList:response.data,
                    loaded: true
                })
            })
            .catch(function (error) {
                console.log("error is: " + error);
            });
        }

    
}


const styles = StyleSheet.create({
    headerBar: {
        height:90,
        backgroundColor: "rgba(246,246,247,255)"
    },
    container:{
        flex: 1,
    },
    flatList: {
        flex: 1,
        backgroundColor: "white",
        
    },

})