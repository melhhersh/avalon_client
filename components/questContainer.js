import { Quest } from './quest';
import React from 'react';
import {
    Text,
    View,
    StyleSheet
  } from 'react-native';

export const QuestContainer = (props) => {
    let temp = props.gameState && props.gameState.quests ? props.gameState.quests : ['', '', '', '', ''];
    return (
        <View style={{ flex: 1,
            justifyContent: 'center',
            backgroundColor: 'gray'
            }}>
            <Text>Quest Track</Text>
            <Quest pass={temp[0]} number='1'></Quest>
            <Quest pass={temp[1]} number='2'></Quest>
            <Quest pass={temp[2]} number='3'></Quest>
            <Quest pass={temp[3]} number='4'></Quest>
            <Quest pass={temp[4]} number='5'></Quest>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },   
});