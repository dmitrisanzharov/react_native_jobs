import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ActivityIndicator,
	FlatList,
} from "react-native";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";
import finalData from '../../../data/finalData';

const Popularjobs = () => {
	// const { data, isLoading, error, reFetch } = useFetch("search", {
	// 	query: "React developer",
	// 	num_pages: 1,
	// });

	// console.log('all data', data);

	const isLoading = false;

	return (
		<View style={styles.mainContainer}>
			<View style={styles.rowBox}>
				<Text>Popular Jobs</Text>
				<TouchableOpacity style={styles.genericButton}>
					<Text>Show All</Text>
				</TouchableOpacity>
			</View>

			<View>
				<Text>------------------------</Text>
			</View>

			<View>
				{isLoading ? (
					<ActivityIndicator size="large" color="yellow" />
				) : (
                    <FlatList
                        data={finalData}
                        renderItem={({ item }) => {
                            console.log('item test', item);
                            return <PopularJobCard item={item} />;
                        }}
                        contentContainerStyle={{ columnGap: 40 }}
                        keyExtractor={(item) => item.job_id}
                        horizontal
                    />

				)}
			</View>
		</View>
	);
};

export default Popularjobs;

const styles = StyleSheet.create({
	mainContainer: {
		borderWidth: 2,
		borderColor: "black",
		margin: 10,
		padding: 5,
	},
	rowBox: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	genericButton: {
		borderWidth: 2,
		borderColor: "black",
		padding: 5,
	},
});


