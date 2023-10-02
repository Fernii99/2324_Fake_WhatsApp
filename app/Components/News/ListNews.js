

import { Component } from "react";
import { FAKE_STATUS } from "../../data";
import { View } from "react-native";
import { Image, Text } from "react-native-elements";
import { StyleSheet } from "react-native";


export default class ListNews extends Component{
render(){

    return(
    

       
        <View style={styles.callContainer }>
        <View style={styles.ImageContainer}>
         <Image style={styles.avatar} source={{ uri:this.props.image }}/>  
        </View>

        <View style={styles.personData}>
                    <Text>{this.props.first_name}</Text>
                    <Text>{this.props.date}</Text>
        </View>

        
    </View >

    )
}
}
const styles = StyleSheet.create({
    callContainer:{
        flex:1,
        flexDirection: "row",
        backgroundColor: '#fff',
        marginBottom: 30
    },
    ImageContainer:{
        flex:1/5,
    },
    personData: {
        flex:3/5,
    },
    infoContainer:{
        flex:1/5
    },
    avatar:{
        width: 35,
        height:35,
        borderRadius: 35
    }
})
