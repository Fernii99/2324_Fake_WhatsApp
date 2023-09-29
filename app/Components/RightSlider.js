import React from 'react';
import { View, Animated  } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera  } from '@fortawesome/free-solid-svg-icons/faCamera'

export const RightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0.7, 0]
    })

    return (
      <>
        <View style={{ backgroundColor: '#c8c8cc',width: 50, justifyContent: 'center' }}>
          <Animated.Text
            style={{
              color: 'white',
              fontWeight: '600',
              transform: [{ scale }]
            }}>
            Mas
          </Animated.Text>
        </View>
        <View style={{ backgroundColor: '#526e9f', justifyContent: 'center', alignItems:'center'}}>
          <Animated.Text
            style={{
              color: 'white',
              fontWeight: '600',
              transform: [{ scale }]
            }}>
            Archivar
          </Animated.Text>
        </View>
      </>
    )
   }