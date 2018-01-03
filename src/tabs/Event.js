import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, StyleSheet, Image } from 'react-native';

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('http://staging.chinmayamission.com/wp-json/gcmw/v1/event-list')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.results),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

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
        <View style={styles.content}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
        <View style = {styles.Event} >
             <Text style = {styles.EventText}>{rowData.post_title}</Text>
             <Image source={require('../assets/holy.jpg')}
             style={styles.EventImage}>  
       </Image>
          <Text>  <Text style={[styles.title]}>Date:</Text><Text style={[styles.Event]}></Text> {rowData.sdate} To {rowData.edate} </Text>
          <Text>  <Text style={[styles.title]}>Camp Acharya:</Text><Text> {rowData.meta_value}</Text></Text>
          <Text></Text>
          </View>
          )}
        />
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
  EventImage: {
    height:100,
    width: 390,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  Event: {
    backgroundColor: '#F5F5F5',
    marginBottom: 5,
    marginTop: 5,
  },
  EventText: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
   },
 date: {
  marginBottom: 10,
    fontSize: 15,
    },
 aname: {
  color: '#336666',
  marginLeft: 500,
 },
 title:{
  //color: '#FFFFFF',
  fontWeight: 'bold',
 },
 });

     