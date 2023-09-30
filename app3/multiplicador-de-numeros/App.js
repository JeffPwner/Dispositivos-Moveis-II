import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles.js'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [res, setRes] = useState(0);

  function calcular() {
    setRes(num1 * num2);
  }

  return (
    <View>
      <TextInput style={styles.campoNum, styles.espaco} placeholder="Digite o primeiro nº" onChangeText={setNum1}/>
      <TextInput style={styles.campoNum, styles.espaco} placeholder="Digite o segundo nº" onChangeText={setNum2}/>

      <Button color="green" title="Calcular" onPress={calcular}></Button>
      <Text style={styles.campoNum}>Resultado: {res}</Text>
    </View>
  );
}

export default App;
