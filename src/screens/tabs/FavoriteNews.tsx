import { ScrollView, Text, View } from 'react-native';

import NewsItem from './components/NewsItem';
import React from 'react';
import appStore from 'src/services/appStore';
import { observer } from 'mobx-react-lite';

const FavoriteNews = () => {
  return (
    <ScrollView>
    <View className="p-3">
      {appStore.favoriteList.length > 0 ?   appStore.favoriteList.map((item, index) => (
        <NewsItem item={item} key={index} />
      )) : <Text className='font-NotoSerifKRRegular my-3 mx-3 text-lg text-gray-400'>You haven't added any news to your favorites yet</Text>}
    
    </View>
    <View className="h-[100px]"></View>
    </ScrollView>
  );
};

export default observer(FavoriteNews);
