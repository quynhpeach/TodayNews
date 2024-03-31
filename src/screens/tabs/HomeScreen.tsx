import { Articles, ResponseAPIResult } from 'src/services/apiModel';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';

import Icon from 'src/components/Icon';
import Modal from 'react-native-modal/dist/modal';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import NewsItem from './components/NewsItem';
import Pagination from '@cherry-soft/react-native-basic-pagination';
import { RootStackParams } from 'src/routes/RootStackParams';
import appStore from 'src/services/appStore';
import axios from 'axios';
import colors from 'src/services/colors';
import moment from 'moment';
import { observer } from 'mobx-react-lite';

type props = NativeStackScreenProps<RootStackParams, 'HomeScreen'>;
const HomeScreen = ({ navigation }: props) => {
  const [latestNews, setLatestNews] = useState<Articles[]>([]);
  const [activeCategory, setActiveCategory] = useState(-1);
  const [page, setPage] = useState(1);
  const [text, setText] = useState('');
  const listSortBy = [
    {
      value: 1,
      label: 'Popularity',
    },
    {
      value: 2,
      label: 'Relevancy',
    },
  ];
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
  }, [page]);

  function caesarCipher(text: string, shift: number): string {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.match(/[A-Z]/)) {
        result += String.fromCharCode(
          ((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65,
        );
      } else if (char.match(/[a-z]/)) {
        result += String.fromCharCode(
          ((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97,
        );
      } else {
        result += char;
      }
    }

    return result;
  }

  const getLatestNews = async (keyword?: string) => {
    try {
      if (!keyword && page > 0) {
        const response = await axios.get<ResponseAPIResult>(
          `http://192.168.2.20/getListNews.php` + '?page=' + page,
        );
        const data = response.data;

        setLatestNews(
          data?.news.map((e: Articles) => {
            let decrypted: Articles = {} as Articles;
            Object.keys(e).forEach(key => {
              // @ts-ignore
              decrypted[key] = caesarCipher(e[key], 3);
            });
            return decrypted;
          }),
        );
      } else {
        const response = await axios.get(
          'http://192.168.2.20/getListNews.php?keyword=' +
            keyword +
            '&page=' +
            page,
          // `https://newsapi.org/v2/everything?q=${keyword}&apiKey=4b482218317f4c84a6e9aa5b10835f2c&${previousDate}&to=${date}&page=1&pageSize=10&sortBy=${sortBy}`,
        );
        console.log('log', response.data);
        setLatestNews(
          response.data?.news.map((e: Articles) => {
            let decrypted: Articles = {} as Articles;
            Object.keys(e).forEach(key => {
              // @ts-ignore
              decrypted[key] = caesarCipher(e[key], 3);
            });
            return decrypted;
          }),
        );

      }
    } catch (error) {
      console.error('Error fetching latest news:', error);
    }
  };

  const handleTextChange = (newText: any) => {
    setText(newText);
  };

  const RenderNews = useCallback(() => {
    return (
      <FlatList
        showsVerticalScrollIndicator={true}
        data={latestNews}
        renderItem={({ item, index }) => <NewsItem item={item} key={index} />}
      />
    );
  }, [latestNews]);

  return (
    <View>
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
            className="font-NotoSerifKRRegular text-gray-400 text-sm p-2 flex-1"
            value={text}
            onChangeText={handleTextChange}
            onBlur={() => getLatestNews(text)}
          />
        </View>

        <Text className="font-NotoSerifKRBold my-3 text-black text-xl">
          Latest News
        </Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          className="pb-2"
          data={listCategories}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                setActiveCategory(index), getLatestNews(item);
              }}
              className={`h-[35px] justify-center items-center mx-2 mb-2 rounded-3xl ${activeCategory === index ? 'bg-[#FF3A44]' : 'bg-white border-gray-400 border-[0.5px]'}`}>
              <Text
                className={`${activeCategory === index ? 'text-white' : 'text-black'}  font-NotoSerifKRRegular text-xs px-3`}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          onPress={() => setPage(page + 1)}
          className="justify-center items-center">
          <Text className="font-NotoSerifKRSemiBold text-primary">
            Load more
          </Text>
        </TouchableOpacity>
        <RenderNews />
      </View>

      <View className="h-[100px]"></View>
    </View> 
  );
};

export default observer(HomeScreen);
