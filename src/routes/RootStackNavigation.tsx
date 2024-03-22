import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RootStackParams } from "./RootStackParams";
import TabScreen from '../screens/TabScreen';
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
          <Stack.Screen name="TabScreen" component={TabScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}

export default RootStackNavigation