import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity, FlatList, Modal } from 'react-native';

const Textitem = props => {
    return (
      <TouchableOpacity onPress={props.press.bind(this, props.id)}>
          <View style={styles.texts}>
            <Text>{props.title}</Text>
          </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    texts: {
      flexDirection: 'column',
      borderWidth: 1,
      padding: 10,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    }
  });

  export default Textitem;