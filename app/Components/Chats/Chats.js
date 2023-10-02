import React, { Component } from 'react';
import { View, Animated, ActivityIndicator, FlatList, StyleSheet,Text, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera  } from '@fortawesome/free-solid-svg-icons/faCamera'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons/faNoteSticky'



import axios from 'axios';
import { FAKE_PROFILE } from '../../data';


import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ListChat from './ListChat'
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from '@rneui/themed';
import { faArchive } from '@fortawesome/free-solid-svg-icons';



export default class Chats extends Component{
    render = () => {
        if(this.state.loaded){
            return(
                <View style={styles.chatsContainer}>
                    <View style={styles.headerContainer} >
                        <View>
                            <Text style={styles.headerLeft}> Editar </Text>
                        </View>

                        <View>
                            <Text style={styles.sectionTitle }>CHATS</Text>
                        </View>
                        
                        <View style={styles.rightHeaderContainer}>
                            <FontAwesomeIcon icon={faCamera} size={25} style={styles.icons}/>
                            <FontAwesomeIcon icon={faNoteSticky} size={25} style={styles.icons} />
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <GestureHandlerRootView>
                        <SafeAreaView style={styles.container}>
                                <ScrollView>
                                    <View style={styles.chatSection}>
                                        <View>
                                            <Text style={styles.title}>Chats</Text>

                                            <SearchBar
                                            containerStyle={{ borderRadius: 100,marginTop: 10, marginBottom: 30}}
                                            inputContainerStyle={{borderRadius: 15, height: 10}}
                                            placeholder="Buscar"
                                            placeholderTextColor="#888"
                                            cancelButtonTitle="Cancel"
                                            />
                                        </View>
                                    </View>

                                    <View style={styles.diffusionGroups}>
                                            <Text style={styles.diffusionText}> Listas de difusión</Text>
                                            <Text style={styles.groupsText}> Nuevo grupo </Text>
                                        </View>

                                    <View style={styles.archived}>
                                        <View style={styles.archivedIcon}>
                                            <FontAwesomeIcon icon={faArchive} size={17} color='grey'></FontAwesomeIcon>
                                        </View>
                                        <View style={styles.archivedTextContainer}>
                                            <Text style={styles.archivedText}>Archivados</Text>
                                        </View>
                                    </View>
                        
                                    <FlatList
                                        data={this.state.chatList}
                                        renderItem={({item}) => (
                                            <ListChat 
                                                first_name={item.first_name}
                                                message={item.message}
                                                image={item.image}
                                                date={item.date}
                                                
                                                />
                                                )}
                                        keyExtractor={item => item.id}
                                        style={styles.flatList}
                                        />
                                </ScrollView>
                        </SafeAreaView>
                        </GestureHandlerRootView>
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
    chatsContainer:{
        flex: 1, 
        justifyContent: "flex-end",
        backgroundColor: "white"
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
      rightHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:70
      },
      leftHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
      },
      headerLeft: {
        fontWeight: "400",
        fontSize: 25,
        color: '#3478F6',
      },
      textStyles: {
        fontSize: 20, 
        fontWeight: '500', 
        color: '#3478F6',
      },
      icons:{
        size: 25,
        color: '#3478F6',
      },
      chatSection:{
        paddingHorizontal: 15,
      },
      title:{
        fontSize: 40,
        fontWeight: "bold",
      },
      diffusionGroups:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
        borderBottomWidth: 0.3,
        
      },
      diffusionText:{
        color: '#3478F6',
        fontSize: 21,
        fontWeight: 300,
      },
      groupsText:{
        color: '#3478F6',
        fontSize: 21,
        fontWeight: 300
      },
      archived: {
        flex: 1,
        flexDirection: "row",
        height: 50,
        alignItems: 'center'
      },
      archivedIcon:{
        flex: 1/4,
        alignItems: 'center',
        
      },
      archivedTextContainer: {
        flex:3/4,
        alignContent: 'center'
      },
      archivedText:{
        fontSize: 20,
        color: '#000',
        fontWeight: '500'
      }
})