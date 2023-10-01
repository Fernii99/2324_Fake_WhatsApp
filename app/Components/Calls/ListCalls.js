import React, {Component} from "react";
import { View, Text, Image, StyleSheet} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo'


export default class ListCalls extends Component{
    render () {
        return(
            <View style={styles.callContainer }>
                <View style={styles.ImageContainer}>
                    <Image style={ styles.avatar} source={{ uri: this.props.image }} />
                </View>

                <View style={styles.personData}>
                    <Text>{this.props.first_name}  </Text>
                        <View >
                            {this.props.video_call === true ? <FontAwesomeIcon icon={faPhone} size={25} /> :<FontAwesomeIcon icon={faVideo} size={25}  /> } 
                            {this.props.missed === true ? <Text>Perdida </Text> : <Text>Contestada</Text>}
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text>{this.props.date}</Text>
                    <Text>  </Text>
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