import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet  } from 'react-native'

const PopularJobCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
    <TouchableOpacity>
        <Image
          style={{ width: 25, height: 25 }}
          source={{uri: item.employer_logo ?? 'https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-64.png'}}
        />
    </TouchableOpacity>
    <Text>{item.employer_name}</Text>

    <View>
      <Text>
        {item.job_title}
      </Text>
      <Text>{item.job_country}</Text>
    </View>
 </TouchableOpacity>
  )
}

export default PopularJobCard;


const styles = StyleSheet.create({

  mainContainer: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 5
  },  

	genericButton: {
		borderWidth: 2,
		borderColor: "black",
    padding: 5
	}
});
