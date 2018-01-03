import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList, ActivityIndicator,ScrollView,Image,TouchableOpacity} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import Communications from 'react-native-communications';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Tabs from './tabs';

export default class Modal extends Component {
  static navigationOptions = {
    title: 'Acharya'
  };

  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      firstname: this.props.navigation.state.params.selectedRow.aname,
      lastname: this.props.navigation.state.params.selectedRow.last_name,
      image: this.props.navigation.state.params.selectedRow.image,
      email: this.props.navigation.state.params.selectedRow.email,
      phone: this.props.navigation.state.params.selectedRow.phone,
    };
  }
  render() {
    return (

      <View style={styles.container}>
                <View style={styles.toolbar}>
                   <Image source={{uri:'http://www.chinmayamission.com/wp-content/uploads/acharya_images/'+ this.state.image}}
                  style={styles.toolbarButton}>  
                   </Image> 
                   <View style={styles.name}>
                    <Text style={styles.fname}>{this.state.firstname +' '+ this.state.lastname}</Text>
                    <Text style={styles.fname}>{this.state.email}</Text>
                    <TouchableOpacity onPress={() => Communications.email(['prafulg69@gmail.com'],null,null,'My Subject','My body text')}>
                     <View style={styles.holder}>
                     <Icon style={styles.phoneicon} name="gmail" size={25} color="#ffffff" />
                     <Text style={styles.phone}>{this.state.email}</Text>
                     </View>
                   </TouchableOpacity>
                    <TouchableOpacity onPress={() => Communications.phonecall(this.state.phone, true)}>
                     <View style={styles.holder}>
                     <Icon style={styles.phoneicon} name="phone" size={25} color="#66CC00" />
                     <Text style={styles.phone}>{this.state.phone}</Text>
                     </View>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => Communications.text(this.state.phone)}>
                    <View style={styles.holder}>
                    <Icon style={styles.phoneicon} name="whatsapp" size={25} color="#ffffff" />
                    </View>
                  </TouchableOpacity>
                  </View>
                 </View>
                 <Tabs>
          {/* First tab */}
          <View title="Description" style={styles.content}>
            <Text style={styles.header}>
              Welcome to CCMT
            </Text>
            <Text style={styles.text}>
            Description Tab
            </Text>
          </View>
          {/* Second tab */}
          <View title="Event" style={styles.content}>
            <Text style={styles.header}>
            Welcome to CCMT
            </Text>
            <Text style={styles.text}>
            Event Tab
            </Text>
          </View>
          {/* Third tab */}
          <View title="Itinerary" style={styles.content}>
            <Text style={styles.header}>
            Welcome to CCMT
            </Text>
            <Text style={styles.text}>
            Itinerary Tab
            </Text>
          </View>

        </Tabs>
            </View>

   )
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,                            // Take up all screen
    backgroundColor: '#E91E63',         // Background color
  },
  toolbar:{
      backgroundColor:'#1EAAF1',
      paddingTop:30,
      paddingBottom:10,
      paddingLeft: 10,
      flexDirection:'row'    
  },
  toolbarButton:{
      height: 150,
      width: '35%',           
      color:'#fff',
  
  },
  toolbarTitle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold',
      flex:2,
      flexDirection:'row'                 
  },
  navBarHeader: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    height: 15,
    width: 20, 
    textAlign:'center',
   },
  fname: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingLeft: 10,
 
  },

  // Tab content container
  content: {
    flex: 1,                            // Take up all available space
    justifyContent: 'center',           // Center vertically
    alignItems: 'center',               // Center horizontally
    backgroundColor: '#C2185B',         // Darker background for content area
  },
  // Content header
  header: {
    margin: 10,                         // Add margin
    color: '#FFFFFF',                   // White color
    fontSize: 26,                       // Bigger font size
  },
  // Content text
  text: {
    marginHorizontal: 20,               // Add horizontal margin
    color: 'rgba(255, 255, 255, 0.75)', // Semi-transparent text
    textAlign: 'center',                // Center
    fontSize: 18,
  },
  phone: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingLeft: 35,
    marginTop: -25,
  },
  phoneicon: {
    marginLeft: 5,
    marginTop: 5,
  },
});