import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import Textinput from './components/TextInput';
import Textitem from './components/TextItem';

const App = () => {

  const [newText, setNewText] = useState('');
  const [myTexts, setMyTexts] = useState([]);
  const [isAddMode, setAddMode] = useState(false);

  const newTextHandler = (enteredText) => {
    setNewText(enteredText);
  }

  const buttonHandler = () => {
    setMyTexts(myTexts => 
      [...myTexts, {id: Math.random().toString(), value: newText}]);
    setAddMode(false);
    setNewText('');
  }

  const cancelHandler = () => {
    setAddMode(false);
    setNewText('');
  }

  const deleteHandler = textId => {
    setMyTexts(myTexts => {
      return myTexts.filter((text) => text.id !== textId);
    });
  }

  return (
    <View style={styles.screen}>
      <Button style={styles.btn} title="Adicionar Texto" 
      onPress={()=> setAddMode(true)}/>
      <Textinput 
        visible={isAddMode}
        cancelbtn={cancelHandler}
        txt={newText} 
        handlertxt={newTextHandler} 
        handlerbtn={buttonHandler}/>
      <FlatList 
        data={myTexts}
        keyExtractor={(item, index) => item.id} 
        renderItem={itemData => 
          <Textitem 
            title={itemData.item.value} 
            id={itemData.item.id}
            press={deleteHandler}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 100,
  }, 
  btn: {
    
  }
});

export default App;
