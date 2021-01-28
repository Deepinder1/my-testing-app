import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TarinerCard extends Component{
    render(){
      return(
        <Text>Trainer Card {this.props.name}</Text>
      )
    }
  }