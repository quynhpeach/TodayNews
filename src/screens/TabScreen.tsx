import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import FavoriteNews from './tabs/FavoriteNews';
import HomeScreen from './tabs/HomeScreen';
import HotNews from './tabs/HotNews';
import Icon from 'src/components/Icon';
import { RootStackParams } from 'src/routes/RootStackParams';
import SplashScreen from 'react-native-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<RootStackParams>();
const TabScreen = () => {
  useEffect(() => {
    (async () => {
      await SplashScreen.hide();
    })();
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 5,
          backgroundColor: '#fff',
          borderRadius: 25,
          height: 90,
          shadowColor: '#F5DFD0',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.35,
          shadowRadius: 5,
          marginTop: 70
        },
        tabBarActiveTintColor: '#FF1F3D',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center justify-center">
              <Icon name="home" type={'AntDesign'} color={color} size={26} />
              {/* ở đây set color bằng className giao diện ko ăn nên phải dùng style */}
              <Text
                style={{
                  color: focused ? '#FF1F3D' : '#787878',
                }}
                className="font-NotoSerifKRSemiBold text-sm">
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteNews"
        component={FavoriteNews}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center justify-center">
              <Icon
                name="favorite-border"
                type={'MaterialIcons'}
                color={color}
                size={26}
              />
              <Text
                style={{
                  color: focused ? '#FF1F3D' : '#787878',
                }}
                className="font-NotoSerifKRSemiBold text-sm">
                Favorite News
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="HotNews"
        component={HotNews}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center justify-center">
              <Icon
                name="whatshot"
                type={'MaterialIcons'}
                color={color}
                size={26}
              />
              <Text
                style={{
                  color: focused ? '#FF1F3D' : '#787878',
                }}
                className="font-NotoSerifKRSemiBold text-sm">
                Hot News
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabScreen;
