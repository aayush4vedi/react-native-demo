import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    // header: null,
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title={'Move to screen1'}onPress={()=> {this.props.navigation.navigate('Screen1')}}/>
        <Button title={'Move to Albums'}onPress={()=> {this.props.navigation.navigate('Albums')}}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
