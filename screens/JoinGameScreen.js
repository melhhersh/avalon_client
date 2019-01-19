import React, { Component } from 'react';
import { TextInput, Text, View, Button } from 'react-native';

export default class JoinGameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { gameId: '',
                   name: '' };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View>
        <Text>Game ID</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({GameId: text})}
        value={this.state.text}
      />
      <Text>Your Name</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({name: text})}
        value={this.state.text}
      />
      <Button 
               onPress={() => navigate('Quests')}
                title="Ready to play!"
                color="#0000cd"
            />
      </View>
    );
  }
}