import React, { Component } from 'react';
import { TextInput, Text, View, Picker, Button, Alert } from 'react-native';
import axios from 'axios'

export default class NewGameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { players: 5,
                   roomName: '',
                   name: '',
                   nameError: '' };
  }

  async createRoom(players, roomName, name){
    try {
      let newRoom = await axios({
        method: 'post',
        url:'http://172.16.21.94:5000/api/create',
        data:{
            numPlayers: players,
            roomName,
            name
      }
    });


    io.on('data', (data) => {
      if (data.roomName === roomName) {
      }
    })    

    } catch (err) {
      console.log(err);
    }
    
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View>
        <Text>Number of players</Text>
        <Picker
            selectedValue={this.state.players}
            onValueChange={(itemValue, itemIndex) => this.setState({players: itemValue})}>
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
        </Picker>
        <Text>Room Name</Text>
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
                    Alert.alert('Name is required')
                  } else {
                    this.createRoom(this.state.players, this.state.roomName, this.state.name)
                    this.setState(() => ({ nameError: null }));
                    navigate('Quests')}
                  }}
            />
      </View>
    );
  }
}