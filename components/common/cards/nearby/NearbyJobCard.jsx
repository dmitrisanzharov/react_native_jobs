import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({item, handleNavigate}) => {
  return (
    <TouchableOpacity style={{marginBottom: 20}} onPress={handleNavigate}>
      <View><Text>------------------------</Text></View>
      <Image 
      style={{height: 20, width: 20}}
      source={{
        uri: item.employer_logo ?? 'https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-64.png',
      }}
      
      />
      <Text>{item.employer_name}</Text>
      <Text>{item.job_title}</Text>
    </TouchableOpacity>
  )
}

export default NearbyJobCard