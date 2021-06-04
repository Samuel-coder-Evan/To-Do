import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
 import { Text, View,StyleSheet } from 'react-native';
  export default class AppHeader extends React.Component{ 
      render(){ 
          return( 
          <View style={Styles.bar}> 
          <Ionicons name="md-checkmark-circle" size={32} color="white" />

          <Text style={Styles.text}> To-Do
          </Text> </View> ) } } 
          
const Styles = StyleSheet.create ({ bar:{backgroundColor:"blue",marginBottom:'0%',display:'flex'}, text:{color:"white", fontSize:22,padding:20,textAlign:"center"} })







