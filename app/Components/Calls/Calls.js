import React, {Component } from 'react';
import {View, Text, FlatList, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';


import axios from 'axios';
import { FAKE_CALL } from '../../data';


import ListCalls from './ListCalls.js'

export default class Calls extends Component{
    render = () => {
      if(this.state.loaded){
        return (
          
            <View style={ styles.mainContainer }>
              <View style={styles.headerContainer}>
                  <View>
                    <Text> Editar </Text>
                  </View>
                  <View>
                    <Text>TODAS / Perdidas</Text>
                  </View>
                  <View>
                    <Text>Phone</Text>
                  </View>
              </View>
              <View style={ styles.callsContainer}>
                <Text>Llamadas</Text>
                <SearchBar
                placeholder="Search"
                >
                </SearchBar>
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
backgroundColor: '#f2f2f7'

  },
  headerContainer:{
flex: 1/7
  },
  callsContainer:{
flex: 1/7
  },
  listedCalls:{
flex: 5/7,
  },
  flatList:{
    paddingLeft:15,
    paddingRight: 15
  }
  
});
