import React from "react";
import  {Stack, useRouter, useSearchParams } from 'expo-router'; 
import { View, Text, SafeAreaView, ActivityIndicator, RefreshControl, TouchableOpacity } from "react-native";
import finalData from '../../data/finalData';

const JobDetails = () => {

	const router = useRouter();
	const params = useSearchParams();
	const finalJobDetails = finalData.filter(item=> item.job_id === params.id)
	// console.log("finalJobDetails: ", finalJobDetails);


	return <View>
		<View style={{alignItems: 'baseline'}}>
			<TouchableOpacity style={{borderWidth: 2, borderColor: 'blue', padding: 10}} onPress={()=> router.back()}><Text>Back Button</Text></TouchableOpacity>
		</View>
		<View><Text>------------------------</Text></View>
		<Text>Job Details</Text>
	</View>;
};

export default JobDetails;
