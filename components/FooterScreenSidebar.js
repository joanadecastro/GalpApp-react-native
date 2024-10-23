
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal} from 'react-native';



const FooterScreenSidebar = (props) => {

    const [notselect, setnotselect] = useState(true);
    const [cor, setCor] = useState('#CECECE');

    useEffect(() => {
        setCor((state) => notselect ? '#CECECE': '#309EF3');
      }, [notselect]);


    return (

        <View style={styles.FooterContainer}>

            <TouchableOpacity style={styles.IconContainer} 
                              onPress= {()=>{
                                setnotselect(state => !state);
                                props.tabNavigator.navigate('Analysis');
                                
                                  }}>
                <Image
                    source={require('../assets/analysis.png')}
                    style={{ height: 24, tintColor: cor }}
                />
                <Text style={{ fontSize:10, color: cor }}>analysis</Text>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconContainer}
                              onPress= {()=>{
                                setnotselect(state => !state);
                                props.tabNavigator.navigate('Maps')}}>
                <Image
                    source={require('../assets/maps.png')}
                    style={{ height: 24, tintColor: cor }}
                />
                <Text style={{ fontSize:10, color: cor }}>Map</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconContainer}
                                onPress= {()=>{
                                    setnotselect(state => !state);
                                    props.tabNavigator.navigate('News')}}>
                <Image
                    source={require('../assets/news.png')}
                    style={{ height: 24, tintColor: cor }}
                />
                <Text style={{ fontSize:10, color: cor }}>News</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconContainer}
                                onPress= {()=>{
                                    setnotselect(state => !state);
                                    props.tabNavigator.navigate('Support')}}>
                <Image
                    source={require('../assets/support.png')}
                    style={{ height: 24, tintColor: cor }}
                />
                <Text style={{ fontSize:10, color: cor }}>Support</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconContainer}
                                onPress= {()=>{
                                    setnotselect(state => !state);
                                    props.tabNavigator.navigate('Help')}}>
                <Image
                    source={require('../assets/sos.png')}
                    style={{ height: 24, tintColor: cor }}
                />
                <Text style={{ fontSize:10, color: cor }}>Help</Text>
            </TouchableOpacity>

        </View>

    );
}

export default FooterScreenSidebar

const styles = StyleSheet.create({

    FooterContainer: {
        backgroundColor: '#FFFFFF',
        height: 56,
        width: '100%',
        paddingRight: 25,
        paddingLeft: 25,
        paddingTop: 8,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 15,
        },
        shadowOpacity: 1,
        elevation: 25

    },

    IconContainer: {
        alignItems: 'center'

    },

    text_Header: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 55,
        marginLeft: 62

    },


    screenFooterSidebar: {
        flex: 1,
        backgroundColor: 'red'
    }


})