
import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, Button, Modal, StatusBar } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from 'expo-linear-gradient';
import {
  Analysis_StackNavigator,
  Maps_StackNavigator,
  News_StackNavigator,
  Support_StackNavigator,
  Help_StackNavigator,
} from './StackNavigator'
import SideBarNavigator from './SideBarNavigator'


const Tab = createBottomTabNavigator();


const BottomTabNavigator = (props) => {

  let notificationNumber= 5;



  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        unmountOnBlur: true, // da me sempre a primeira pagina
        tabBarStyle: { height: 56 },
        tabBarShowLabel: false,
        header: ({ navigation, route }) => (
          

          <LinearGradient
            style={{
              height: 100,
            }}
            start={{ x: 0, y: 1 }}
            end={{ x: 2, y: 0 }}
            colors={['#1097FF', 'white']}
          >
            <View style={styles.header}>
              <Text style={styles.text_Header}>{route.name}</Text>
             <View>
             <Image
                style={styles.notification}
                source={require('../assets/notificatioBig.png')}
              />
              <View style={styles.rednotification}>
                <Text style={styles.notificationNumber}> {notificationNumber} </Text> 
              </View>
             </View>
              <View style={styles.sidebar}>
                <SideBarNavigator
                  tabNavigator={navigation}
                />
              </View>
            </View>

          </LinearGradient>


        )
      }}

    >

      <Tab.Screen name="Analysis"
        component={Analysis_StackNavigator}
        options={{

          tabBarIcon: ({ focused, tintColor, size }) => (
            <>
              <Image
                source={require('../assets/analysis.png')}
                style={{ height: 24, tintColor: "#309EF3" }}
              />
              <Text style={styles.textTabBar}>Analysis</Text>

            </>
          )
        }}

      />
      <Tab.Screen name="Maps"
        component={Maps_StackNavigator}
        options={{

          tabBarIcon: ({ focused, tintColor, size }) => (
            <>
              <Image
                source={require('../assets/maps.png')}
                style={{ height: 24, tintColor: "#309EF3" }}
              />
              <Text style={styles.textTabBar}>Maps</Text>

            </>
          )
        }}

      />
      <Tab.Screen name="News"
        component={News_StackNavigator}
        options={{

          tabBarIcon: ({ focused, tintColor, size }) => (
            <>
              <Image
                source={require('../assets/news.png')}
                style={{ height: 24, tintColor: "#309EF3" }}
              />
              <Text style={styles.textTabBar}>News</Text>

            </>
          )
        }}

      />
      <Tab.Screen name="Support"
        component={Support_StackNavigator}
        options={{

          tabBarIcon: ({ focused, tintColor, size }) => (
            <>
              <Image
                source={require('../assets/support.png')}
                style={{ height: 24, tintColor: "#309EF3" }}
              />
              <Text style={styles.textTabBar}>Support</Text>

            </>
          )
        }}

      />
      <Tab.Screen name="Help"
        component={Help_StackNavigator}
        options={{

          tabBarIcon: ({ focused, tintColor, size }) => (
            <>
              <Image
                source={require('../assets/sos.png')}
                style={{ height: 24, tintColor: "#309EF3" }}
              />
              <Text style={styles.textTabBar}>Help</Text>

            </>
          )
        }}

      />


    </Tab.Navigator>

  );


};



const styles = StyleSheet.create({

  textTabBar: {
    color: '#309EF3',
    fontSize: 10,
  },

  header: {
    width: '100%',
    height: 100,
    flex: 1,
    position: 'absolute',
  },

  text_Header: {
    position: 'relative',
    top: 58,
    left: 18,
    fontSize: 20,
    color: '#101010',

  },

  notification: {
    width: 24,
    height: 30,
    position: 'absolute',
    top: 25,
    left: 300,

  },

  rednotification: {
    width: 20,
    height: 20,
    borderRadius:50,
    position: 'relative',
    top: 25,
    left: 313,
    backgroundColor:'#ED4756',

  },

  notificationNumber: {
    fontSize:14,
    color:'white',
    top: 0,
    left: 2,

  },

  sidebar: {
    position: 'absolute',
    left:358,
    bottom:18.17,
  },

});

export default BottomTabNavigator;