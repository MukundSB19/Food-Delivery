import { View, Text } from 'react-native'
import React from 'react'
import "@/global.css"
import { Redirect } from 'expo-router';



const index = () => {
  return (
  <Redirect href={"/(auth)/welcome"} />  
  )
}

export default index