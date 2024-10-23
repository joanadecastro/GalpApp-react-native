import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const Button_ToolBar_Top = (props) => {

    return (
        <View style={props.selected ? [styles.buttom_TopToolBar, styles.buttom_TopToolBar_select] : [styles.buttom_TopToolBar, styles.buttom_TopToolBar_Nselect]}>
            <TouchableOpacity onPress={() => { props.handlePress(props.title) }}>
                <Text>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({

    buttom_TopToolBar: {
        paddingTop: 5,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 25,
    },

    buttom_TopToolBar_select: {
        backgroundColor: '#1097FF',
    },

    buttom_TopToolBar_Nselect: {
        backgroundColor: '#FFFFFF',
    },
});

export default Button_ToolBar_Top