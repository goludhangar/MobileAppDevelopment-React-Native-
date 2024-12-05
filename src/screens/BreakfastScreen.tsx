import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BreakfastScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Breakfast Menu Coming Soon!</Text>
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
  },
});

export default BreakfastScreen;
