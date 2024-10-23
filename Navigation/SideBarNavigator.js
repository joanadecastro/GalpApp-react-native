import React, { Component, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, Animated, Modal, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {
  Title,
  Caption,
} from 'react-native-paper';
import Sidebar_menu from '../components/Sidebar_menu';

const SideBarNavigator = (props) => {

  const [isVisible, setIsvisible] = useState(false);



  return (

    <View style={styles.container}>


      {/*======================================= MODAL / SIDEBAR ============================================ */}
      <Modal
        style={styles.modal}
        animationType={'fade'}
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          setIsvisible(false);

        }}
      >

        <View style={styles.sidebarContainer}>

          {/*======================================= Header sidebar ============================================ */}
          <LinearGradient
            style={{

            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 2, y: 0 }}
            colors={['#1097FF', 'white']}
          >
            <TouchableOpacity onPress={() => {
              setIsvisible(false);

            }} style={styles.close}>
              <Image source={require('../assets/closeSmall.png')} />
            </TouchableOpacity >
            <View style={styles.containerInfoSection}>
              <View style={styles.userInfoSection}>
                <View>
                  <Image
                    style={styles.avatar}
                    source={{ uri: 'https://th.bing.com/th/id/R.33bc35b2ce3bd42eeba9631ec0bd4583?rik=ldsLql9XPlRuUw&riu=http%3a%2f%2fwww.sintetia.com%2fwp-content%2fuploads%2f2012%2f05%2fFoto-perfil.jpg&ehk=Jdx%2bkW9YkW3ibyCHbcO9yjdF5e9wEdcDbzzPdeFPjzk%3d&risl=&pid=ImgRaw&r=0' }}
                  />
                  <View style={styles.localizationOff}>
                    <Image source={require('../assets/localization.png')} style={styles.itemlocalizationOff}/>
                  </View>
                </View>
                <Title style={styles.title}>Manuel Marques</Title>
                <Caption style={styles.localization}>
                  <Image source={require('../assets/localization.png')} style={styles.iconLocal} />
                  <Text style={styles.nameLocal}> Moçambique</Text>
                </Caption>
                <TouchableOpacity style={styles.buttonHeaderSB}
                >
                  <Text style={styles.textbuttonHeaderSB}>Perception Risk Quiz</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>

          {/*===================================== menu sidebar ============================================== */}

          <View style={styles.menuSidebar}>
            <Sidebar_menu tabNavigator={props.tabNavigator} />
          </View>

          {/*===================================== // menu sidebar ============================================== */}

        </View>

      </Modal>

      {/*===================================== botao de abrir sidebar ============================================== */}
      <TouchableOpacity onPress={() => {
        setIsvisible(true);
      }} style={styles.buttonImageContainer}>
        <Image
          style={styles.buttonImage}
          source={{ uri: 'https://th.bing.com/th/id/R.33bc35b2ce3bd42eeba9631ec0bd4583?rik=ldsLql9XPlRuUw&riu=http%3a%2f%2fwww.sintetia.com%2fwp-content%2fuploads%2f2012%2f05%2fFoto-perfil.jpg&ehk=Jdx%2bkW9YkW3ibyCHbcO9yjdF5e9wEdcDbzzPdeFPjzk%3d&risl=&pid=ImgRaw&r=0' }}
        />
      </TouchableOpacity >
      {/*===================================== //botao de abrir sidebar ============================================== */}
    </View>

  )

};

export default SideBarNavigator;


const styles = StyleSheet.create({

  sidebarContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F9FCFF',
    width: 314,
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    /*================  SOMBRA ========================*/
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0,
    elevation: 25,
  },

  containerInfoSection: {
    height: 249,
    width: 314,
  },

  userInfoSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  localization: {
    fontSize: 12,
    marginBottom: 7,

  },

  avatar: {
    borderColor: 'white',
    borderWidth: 2,
    width: 65,
    height: 65,
    marginBottom: 5,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,

  },

  localizationOff: {
    width: 14,
    height: 14,
    backgroundColor: '#ED4756',
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    position: 'absolute',
    top: 50,
    left: 50

  },

  itemlocalizationOff: {
    width:7,
    height:8,
    tintColor:'#FFFFFF',
    position:'absolute',
    top:'25%',
    left:'25%',

  },

  buttonImage: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: 30,
    height: 30,
    borderColor: 'red',
    borderWidth: 1,

  },

  buttonHeaderSB: {
    marginTop: 5,
    width: 156,
    height: 40,
    borderColor: '#707070',
    backgroundColor: '#FFFFFF',
    borderRadius: 500,
    borderWidth: 1,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0,
    elevation: 25,

  },

  textbuttonHeaderSB: {
    position: 'relative',
    top: '25%',
    marginLeft: 13,
  },

  menuSidebar: {
    marginTop: 15,

  },

  iconLocal: {
    height: 12,

  },

  close: {
    position: 'relative',
    top: 14,
    left: 287,

  },

});