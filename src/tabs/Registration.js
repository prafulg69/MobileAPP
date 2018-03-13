import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, StyleSheet, Image,TouchableOpacity,TextInput } from 'react-native';

export default class Registration extends Component {
  render() {
  return (
  <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navBarButton} onPress={() => navigate('DrawerOpen')}>Menu</Text>
          <Text style={styles.navBarHeader}>CCMT</Text>
          <Text style={styles.navBarButton}></Text>
        </View>
        <View style={styles.content}>
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
        </View>
  </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0'
  },
  backgroundImage: {
    height: 300,
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 64,
    backgroundColor: '#1EAAF1'
  },

  navBarButton: {
    color: '#FFFFFF',
    textAlign:'center',
    width: 64
  },
  navBarHeader: {
    flex: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
 });