import React, { Component } from 'react';
import { Badge } from 'react-native-elements'

export const Track = (props) => {
    return (
        <Badge
        containerStyle={{ backgroundColor: props.pass ? 'red' : 'white'}}
        value={props.number}
        textStyle={{ color: 'black' }}
        />
    )   
}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       paddingTop: 15,
//       backgroundColor: '#fff',
//     },   
//   });