import { Articles, ResponseAPIResult } from 'src/services/apiModel';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';

import Icon from 'src/components/Icon';
import axios from 'axios';

const HomeScreen = () => {
  const [latestNews, setLatestNews] = useState<Articles[]>([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [text, setText ] = useState('');
  const listCategories = [
    'Health',
    'Sports',
    'Politics',
    'Technology',
    'Science',
    'Entertainment',
    'Environment',
    'Education',
  ];
  useEffect(() => {
    getLatestNews();
  }, []);

  const getLatestNews = async (keyword?: string) => {
    try {
      if (!keyword) {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?q=all&apiKey=4b482218317f4c84a6e9aa5b10835f2c&from=2024-03-23&to=2024-03-24&page=1&pageSize=10',
        );
        setLatestNews(response.data.articles);
      } else {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${keyword}&apiKey=4b482218317f4c84a6e9aa5b10835f2c&from=2024-03-23&to=2024-03-24&page=1&pageSize=10`,
        );
        setLatestNews(response.data.articles);
      }
    } catch (error) {
      console.error('Error fetching latest news:', error);
    }
  };

  const handleTextChange = (newText: any) => {
    // Update the state with the new text value
    setText(newText);
};

  const RenderNews = useCallback(() => {
    if (!latestNews) {
      // If latestNews is undefined, display a loading indicator or a message
      return <Text>Loading...</Text>;
    }

    // If latestNews is defined, proceed with rendering the news items
    return (
      <>
        {latestNews.map((item, index) => (
          <View className="my-3" key={index}>
            <TouchableOpacity className="rounded-lg overflow-hidden p-0 h-[230px]">
              <Image
                source={{
                  uri: item.urlToImage,
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
                  <Icon
                    type={'MaterialIcons'}
                    name={'favorite-border'}
                    color="#fff"
                    size={20}
                  />
                  <Text className="font-NotoSerifKRLight text-xs text-white text-right ">
                    By {item.author}, {item.publishedAt}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </>
    );
  }, [latestNews]);

  return (
    <ScrollView>
      <View className="p-3">
        <View className="rounded-3xl border-gray-400 border-[0.6px] h-[40px] flex-row items-center">
          <Icon
            type={'EvilIcons'}
            name={'search'}
            size={25}
            color="#787887"
            className="mb-2 ml-1"
          />
          <TextInput
            className="font-NotoSerifKRRegular text-gray-400 text-sm py-0"
            value={text}
            onChangeText={handleTextChange}
          />
        </View>
        <Text className="font-NotoSerifKRBold my-3 text-black text-xl">
          Latest News
        </Text>
        <ScrollView horizontal>
          {listCategories.map((item, index) => {
            return (
              <View className="mx-2">
                <TouchableOpacity
                  onPress={() => {
                    setActiveCategory(index), getLatestNews(item);
                  }}
                  className={`rounded-3xl ${activeCategory === index ? 'bg-[#FF3A44]' : 'bg-white border-gray-400 border-[0.5px]'} py-2 px-3`}>
                  <Text
                    className={`${activeCategory === index ? 'text-white' : 'text-black'}  font-NotoSerifKRRegular text-xs`}>
                    {item}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <RenderNews />
      </View>
      <View className='h-[100px]'></View>
    </ScrollView>
  );
};

export default HomeScreen;
