
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';







const HeaderScreenSideBar = (props) => {

    return (

        <LinearGradient
            style={{
                height: 100,
            }}
            start={{ x: 0, y: 1 }}
            end={{ x: 2, y: 0 }}
            colors={['#1097FF', 'white']}
        >
            <View style={styles.headerComponents}>
                <Text style={styles.text_Header} >{props.titleHeader}</Text>
            </View>
        </LinearGradient>
    );
};

export default HeaderScreenSideBar;


const styles = StyleSheet.create({

    header: {
        backgroundColor: '#1097FF',
        height: 100,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    text_Header: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 55,
        marginLeft: 62

    },

    
})