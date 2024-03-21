import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

const HomeScreen = () => {
  useEffect(() => {
    (async () => {
      await SplashScreen.hide();
    })();
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
