import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList, ActivityIndicator,ScrollView,Image,TouchableOpacity} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import Communications from 'react-native-communications';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class News extends Component {
  static navigationOptions = {
    title: 'Acharya'
  };

  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      newstitle: this.props.navigation.state.params.selectedRow.post_title,
      content: this.props.navigation.state.params.selectedRow.post_content,
      };
  }
  render() {
    return (
 
    <View style={styles.container}>
                <View style={styles.toolbar}>
                <Text style={styles.title}>{this.state.newstitle}</Text>
                <Image source={require('../assets/holy.jpg')} style={styles.EventImage}>  
             </Image>
             </View>
                   <View style={styles.ptitle}>
                   <Text style={styles.Description}>Description : </Text>
                   <Text style={styles.Dcontent}>{this.state.content}</Text>
                 </View>
     </View>
   )
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,                            // Take up all screen
    backgroundColor: '#F5F5F5',         // Background color
  },
  toolbar:{
      backgroundColor:'#F5F5F5',
      paddingTop:30,
   },
  title: {
   marginLeft: 8,
   fontWeight: 'bold',
   },
  EventImage: {
    height: 200,
    width: '95%',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  ptitle: {
    marginTop: 10,
  },
  Description: {
    margin: 10,
    fontWeight: 'bold',
  },
  Dcontent: {
    marginLeft: 10,
  },
});