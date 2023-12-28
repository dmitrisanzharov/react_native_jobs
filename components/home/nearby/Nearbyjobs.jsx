import React from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import finalData from '../../../data/finalData';
import NearbyJobCard  from '../../common/cards/nearby/NearbyJobCard';

const Nearbyjobs = () => {
  const router = useRouter();
	return (
		<View style={{ padding: 10, borderWidth: 2, borderColor: "black" }}>
			<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
				<Text style={{ fontSize: 20, fontWeight: "bold" }}>Nearby Jobs</Text>
				<TouchableOpacity>
					<Text>Show all</Text>
				</TouchableOpacity>
			</View>


      <View>
          {finalData.map((item)=> {

            return <NearbyJobCard key={item.job_id} item={item} handleNavigate={()=> router.push(`/job-details/${item.job_id}`)}/>
          })}
        </View>

		</View>
	);
};

export default Nearbyjobs;
