import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({textProp, imgUrl, handlePress}) => {
	return (
		<View>
			<TouchableOpacity onPress={handlePress}>
				<Image
					style={{ width: 25, height: 25 }}
					source={{
						uri: imgUrl,
					}}
				/>
        <Text>{textProp}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ScreenHeaderBtn;
