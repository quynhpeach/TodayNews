import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RootStackParams } from "./RootStackParams";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from 'src/routes/NavigationHelpers';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStackNavigation = () => {
    return(
        <>
        <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerBackTitleVisible: false,
            headerTintColor: '#fff',
          }}>
          <Stack.Screen name="HomePage" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}

export default RootStackNavigation