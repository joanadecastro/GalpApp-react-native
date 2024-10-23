import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';





const Input = (props) => {

    const [text, onChangeText] = useState( props.textbooking );

    return (
        <View >
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
        </View>
    );
}

export default Input


const styles = StyleSheet.create({

    input: {
        height: 40,
        width:380,
        margin: 12,
        borderWidth: 1.5,
        borderRadius:25,
        borderColor:'#35A7FF',
        padding: 10,
        marginTop:30,
        
    },
});