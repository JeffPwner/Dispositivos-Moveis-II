import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button} from 'react-native';
function App(){
  const [inputAlcool, setAlcool] = useState('')
  const [inputGasolina, setGasolina] = useState('')
  const [price, setPrice] = useState('')
  let imagegasolina = 'https://wp-midia-nova.bidu.com.br/uploads/2017/01/05175045/%C3%A1lcool.png';
  function preco(){
    if ( inputAlcool / inputGasolina < 0.7){
      setPrice('Álcool')
    } else {
      setPrice('Gasolina')
    }
}
return(
<View style={styles.area}>
<Text style={styles.texto}>Álcool ou Gasolina</Text>
<Image
          source={{ uri: imagegasolina }}
          style={{ width: 280, height: 150, margin: 'auto'}}
        />

<TextInput
style={styles.inputAlcool}
placeholder="Preço do Álcool"
onChangeText={setAlcool}
/>
<TextInput
style={styles.inputGasolina}
placeholder="Preço da Gasolina"
onChangeText={setGasolina}
/>
<Button title="Verificar" onPress={preco} />
<Text style={styles.texto}> {price} </Text>
</View>
);
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  inputAlcool:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  inputGasolina:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  }
})
export default App;