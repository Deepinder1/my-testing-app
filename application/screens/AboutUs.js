import React, {Component} from 'react';
import * as firebase from 'firebase';
import AppPreLoader from '../components/AppPreLoader';
import { NavigationActions, StackNavigator } from 'react-navigation';
import{TouchableOpacity, Dimensions, View, Image, FlatList, ScrollView} from 'react-native';
import {Grid, Row, Col } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Entypo';
import { Container, Text} from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import HTML from 'react-native-render-html';
import Strings from '../utils/Strings';


var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class AboutUs extends Component {
  render () {


    return (

<Container style={styles.background_general}>
<ScrollView>

<View style={{padding: 20}}>

<FlatList
          data={ 'default' }
          refreshing="false"
        />

</View>
</ScrollView>

</Container>

    )
  }

}