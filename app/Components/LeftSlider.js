import React, { Component } from 'react';
import { View, Animated} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage'
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';

export const LeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 0.7]
      
    })

    return (
      <>
        <View style={{ flexDirection:"column", backgroundColor: '#c8c8cc', width: 70, justifyContent: 'center', alignItems: "center" }}>
          <Animated.Text
            style={{
                color: 'white',
                 fontWeight: '600',
            }}>
            <FontAwesomeIcon icon={faMessage} size={15} />
            No Leido
          </Animated.Text>
        </View>
        <View style={{ backgroundColor: '#526e9f', width: 70, justifyContent: 'center', alignItems:'center'}}>
          <Animated.Text
            style={{
              color: 'white',
              fontWeight: '600',
            }}>
            <FontAwesomeIcon icon={faThumbTack} size={15} color='white'/>
            Fijar
          </Animated.Text>
        </View>
      </>
    )
   }