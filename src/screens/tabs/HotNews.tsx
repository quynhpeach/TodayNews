import { Articles, ResponseAPIResult } from 'src/services/apiModel';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import NewsItem from './components/NewsItem';
import axios from 'axios';
import moment from 'moment';

const HotNews = () => {
  const [hotNews, setHotNews] = useState<Articles[]>([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getLatestNews();
  }, []);

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


  const getLatestNews = async () => {
    try {
        const response = await axios.get<ResponseAPIResult>(
          'http://192.168.2.20/getListNews.php?keyword=hot',
        );
        const data = response.data;

        setHotNews(
          data?.news.map((e: Articles) => {
            let decrypted: Articles = {} as Articles;
            Object.keys(e).forEach(key => {
              // @ts-ignore
              decrypted[key] = caesarCipher(e[key], 3);
            });
            return decrypted;
          }),);
        
      
    } catch (error) {
      console.error('Error fetching latest news:', error);
    }
  };

  return (
    <View className='p-3'>


      <FlatList
        showsVerticalScrollIndicator={true}
        data={hotNews}
        renderItem={({ item, index }) => <NewsItem item={item} key={index} />}
      />
   
      <View className="h-[100px]"></View>
    </View>
  );
};

export default HotNews;
