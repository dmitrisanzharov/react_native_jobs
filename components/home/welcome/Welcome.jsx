import React from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Pressable,
	Image,
	FlatList,
	StyleSheet,
} from "react-native";

import styles from "./welcome.style";

const Welcome = () => {
	const [activeJob, setActiveJob] = React.useState("fullTime");

	// React.useEffect(() => {
	// 	console.log("active", activeJob);
	// }, [activeJob]);

	return (
		<View style={customStyles.welcomeWrapper}>
			<Text>Welcome Component</Text>
			<View>
				<Text>------------------------</Text>
			</View>
			<View>
				<Text>Welcome Dmitri</Text>
				<Text>Find your perfect job</Text>
			</View>

			<View
				name="hrLine"
				style={{
					height: 1,
					backgroundColor: "black",
					alignSelf: "stretch",
					marginTop: 5,
					marginBottom: 5,
				}}
			/>

			<View
				style={{ borderWidth: 2, borderColor: "red", flexDirection: "row" }}
			>
				<TextInput
					style={customStyles.input}
					placeholder="what are you looking for?"
				/>

				<TouchableOpacity style={{ alignSelf: "end" }}>
					<Image
						style={customStyles.searchImage}
						source={{
							uri: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-256.png",
						}}
					/>
				</TouchableOpacity>
			</View>

			<View>
				<Text>------------------------</Text>
			</View>

			{/* LIST OF JOBS */}
			<View>
				{["fullTime", "partTime", "other"].map((item) => {
					return (
						<TouchableOpacity
              key={item}
							style={{
								...customStyles.tab(activeJob, item),
								...customStyles.genericButton,
							}}
							onPress={() => setActiveJob(item)}
						>
							<Text>{item}</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
};

export default Welcome;

const customStyles = StyleSheet.create({
	tab: (activeJob, item) => ({
		backgroundColor: activeJob === item ? "lightyellow" : "lightgray",
	}),
	genericButton: {
		borderWidth: 2,
		borderColor: "black",
	},
	welcomeWrapper: {
		borderWidth: 2,
		borderColor: "blue",
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
		width: "75%",
	},
	searchImage: {
		width: 25,
		height: 25,
		borderWidth: 1,
	},
});
