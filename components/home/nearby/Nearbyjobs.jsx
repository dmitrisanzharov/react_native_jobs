import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';

const Nearbyjobs = () => {
  return (
    <View>

      <View>
      <Text style={styles.headText1}>Nearby Jobs</Text>
      <TouchableOpacity>
        <Text style={styles.showAllText}>Show all</Text>
      </TouchableOpacity>
      </View>
   
    </View>
  )
}

export default Nearbyjobs;


const styles = StyleSheet.create({
    headText1: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  showAllText: {
    color: 'gray',
    fontSize: 'bold'
  }
});
