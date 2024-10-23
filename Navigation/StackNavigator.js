import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';

import Analysis_Main from '../Screens/TabNavigator/Analysis/Analysis_Main'
import Maps_Main from '../Screens/TabNavigator/Maps/Maps_Main'
import News_Main from '../Screens/TabNavigator/News/News_Main'
import Support_Main from '../Screens/TabNavigator/Support/Support_Main'
import Help_Main from '../Screens/TabNavigator/Help/Help_Main'



const Stack = createStackNavigator();

const Analysis_StackNavigator = ({ route, navigation }) => {

    return (
      
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}

            >
                <Stack.Screen name='Analysis_Main' component={Analysis_Main} />

            </Stack.Navigator>
    );
}

const Maps_StackNavigator = ({ route, navigation }) => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Maps_Main' component={Maps_Main} />
        </Stack.Navigator>
    );
}

const News_StackNavigator = ({ route, navigation }) => {

    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='News_Main' component={News_Main} />
        </Stack.Navigator>

    );
}

const Support_StackNavigator = ({ route, navigation }) => {

    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Support_Main' component={Support_Main} />
        </Stack.Navigator>

    );
}

const Help_StackNavigator = ({ route, navigation }) => {

    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,

            }}
        >
            <Stack.Screen name='Help_Main' component={Help_Main} />
        </Stack.Navigator>

    );
}



export {
    Analysis_StackNavigator,
    Maps_StackNavigator,
    News_StackNavigator,
    Support_StackNavigator,
    Help_StackNavigator,
};



