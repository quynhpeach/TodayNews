import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import FavoriteNews from './tabs/FavoriteNews';
import HomeScreen from './tabs/HomeScreen';
import HotNews from './tabs/HotNews';
import SplashScreen from 'react-native-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const TabScreen = () => {

  useEffect(() => {
    (async () => {
      await SplashScreen.hide();
    })();
  }, []);

  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: true,
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 20, 
        right: 20,
        elevation: 0,
        backgroundColor: '#fff',
        borderRadius: 15,
        height: 90,
      }
    }}> 
      <Tab.Screen name="HomeScreen" component={HomeScreen}/>
      <Tab.Screen name="FavoriteNews" component={FavoriteNews}/>
      <Tab.Screen name="HotNews" component={HotNews}/>
    </Tab.Navigator>
  );
};

export default TabScreen;
