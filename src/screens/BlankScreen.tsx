import { Image, View } from 'react-native'

import React from 'react'

const BlankScreen = () => {
  return (
    <View className={'flex-1 bg-primary justify-center items-center'}>
    <Image
      source={require('../assets/images/news.png')}
      className={'w-[124px] h-[92px] mt-12 mb-10'}
      resizeMode={'contain'}
    />
  </View>
  )
}

export default BlankScreen