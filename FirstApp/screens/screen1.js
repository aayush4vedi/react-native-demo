import React from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class Screen1 extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button title='Move to Links' onPress={()=> {this.props.navigation.navigate('Links')}}/>
        <Button title='Back' onPress={()=> {this.props.navigation.pop()}}/>
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
