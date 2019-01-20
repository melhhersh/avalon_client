import React, { Component } from 'react';
import { TextInput, Text, View, Picker, Button, Alert } from 'react-native';
import * as firebase from 'firebase';

export default class NewGameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { players: '',
                   roomName: '',
                   name: '',
                   nameError: '' };
  }

  async createRoom(players, name, roomName){
      try {
        let temp = await firebase.collection("Rooms").doc(roomName).set({
            roomSize: players,
            name: name,
            Players: [name]
        });
        console.log(temp);
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
                    this.createRoom(this.state.players, this.state.name, this.state.roomName)}
                    // this.setState(() => ({ nameError: null }));
                    // navigate('Quests')
                  }}
            />
      </View>
    );
  }
}