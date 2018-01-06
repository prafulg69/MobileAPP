import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, StyleSheet, Image,TouchableOpacity,ScrollView,Button } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import Expo from 'expo';

export default class Login extends Component {

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

<View style={styles.container}>
        <View style={styles.navBar}>
         </View>  
        <Button onPress={this.logIn.bind(this)} title='facebook login'/>
       <Button onPress={this.onLoginPress} title='Google Login'/>
       <TouchableOpacity onPress={() => navigate("Home")}>
            <Text style = {styles.Enter}>Enter</Text>
          </TouchableOpacity>  
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
    paddingTop: 27,
    height: 15,
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
  header: {
    fontSize: 20,
    marginVertical: 20,
  },
  Enter: {
    textAlign:'center',
    justifyContent: 'center',
    backgroundColor: '#1EAAF1',
    width: 50,
    height: 50,
    margin: 5,
    marginLeft:'35%',
   }
 });

     