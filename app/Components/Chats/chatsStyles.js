import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  
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
        paddingHorizontal: 10

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