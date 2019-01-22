import React from 'react';
import { ScrollView, StyleSheet, Text, Button, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import axios from 'axios';

export default class CharacterScreen extends React.Component {
  IMAGES = {
    assassin: require('../assets/images/assassin.jpeg'),
    LSA1: require('../assets/images/LSA1.jpeg'), 
    LSA2: require('../assets/images/LSA2.jpeg'), 
    LSA3: require('../assets/images/LSA3.jpeg'), 
    LSA4: require('../assets/images/LSA4.jpeg'), 
    merlin: require('../assets/images/merlin.jpeg'), 
    mOM1: require('../assets/images/mOM1.jpeg'), 
    mOM2: require('../assets/images/mOM2.jpeg'), 
    mOM3: require('../assets/images/mOM3.jpeg'), 
    mordred: require('../assets/images/mordred.jpeg'), 
    morgana: require('../assets/images/morgana.jpeg'), 
    oberon: require('../assets/images/oberon.jpeg'), 
    percival: require('../assets/images/percival.jpeg'), 
  }

  constructor() {
    super();
    this.state = { characterName: '',
    characterTeam: '',
    characterUrl: undefined };
  }

  static navigationOptions = {
    title: 'character',
  };

  async onPressChar() {
    try {
      let {data: temp} = await axios({
        method: 'get',
        url:'http://172.16.21.94:5000/api/character',
      });
      this.setState(temp)
      console.log(this.state, "STATE")
    } catch (err) {
      console.log(err);
    }
  
  }

  render() {
    let img_src = this.IMAGES[this.state.characterName];

    return (
      <ScrollView style={styles.container}>
        <Text>Click below to view your character</Text>
        <Button 
        onPress={()=>{this.onPressChar()}}
        title="Character"
        color="gold"
        value="character"
        />
        <Text>{this.state.characterName}</Text>
        <Text>{this.state.characterTeam}</Text>
      {/* <Image source={img_src} style={{width: 120, height: 200, alignItems: 'center', justifyContent: "center"}}/>    */}


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