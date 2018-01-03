import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, StyleSheet, Image } from 'react-native';

export default class Draerlan extends Component {

//These is just landing page on acharya
 
  render() {
    const { navigate } = this.props.navigation;
    if (this.state.isLoading) {
      return (
        
          <ActivityIndicator />
        
      );
    }

    return (

<View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navBarButton} onPress={() => navigate('DrawerOpen')}>Menu</Text>
          <Text style={styles.navBarHeader}>CCMT</Text>
          <Text style={styles.navBarButton}></Text>
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
 });

     