import { Avatar } from 'react-native-elements';
import React from 'react';

export const Quest = (props) => {
    return (
        <Avatar
            containerStyle={{ backgroundColor: props.pass === 'pass' ? 'green' : props.pass === 'fail' ? 'red' : 'white'}}
            large
            rounded
            title={props.number}
        ></Avatar>
    )
}