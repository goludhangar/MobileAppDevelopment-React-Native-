import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DinnerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dinner Menu Coming Soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default DinnerScreen;