import React from 'react';
import {TextInput, StyleSheet, View, Button} from 'react-native';
import Colors from '../Constants/Colors';

const ButtonContainer = props => {
    return (
        <View style={{...styles.buttonContainer, ...props.style}}>
            <View style={{...styles.button, ...props.style}}>
                <Button title={props.title1}
                color={Colors.secondary} 
                onPress={props.pressr}/>
            </View>
            <View style={{...styles.button, ...props.style}}>
                <Button 
                title={props.title2} 
                color={Colors.primary} 
                onPress={props.pressc}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        paddingHorizontal: 15,
        color: 'black',
    },
    button: {
        width: 90,
    }
});

export default ButtonContainer;