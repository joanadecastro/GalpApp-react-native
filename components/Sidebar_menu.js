import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Modal, FlatList, Image } from "react-native";
import Modal from '@mui/material/Modal';
import AboutApp_Screen from "../Screens/SideBar/AbouApp_Screen";
import Bookings_Screen from "../Screens/SideBar/Bookings_Screen";
import Documents_Screen from "../Screens/SideBar/Documents_Screen";
import EditProfile_Screen from "../Screens/SideBar/EditProfile_Screen";
import FAQ_Screen from "../Screens/SideBar/FAQ_Screen";
import Glossary_Screen from "../Screens/SideBar/Glossary_Screen";
import Logout_Screen from "../Screens/SideBar/Logout_Screen";
import Settings_Screen from "../Screens/SideBar/Settings_Screen";


const Sidebar_Screens = (props) => {

  if (props.id === '1') {
    return (<Bookings_Screen name='Bookings' tabNavigator={props.tabNavigator} />);

  } else if (props.id === '2') {
    return (<Documents_Screen name='Documents' tabNavigator={props.tabNavigator} />);

  } else if (props.id === '3') {
    return (<Glossary_Screen name='Glossary' tabNavigator={props.tabNavigator} />);

  } else if (props.id === '4') {
    return (<EditProfile_Screen name='Edit Profile' tabNavigator={props.tabNavigator} />);

  } else if (props.id === '5') {
    return (<Settings_Screen name='Settings' tabNavigator={props.tabNavigator} />);

  } else if (props.id === '6') {
    return (<FAQ_Screen name='FAQ' tabNavigator={props.tabNavigator} />);

  } else if (props.id === '7') {
    return (<AboutApp_Screen name='About App' tabNavigator={props.tabNavigator} />);

  } else if (props.id === '8') {
    return (<Logout_Screen name='Logout' tabNavigator={props.tabNavigator} />);
  }
};

const BookingsIcon = (<Image source={require('../assets/bookings.png') }   style={{ marginLeft:14}} />);
const DocumentsIcon = (<Image source={require('../assets/documents.png')} style={{ marginLeft:14}} />);
const GlossaryIcon = (<Image source={require('../assets/glossary.png')} style={{ marginLeft:14}} />);
const EditProfileIcon = (<Image source={require('../assets/editProfile.png')} style={{ marginLeft:14}} />);
const SettingsIcon = (<Image source={require('../assets/settings.png')} style={{ marginLeft:14}} />);
const FAQIcon = (<Image source={require('../assets/FAQ.png')} style={{ marginLeft:14}} />);
const AboutAppIcon = (<Image source={require('../assets/aboutApp.png')} style={{ marginLeft:14}} />);
const LogoutIcon = (<Image source={require('../assets/logout.png')} style={{ marginLeft:14}} />);


const DATA = [
  {
    id: "1",
    title: "Bookings",
    icon: BookingsIcon,
  },
  {
    id: "2",
    title: "Documents",
    icon: DocumentsIcon,

  },
  {
    id: "3",
    title: "Glossary",
    icon: GlossaryIcon,

  },
  {
    id: "4",
    title: "Edit Profile",
    icon: EditProfileIcon,

  },
  {
    id: "5",
    title: "Settings",
    icon: SettingsIcon,

  },
  {
    id: "6",
    title: "FAQ",
    icon: FAQIcon,

  },
  {
    id: "7",
    title: "About App",
    icon: AboutAppIcon,

  },
  {
    id: "8",
    title: "Logout",
    icon: LogoutIcon,

  },
];



const Item = ({ item, onPress, backgroundColor, textColor, fontWeight }) => (

  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    {item.icon}
    <Text style={[styles.title, textColor, fontWeight]}>{item.title}</Text>
  </TouchableOpacity>

);

const Sidebar_Menu = (props) => {

  const [selectedId, setSelectedId] = useState(null);
  const [isVisible, setIsvisible] = useState(false);

  const renderItem = ({ item }) => {

    const backgroundColor = item.id === selectedId ? "#6ABEFF38" : "#F9FCFF";
    const color = item.id === selectedId ? 'black' : 'black';
    const fontWeight = item.id === selectedId ? 'bold' : 'normal';

    return (
      <View>

        <Modal
          animationType={'fade'}
          transparent={true}
          visible={isVisible}
          onRequestClose={() => {
            setIsvisible(false);
          }}
        >
          <Sidebar_Screens id={selectedId} tabNavigator={props.tabNavigator} />
        </Modal>

        <Item

          item={item}
          onPress={() => {
            setSelectedId(item.id); setIsvisible(true)
          }}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
          fontWeight={{ fontWeight }}

        />

      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default Sidebar_Menu;


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  item: {
    width: 286,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 3,

  },

  title: {
    fontSize: 16,
    marginLeft: 48,
    position: 'absolute',

  },

  icon: {
    marginLeft: 14,

  },
})
