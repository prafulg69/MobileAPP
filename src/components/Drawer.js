import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Drawer extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          CCMT
        </Text>
        <Button
          onPress={() => navigate('Home')}
          title="Home"
        />

        <Button
          onPress={() => navigate('Acharya')}
          title="Acharya"
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    marginVertical: 20,
  },
});