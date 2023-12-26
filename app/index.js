import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';


const Home = () => {

    return (
        <SafeAreaView style={{backgroundColor: 'lightgray', flex: 1}}>
            <Stack.Screen options={{
                title: 'Center Title',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'lightyellow'
                },
                headerShadowVisible: false,
                headerLeft: () => <Text>Any Text</Text>,
                headerRight: () => <Text>Any Text</Text>
            }}/>
        </SafeAreaView>
    )
}


export default Home;

