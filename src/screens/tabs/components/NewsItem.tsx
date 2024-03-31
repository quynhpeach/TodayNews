import { Image, Text, TouchableOpacity, View } from 'react-native';

import { Articles } from 'src/services/apiModel';
import Icon from 'src/components/Icon';
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import { RootStackParams } from 'src/routes/RootStackParams';
import appStore from 'src/services/appStore';
import moment from 'moment';
import { navigate } from 'src/routes/NavigationHelpers';
import { observer } from 'mobx-react-lite';

type Props = {
  item: Articles;
};
const NewsItem = ({ item }: Props) => {
  return (
    <View className="my-3">
      <TouchableOpacity 
      onPress={() => navigate('DetailsScreen', {url: item.url || ''})}
      className="rounded-lg overflow-hidden p-0 h-[230px]">
        <Image
          source={{
            uri: item.urlToImage || 'https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg',
          }}
          className="h-[230px] w-100%"
        />
        <View
          className="absolute bottom-0 left-0 right-0 p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <Text className="font-NotoSerifKRBold text-lg text-white">
            {item.title}
          </Text>
          <View className="flex-row justify-between items-center mt-2">
            <TouchableOpacity onPress={() => appStore.triggerArticle(item)}>
              <Icon
                type={'MaterialIcons'}
                name={
                  appStore.favoriteList.find(e => e.url === item.url)
                    ? 'favorite'
                    : 'favorite-border'
                }
                color="#fff"
                size={20}
              />
            </TouchableOpacity>

            <Text className="font-NotoSerifKRLight text-xs text-white text-right ">
              By {item.author}, {moment(item.publishedAt).format('DD-MM-YYYY HH:mm')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
    
  );
};

export default observer(NewsItem);
