import React, { Component } from 'react';
import { TextInput, Text, View, Button, Alert } from 'react-native';
import axios from 'axios'

export default class JoinGameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { roomName: '',
                   name: '' };
  }

  async joinRoom(roomName, name){
    await axios({
      method: 'post',
      url:'http://localhost:5000/api/join',
      data:{
        roomName,
        name,
      }
    })
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View>
        <Text>Game ID</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({roomName: text})}
        value={this.state.text}
      />
      <Text>Your Name</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({name: text})}
        value={this.state.text}
      />
        <Button 
            title="Ready to play!"
            color="#0000cd"
            onPress={() =>{
                if (this.state.name.trim() === "" || this.state.roomName.trim() === "") {
                    this.setState(() => ({ nameError: "Name required." }))
                    Alert.alert('Name and game ID are required')
                  } else {
                    this.joinRoom(this.state.roomName, this.state.name)
                    this.setState(() => ({ nameError: null }));
                    navigate('Quests')}
                  }}
            />
      </View>
    );
  }
}