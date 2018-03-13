  import React, { Component } from 'react';
  import { Button, StyleSheet,Text,View,ScrollView,ListView,TouchableOpacity } from 'react-native';
  import HeaderButton from '../components/HeaderButton';
  import Expo from 'expo';
  import Tabs from '../screens/tabs';
  
  export default class Event extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      }
    }
  
    componentDidMount() {
      return fetch('http://staging.chinmayamission.com/wp-json/gcmw/v1/iti')
        .then((response) => {console.log(response);
                             return response.json();
                            })
        .then((responseJson) => {
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson),
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
  return (
  <View style={styles.container}>
          <View style={styles.navBar}>
            <Text style={styles.navBarButton} onPress={() => navigate('DrawerOpen')}>Menu</Text>
            <Text style={styles.navBarHeader}>CCMT</Text>
            <Text style={styles.navBarButton}></Text>
          </View>
          <View style={styles.content}>
          <Tabs>
          {/* First tab */}
          <View title="Swami Swaroopananda" style={styles.content}>
            <Text style={styles.header}>
            Swami Swaroopananda Itinerary
            </Text>
            <Text style={styles.text}>
           
            </Text>
          </View>
          {/* Second tab */}
          <View title="Swami Tejomayananda" style={styles.content}>
          <ListView 
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
          <TouchableOpacity style = {styles.Event} >
            <Text> <Text style={[styles.title]}>Date:</Text><Text style={[styles.Event]}></Text> {rowData.startdate} To {rowData.enddate} </Text>
           <Text> <Text style={[styles.title]}>Purpose: </Text> <Text> {rowData.purpose}</Text> </Text>
           <Text> <Text style={[styles.title]}>Place: </Text> <Text> {rowData.place}</Text> </Text>
           <Text> <Text style={[styles.title]}>Contact: </Text> <Text> {rowData.contact}</Text> </Text>
           <Text> <Text style={[styles.title]}>Address: </Text> <Text style={[styles.address]}> {rowData.address}</Text> </Text>
          </TouchableOpacity>
          )}
        />
          </View>
        </Tabs> 
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
    content: {
      flex: 1,                            // Take up all available space
      },
    Event: {
      backgroundColor: '#F5F5F5',
      marginBottom: 5,
      marginTop: 5,
    },
    Event: {
      backgroundColor: '#F5F5F5',
      marginBottom: 5,
      marginTop: 5,
    },
    title: {
      fontWeight: 'bold',
     },
    address: {
      marginLeft: 5,
    },
  });
  
  
  