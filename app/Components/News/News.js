import React, {Component } from 'react';
import {View, Text, Image, FlatList } from 'react-native';

import axios from 'axios';
import { FAKE_STATUS } from '../../data';

import ListNews from './ListNews';



export default class News extends Component{
    render = () => {
      if(this.state.loaded){
        return (
            <View >
              <View >
                  <View>
                    <Text> ... </Text>
                  </View>
                  <View>
                    <Text>NOVEDADES</Text>
                  </View>
              </View>

              <View >
                <View >
                  <Image source={{ uri:this.props.image }}/>
                </View>
                <View >
                  <View>
                      <Text>{this.props.firs_name}</Text>
                      <Text>{this.props.date}</Text>
                  </View>
                </View>
              </View>


              <View>
                <Text>ACTUALIZACIONES</Text>
              </View>
              <View >
                <Text>RECIENTES</Text>
                <FlatList
                  data={this.state.newsList}
                  renderItem={({item}) => (
                      <ListNews 
                          first_name={item.first_name}
                          date={item.date}
                          image={item.image}
                      />
                  )}
                  keyExtractor={item => item.id}
                  />
              </View>

            </View>
          );
      }
    }

    constructor(props) {
      super(props)
      this.state = {
          newsList: [],
          loaded: false
      }
  }
  
  componentDidMount(){
      axios.get(FAKE_STATUS)
      .then((response) => {
          this.setState({
              newsList: response.data,
              loaded: true
          })
      })
      .catch(function (error) {
          console.log("error is: " + error);
      });
  }
}
