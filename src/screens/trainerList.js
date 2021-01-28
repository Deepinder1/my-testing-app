import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TarinerCard from './trainerCard'

export default class TrainerCardList extends Component{
    render(){
      return(
        <View>
        <TarinerCard name="Manjot"/>
        <TarinerCard name="Manjot"/>
        <TarinerCard name="Manjot"/>
        <TarinerCard name="Manjot"/>
        </View>
      )
    }
  }