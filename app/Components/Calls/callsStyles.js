import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    callContainer:{
        flex:1,
        flexDirection: "row",
        backgroundColor: '#fff',
        height: 60,

    },
    ImageContainer:{
        flex:1/5,
        justifyContent: "center",

        alignItems:"center"

    },
    userInformation:{
        flex:4/5,
        borderTopWidth: 0.5,
        justifyContent: "space-around"
    },
    personData: {


        justifyContent: "center"

    },
    infoContainer:{
        
        alignContent:"flex-end"
        
    },
    avatar:{
        width: 35,
        height:35,
        borderRadius: 35
    },
    statusType:{
        flexDirection: "row"
    },


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


})