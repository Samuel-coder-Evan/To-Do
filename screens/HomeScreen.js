import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView} from 'react-native';
import * as firebase from 'firebase'
export default class LoginScreen extends React.Component {

    constructor(){
        super();
        this.state={
          emailId : '',
          password: ''
        }
      }
    
     

  render(){
      return(
        <KeyboardAvoidingView style = {{alignItems:'center',marginTop:20}}>
        <View>
          
          <Text style={{textAlign: 'center', fontSize: 30}}>Wily</Text>
        </View>
        

        
      </KeyboardAvoidingView>

      )
  }
}


const styles = StyleSheet.create({
  loginBox:
  {
    width: 300,
  height: 40,
  borderWidth: 1.5,
  fontSize: 20,
  margin:10,
  paddingLeft:10
  }
})