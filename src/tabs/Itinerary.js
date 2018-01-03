  import React, { Component } from 'react';
  import { Button, StyleSheet,Text,View,ScrollView } from 'react-native';
  import HeaderButton from '../components/HeaderButton';
  import Expo from 'expo';
  
  export default class Event extends Component {
   
    signInWithGoogleAsync = async () => {
      try {
        const result = await Expo.Google.logInAsync({
          androidClientId: 922846468899-vb4uqfhm22q3n8a68uo6ako98st7hb28.apps.googleusercontent.com,
          iosClientId: 922846468899-dpih1njqbu56oe1h6otno11m4m747fqi.apps.googleusercontent.com,
          scopes: ['profile'],
        })
  
        if (result.type === 'success') {
          return result
        }
        return { cancelled: true }
      } catch (e) {
        return { error: e }
      }
    }
  
  
    onLoginPress = async () => {
      const result = await this.signInWithGoogleAsync()
      // if there is no result.error or result.cancelled, the user is logged in
      // do something with the result
    }
  
    
    async  logIn() {
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('255885858279306', {
          permissions: ['public_profile'],
        });
       if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        console.log(response);
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
         Alert.alert(
          'Logged in!',
          `Hi ${(await response.json()).name}!`,
        );
       
      }
    }
  
    render() {
      const { navigate } = this.props.navigation;
      return (
          // <ScrollView style={styles.header}>
          // <Button onPress={this.signInWithGoogleAsync.bind(this)} title='Google sign in'/>
          // </ScrollView>
         <View>
           <Button
           onPress={this.logIn.bind(this)}
           title='facebook login'/>
          
          <Button onPress={this.onLoginPress} title='Google Login'/>
          </View>
  
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      fontSize: 20,
      marginVertical: 20,
    },
  });
  
  
  