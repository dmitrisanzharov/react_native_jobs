import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack } from "expo-router";

// premade components
import {
	ScreenHeaderBtn,
	Nearbyjobs,
	Popularjobs,
	Welcome,
} from "../components";

// all other imports
import { COLORS, icons, images, SIZES } from "../constants";

const Home = () => {
	return (
		<SafeAreaView style={{ backgroundColor: "lightgray", flex: 1 }}>
			{/* HEADER */}
			<Stack.Screen
				options={{
					headerTitle: "",
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: "lightyellow",
					},
					headerShadowVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn
							textProp="menu"
							imgUrl="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png"
							handlePress={() => console.log("menu was pressed")}
						/>
					),
					headerRight: () => (
						<ScreenHeaderBtn
							textProp="profile"
							imgUrl="https://pics.craiyon.com/2023-05-30/eaab7f873e324b3e8f41f5aba2c2aeb2.webp"
						/>
					),
				}}
			/>

			{/* CONTENT */}
			<ScrollView style={{ padding: "15px" }}>
				<View>
					<Welcome />

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
					<Popularjobs />
					<Nearbyjobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
