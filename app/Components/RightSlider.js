import React from 'react';
import { View, Animated  } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEllipsis  } from '@fortawesome/free-solid-svg-icons/faEllipsis'
import { faBoxArchive  } from '@fortawesome/free-solid-svg-icons/faBoxArchive'

export const RightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0.7, 0]
    })

    return (
      <>
        <View style={{ direction: "row", backgroundColor: '#c8c8cc', width: 70, justifyContent: 'center', alignItems: "center" }}>
          <Animated.Text
            style={{
              color: 'white',
              fontWeight: '600',
              transform: [{ scale }]
            }}>
              <FontAwesomeIcon icon={faEllipsis} />
            Mas
          </Animated.Text>
        </View>
        <View style={{ direction: "row", backgroundColor: '#526e9f', width: 70, justifyContent: 'center', alignItems: "center" }}>
          <Animated.Text
            style={{
              color: 'white',
              fontWeight: '600',
              transform: [{ scale }]
            }}>
            <FontAwesomeIcon icon={faBoxArchive} />
            Archivar
          </Animated.Text>
        </View>
      </>
    )
   }