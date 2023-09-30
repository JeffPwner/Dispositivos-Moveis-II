import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles.js';

function IMC() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [res, setRes] = useState('');

  function calcularIMC() {
    const res = (peso / (altura * altura));
    
    switch (true) {
      case (res <= 18.5):
        setRes('Abaixo do peso');
        break;
      case (res <= 24.9):
        setRes('Peso Normal');
        break;
      case (res <= 29.9):
        console.log('Sobrepeso');
        break;
      case (res <= 34.9):
        console.log('Obesidade Grau I');
        break;
      case (res <= 39.9):
        console.log('Obesidade Grau II');
        break;
      case (res > 39.9):
        console.log('Obesidade Grau III ou Mórbida');
        break;
    }
  }

  return (
    <View>
      <TextInput
        style={(styles.campoNum)}
        placeholder="Digite seu peso"
        onChangeText={setPeso}
      />
      <TextInput
        style={(styles.campoNum)}
        placeholder="Digite sua altura"
        onChangeText={setAltura}
      />

      <Button color="green" title="Calcular IMC" onPress={calcularIMC}></Button>
      <Text style={styles.classificar}>Classificar: {res}</Text>
    </View>
  );
}

export default IMC;
