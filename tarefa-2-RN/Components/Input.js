import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}}/>
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderRadius: 2,
        elevation: 2,
        width: '80%',
        margin: 10,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        textAlign: "center",
    }
});

export default Input;