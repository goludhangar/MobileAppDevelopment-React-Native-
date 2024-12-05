import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

// Reusable Button Component
const MenuButton = ({ title, onPress }: { title: string; onPress: () => void }) => (
  <TouchableOpacity style={styles.menuButton} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const HotelMenuScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Hotel Menu</Text>
        <View style={styles.menuContainer}>
          <MenuButton title="Breakfast" onPress={() => navigation.navigate('Breakfast')} />
          <MenuButton title="Lunch" onPress={() => navigation.navigate('Lunch')} />
          <MenuButton title="Dinner" onPress={() => navigation.navigate('Dinner')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
  },
  header: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: height * 0.03,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  menuButton: {
    backgroundColor: '#F5F5F5',
    paddingVertical: height * 0.02,
    marginVertical: height * 0.01,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonText: {
    fontSize: width * 0.045,
    textAlign: 'center',
    color: '#333',
  },
});

export default HotelMenuScreen;
