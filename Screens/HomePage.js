import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import InstamartScreen from './InstamartPage';
import FoodScreen from './FoodPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const HomeScreen = () => (
  <View style={styles.content}>
    <Text>Welcome to Home Page!</Text>
  </View>
);


const CreditCardDineoutScreen = () => (
  <View style={styles.content}>
    <Text>Welcome to Credit Card Dineout Page!</Text>
  </View>
);

const ProfileScreen = () => (
    <View style={styles.content}>
      <Text>Welcome to Profile Page!</Text>
    </View>
  );
  
  const AddressScreen = () => (
    <View style={styles.content}>
      <Text>Your Address</Text>
    </View>
  );
  
  const HomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Home',
          headerRight: () => (
            <TouchableOpacity style={styles.headerIcon}>
              <Ionicons name="person" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity style={styles.headerIcon}>
              <Text>Your Address</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );

const HomePage = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Food" component={FoodScreen} />
        <Tab.Screen name="Instamart" component={InstamartScreen} />
        <Tab.Screen name="Credit Card Dineout" component={CreditCardDineoutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const NavbarItem = ({ icon, label }) => {
  return (
    <TouchableOpacity style={styles.navbarItem}>
      <Ionicons name={icon} size={24} color="black" />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#f0f0f0',
    elevation: 4,
  },
  navbarItem: {
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomePage;
