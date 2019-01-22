import React from 'react';
import { ScrollView, StyleSheet, Text, Button, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import axios from 'axios';
import store from '../store'

export default class VotingScreen extends React.Component {
  static navigationOptions = {
    title: 'Voting',
  };

  async onPressVote (evt) {
    try {
      await axios({
        method: 'post',
        url:'http://192.168.0.111:5000/api/vote',
        data:{
          id: 1,
          vote: evt,
          name: 'test'
        }
      })
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Here is where you vote on tracks and quests. Choose wisely!</Text>
        <Image source={require('../assets/images/success.jpeg')} style={{width: 120, height: 200, alignItems: 'center', justifyContent: "center"}}/>
        <Button 
        onPress={()=>{this.onPressVote("PASS")}}
        title="PASS"
        color="#0000cd"
        value="PASS"
        />
        <Image source={require('../assets/images/fail.jpeg')} style={{width: 120, height: 200}}/>
        <Button 
        onPress={()=>{this.onPressVote("FAIL")}}
        title="FAIL"
        color="#cd5c5c"
        value="FAIL"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'gray',
  },
});
