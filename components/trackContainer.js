import { Track } from './track';
import React from 'react';
import {
    Text,
    View,
    StyleSheet
  } from 'react-native';

export const TrackContainer = (props) => {
    let temp = props.gameState ? props.gameState.trackVote : 1;
    return (
        <View>
            <Text>Vote Track</Text>
            <Track pass={temp > 1} style={{marginVertical: 5}} number='1'/>
            <Track pass={temp > 2} style={{marginVertical: 5}} number='2'/>
            <Track pass={temp > 3} style={{marginVertical: 5}} number='3'/>
            <Track pass={temp > 4} style={{marginVertical: 5}} number='4'/>
            <Track pass={temp > 5} style={{marginVertical: 5}}  number='5'/>
        </View>
    )
}