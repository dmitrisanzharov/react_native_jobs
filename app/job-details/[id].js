import React from "react";
import { Stack, useRouter, useSearchParams } from "expo-router";
import {
	View,
	Text,
	SafeAreaView,
	ActivityIndicator,
	RefreshControl,
	TouchableOpacity,
	ScrollView,
	Linking,
	Button,
	Alert,
	TextInput
} from "react-native";
import finalData from "../../data/finalData";

const OpenURLButton = ({ url, title }) => {
	const handlePress = React.useCallback(async () => {
		// Checking if the link is supported for links with custom URL scheme.
		const supported = await Linking.canOpenURL(url);

		if (supported) {
			// Opening the link with some app, if the URL scheme is "http" the web link should be opened
			// by some browser in the mobile
			await Linking.openURL(url);
		} else {
			Alert.alert(`Don't know how to open this URL: ${url}`);
		}
	}, [url]);

	return <Button title={title} onPress={handlePress} />;
};

const JobDetails = () => {
	const router = useRouter();
	const params = useSearchParams();
	const finalJobDetails = finalData.filter((item) => item.job_id === params.id);
	// console.log("finalJobDetails: ", finalJobDetails);

	const supportedURL = finalJobDetails[0].job_google_link;
	

	const [text, onChangeText] = React.useState('Useless Text');

	return (
		<ScrollView>
			<View style={{ alignItems: "baseline" }}>
				<TouchableOpacity
					style={{ borderWidth: 2, borderColor: "blue", padding: 10 }}
					onPress={() => router.back()}
				>
					<Text>Back Button</Text>
				</TouchableOpacity>
			</View>
			<View>
				<Text>------------------------</Text>
			</View>
			<View style={{ padding: 10, borderWidth: 2, borderColor: "yellow" }}>
				<Text>Job Details</Text>
				<View>
					<Text>------------------------</Text>
				</View>
				<Text>{JSON.stringify(finalJobDetails)}</Text>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
					labore repellendus inventore illo suscipit, sapiente eaque quisquam
					magnam in, sint quos possimus enim omnis! Rerum quas dolorem, officia
					quam sit aliquam pariatur necessitatibus harum, perferendis minima
					voluptatem illum neque? Explicabo ex non accusantium, repellendus
					recusandae temporibus, expedita, quam dolor alias architecto
					distinctio molestiae quaerat optio corporis id dolorem asperiores
					sequi? Velit perferendis unde, similique alias assumenda provident
					adipisci beatae rerum animi, blanditiis libero debitis tenetur
					corrupti, cumque vero commodi nihil pariatur porro modi voluptatem
					consequatur laborum? Quod ipsa accusantium placeat quasi deleniti
					impedit exercitationem, adipisci animi inventore aperiam omnis aut,
					dolorem a rem, ducimus ut possimus in maiores dignissimos suscipit quo
					porro sit quibusdam! Nulla eaque necessitatibus dolorum? Quisquam
					soluta minus quis laborum sequi, in eum explicabo unde ad! Provident
					vero aliquam atque ducimus id deserunt doloremque sequi voluptatibus
					eum libero ullam, beatae neque. Nisi provident veritatis rem id
					dolorum ratione nemo reprehenderit voluptatem, tempore dicta illo!
					Doloremque, provident? Eos beatae laudantium commodi quisquam vel
					fugit quas, eligendi voluptatibus unde! Deserunt veritatis deleniti,
					dolorum dolores, iste sint odit fugit, facere necessitatibus
					cupiditate repudiandae fugiat cum ipsum? Aspernatur harum eveniet
					accusantium quibusdam aliquid magnam nihil dolorem ad commodi numquam,
					id cupiditate dolor accusamus minus perspiciatis ducimus sapiente?
					Dignissimos consequatur culpa dicta soluta modi recusandae est sint?
					Provident autem atque expedita fugit, officia soluta. Sunt,
					perferendis unde. Molestias est recusandae suscipit nulla cumque, sint
					quasi. Sit facere commodi expedita laboriosam animi ut libero.
					Officia, quisquam voluptatibus obcaecati eaque assumenda aspernatur
					dolorum exercitationem, eius nesciunt et natus ducimus iste asperiores
					rerum ratione esse. Quis necessitatibus, laborum voluptatum labore
					earum odio totam exercitationem voluptates, dignissimos, et harum unde
					cumque magnam dolore illo quidem voluptas quos libero. Error incidunt
					deserunt voluptas provident! Assumenda corporis quaerat officiis
					minima veritatis dolores quidem mollitia iure, molestiae doloremque
					facere.
				</Text>
				<View>
					<Text>------------------------</Text>
				</View>
				<View>
					<OpenURLButton url={supportedURL} title="apply" />
				</View>
			</View>

			<View>
				<Text>------------------------</Text>
			</View>

			<TextInput value={text} onChangeText={onChangeText} />
			<Text>{text}</Text>
		</ScrollView>
	);
};

export default JobDetails;
