import React from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class VotingScreen extends React.Component {
  static navigationOptions = {
    title: 'Voting',
  };

  onPressVote (evt) {
    console.log(evt)
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Here is where I will but the two cards for voting and connect it to the store somehow</Text>
        <Button 
        onPress={()=>{this.onPressVote("PASS")}}
        title="PASS"
        color="#0000cd"
        value="PASS"
        />
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
    backgroundColor: '#fff',
  },
});
