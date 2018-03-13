import React, { Component } from 'react';
import {Button,StyleSheet,Text,View,Image} from 'react-native';

export default class Drawer extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.image}>
        <Image source={require('../assets/Drawer.png')} style={styles.header}>  
        </Image>
        </View>
        <Button onPress={() => navigate('Home')} title="Home" />
        <Button onPress={() => navigate('Acharya') }title="Acharya"/>
        <Button onPress={() => navigate('Registration') }title="Registration"/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    //backgroundColor: '#FFF',
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#C0C0C0',
  },
  header: {
    width:225,
    height: 41,
    marginTop:40,
    marginLeft: 25,
    marginBottom:40,
   },
  image:{
    //backgroundColor: '#C0C0C0',
    width:'100%',
    },
});