import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';
export default function App() {
  return (
    <View style={styles.container}>
      
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
