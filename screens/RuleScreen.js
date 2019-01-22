import React from 'react';
import { ScrollView, StyleSheet, Text, WebView } from 'react-native';


export default class RuleScreen extends React.Component {


  render() {

    return (
        <WebView
        source={{uri: 'https://www.youtube.com/watch?v=JaNwTKixAc0'}}
        style={{marginTop: 20}}
        />
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