
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./Navigation/BottomTabNavigator";
import { StatusBar } from 'react-native';





const App = () => {

  return (

    <NavigationContainer >
      <StatusBar backgroundColor={'black'} />
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default App

