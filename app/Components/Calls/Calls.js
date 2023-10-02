import React, {Component } from 'react';
import {View, Text, FlatList, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { SearchBar } from '@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPhone  } from '@fortawesome/free-solid-svg-icons/faPhone'


import axios from 'axios';
import { FAKE_CALL } from '../../data';


import ListCalls from './ListCalls.js'

export default class Calls extends Component{
    render = () => {
      if(this.state.loaded){
        return (
          
            <View style={ styles.mainContainer }>
              <View style={styles.headerContainer} >

                  <View>
                      <Text style={styles.headerLeft}> Editar </Text>
                  </View>

                  <View>
                      <Text style={styles.sectionTitle }>CHATS</Text>
                  </View>
                  
                  <View style={styles.rightHeaderContainer}>
                      <FontAwesomeIcon icon={faPhone} size={25} />
                  </View>

              </View>
              <View style={ styles.callsContainer}>
                <View style={styles.callsSection}>
                  <SearchBar
                    platform="ios"
                    containerStyle={{ borderRadius: 100,marginTop: 10, marginBottom: 30}}
                    inputContainerStyle={{borderRadius: 15, height: 10}}
                    placeholder="Buscar"
                    placeholderTextColor="#888"
                    cancelButtonTitle="Cancel"
                  />
                </View>
              

              <View style={ styles.listedCalls }>
                <Text>RECIENTES</Text>
                <FlatList
                  data={this.state.callList}
                  renderItem={({item}) => (
                      <ListCalls 
                          first_name={item.first_name}
                          missed={item.missed}
                          video_call={item.video_call}
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

            </View>
          );
      }
    }


constructor(props) {
  super(props)
  this.state = {
      callList: [],
      loaded: false
  }
}

componentDidMount(){
  axios.get(FAKE_CALL)
  .then((response) => {
      this.setState({
          callList:response.data,
          loaded: true
      })
  })
  .catch(function (error) {
      console.log("error is: " + error);
  });
}

}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1, 
    justifyContent: "flex-end",
    backgroundColor: "white",
    height: 100

  },
  headerContainer: {
    flex:1/8,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerLeft: {
    fontWeight: "400",
    fontSize: 25,
    color: '#3478F6',
  },
  rightHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width:70
  },
  callsSection:{
    paddingHorizontal: 15,
  },
});
