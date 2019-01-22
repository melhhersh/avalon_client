import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { TrackContainer } from '../components/trackContainer';
import { QuestContainer } from '../components/questContainer';
import { Button } from 'react-native-elements';
import axios from 'axios'

export default class QuestScreen extends React.Component {

  constructor() {
    super();
    this.state = { roomName: undefined,
    gameState: undefined };
  }

  componentDidMount() {
    this.callState();
  }

  static navigationOptions = {
    title: 'Quest',
  }; 

  async callState() {
    try {
      let {data: temp} = await axios({
        method: 'get',
        url:'http://172.16.21.94:5000/api/state',
      });
      this.setState({gameState: temp})
    } catch (err) {
      console.log(err);
    }
  
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TrackContainer gameState={this.state.gameState}/>
        <QuestContainer gameState={this.state.gameState}/>
        <Button 
          title="Results"
          color="#0000cd"
          onPress={() =>{
              this.callState();
          }}
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
