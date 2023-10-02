import React, {Component} from "react";
import { StyleSheet, View, Text, Image} from "react-native";


import { RightActions } from '../RightSlider';
import { LeftActions } from '../LeftSlider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable'



export default class ListChat extends Component{
    render(){
        return(
                    <GestureHandlerRootView >
                        <Swipeable renderRightActions={RightActions} renderLeftActions={LeftActions}>
                            <View style={ styles.listItemContainer }>
                                <View style={styles.chatContainer}>
                                    <View style={styles.imageContainer} > 
                                        <Image style={styles.avatar} source={{ uri: this.props.image }} />
                                    </View>

                                    <View style={styles.dataContainer}>
                                        <View style={styles.nameDateContainer}>
                                            <Text style={styles.name}> {this.props.first_name}</Text>
                                        
                                            <Text style={ styles.textContainers} >{this.props.message}</Text>
                                        </View>
                                        <View>
                                        <View style={styles.dateContainer}>
                                            <Text style={ styles.textContainers} >{this.props.date}</Text>
                                            
                                        </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Swipeable>
                    </GestureHandlerRootView>    
        );
    }
}


const styles = StyleSheet.create({
    listItemContainer: {
        flex: 1,
        height: 70,
    },
    chatContainer:{
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    imageContainer: {
        flex: 1/4,
        alignItems: "center",
        justifyContent: "center",

    },
    avatar: {
        borderRadius: 30,
        width:60,
        height: 60,
    },
    dataContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 3/4,
        borderColor: 'grey',
        borderTopWidth: 0.3,
        paddingTop:10,
        paddingRight: 10,
    },
    nameDateContainer: {
        borderColor: "black",
        alignContent: "center",
        alignItems: "flex-start",
       paddingRight: 10,
        
    },
    dateContainer:{
        
        justifyContent: "flex-end"
    },
    name: {
        fontWeight: "bold",
        fontSize: 18,
    },
    textContainers:{
        paddingLeft:1,
        paddingRight: 1,
        fontSize: 15,
        fontWeight: "300"
    },
    messageContainer: {
        flexDirection: "row",
        paddingLeft: 1,
    }




})