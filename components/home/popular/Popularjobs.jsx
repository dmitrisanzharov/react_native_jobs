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

const Popularjobs = () => {
	const [isLoading, setIsLoading] = React.useState(false);

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
						data={[1, 2, 3, 4, 5, 6, 7, 8]}
						renderItem={({ item }) => {
							return <PopularJobCard item={item} />;
						}}
            contentContainerStyle={{columnGap: 40}}
            keyExtractor={item=> item}
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
