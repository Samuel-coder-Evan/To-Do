import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './components/AppHeader';
import WelcomeScreen from './screens/Login';
export default function App() {
  return (
    <View style={styles.container}>
      
      <AppHeader/>
      <WelcomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
