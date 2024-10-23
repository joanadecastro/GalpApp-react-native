import React, { useState , useRef, useEffect} from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Animated } from 'react-native';
import Button_ToolBar_Top from './Button_ToolBar_Top';

const ToolBar_Top = (props) => {
    /* const [selectedbutton, setSelectedButton] = useState(props.options[0].title);*/
const refScrollview = useRef ()

useEffect(()=>{

    //console.log('useEffect:' + refScrollview.current)
    refScrollview.current.scrollTo({x:0, animated: true})
}, []);

    const handlePressFunc = (button) => {
        /*setSelectedButton(button);*/
        props.selectoption(button);
    };

    return (
        <View style={styles.container}>
            <ScrollView
                ref={refScrollview}
                style={styles.scroll}
                horizontal={true}
                centerContent={true}
                contentInset={{ top: 0, left: 0, bottom: 10, right: 0 }}
                showsHorizontalScrollIndicator={false}
            >
                {props.options.map((element, index) => {

                    return (
                        <View style={styles.buttonContainer} key={'buttonContainer_' + index} >
                            <Button_ToolBar_Top title={element.title} key={'button_' + index} selected={props.selected === element.title}
                                handlePress={handlePressFunc}
                            />
                        </View>
                    )

                })}

            </ScrollView>
        </View>
    )

};

const styles = StyleSheet.create({

    container: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: 50,
        shadowColor: 'black',
        elevation: 20,
    },

    buttonContainer: {
        paddingHorizontal: 4,
        paddingVertical: 10,
    }
})

export default ToolBar_Top;