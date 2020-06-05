import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Modal } from 'react-native';


const Textinput = props => {
    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.container}>
            <TextInput style={styles.inputfield} onChangeText={props.handlertxt} 
                value={props.txt}/>
            <View style={styles.btns}>
                <Button style={styles.addbtn} title='Adicionar' onPress={props.handlerbtn}/>
                <Button style={styles.cncbtn}title="Cancelar" onPress={props.cancelbtn}
                color="red"/>
            </View>
        </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 30
      },
    inputfield: {
      backgroundColor: '#A9A9A9',
      width: '100%',
      padding: 10,
      borderWidth: 2,
      margin: 15
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    }
});

export default Textinput;
