import { View, Text, FlatList, Image, ImageBackground } from 'react-native'
import React from 'react'
import { horizontalImage } from '@/types/types'


const HorizontalList = ({listObject}:{listObject:horizontalImage[]}) => {
  return (
        <FlatList className='ml-2 mt-6' horizontal data={listObject} showsHorizontalScrollIndicator={false} renderItem={({item})=> (
                <View className='mr-5 '>
                <Image className=' w-[100] h-[100] bg-[#ffffff55] rounded-full' resizeMode='cover' source={item.image} />
                <Text className='text-center font-boldFont tracking-tight color-fontPrimary-0'> {item.text}</Text>
                </View>
  )} />
  )
}

export default HorizontalList