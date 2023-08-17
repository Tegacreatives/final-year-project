import React, { useState, createContext, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View, ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';

import DonationScreen from "../screens/DonationScreen";
import ChatScreen from "../screens/ChatScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";

import { HomeRoute } from "./CustomNavigation";
import { auth } from "../../config/firebase";

const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
const Stack = createNativeStackNavigator();

const DonationStack = () => {
  return(
    <Stack.Navigator
        initialRouteName="Home Screen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen component={HomeRoute} name="Home Screen"  />
        <Stack.Screen component={DonationScreen} name="Donation" />
        <Stack.Screen component={ChatScreen} name="Chat" options={{
          headerShown: true
        }} />
      </Stack.Navigator>
  )
}


const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignUpScreen} />
    </Stack.Navigator>
  );
}

const RootNavigation = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth ,
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
// unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {user ? <DonationStack /> : <AuthStack />}
    </NavigationContainer> 
  );
};

const Navigation = () => {
  return(
    <AuthenticatedUserProvider>
      <RootNavigation />
    </AuthenticatedUserProvider>
  )
}

export default Navigation;
