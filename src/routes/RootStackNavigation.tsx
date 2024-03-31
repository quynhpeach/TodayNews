import React, { useRef } from 'react';
import { navigate, navigationRef } from 'src/routes/NavigationHelpers';

import DetailsScreen from 'src/screens/DetailsScreen';
import Icon from 'src/components/Icon';
import { NavigationContainer } from '@react-navigation/native';
import NewsItem from 'src/screens/tabs/components/NewsItem';
import { RootStackParams } from './RootStackParams';
import TabScreen from '../screens/TabScreen';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStackNavigation = () => {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerBackTitleVisible: false,
            headerTintColor: '#fff',
          }}>
          <Stack.Screen name="TabScreen" component={TabScreen} />
          <Stack.Screen
            name="DetailsScreen"
            component={DetailsScreen}
            options={{
              headerShown: true,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigate('HomeScreen')}><Icon
                type={'AntDesign'}
                name={'left'}
                color={'#000'}
                size={20}
              /></TouchableOpacity>
                
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootStackNavigation;
