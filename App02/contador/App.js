import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  const [num, setNum] = useState(0);

  function somar() {
    setNum(num + 1);
  }

    function subtrair() {
      if(num <= 0){
        window.alert('Não, por favor não cancele o CPF de ninguém ToT')
      }else{
        setNum(num - 1);
      }

  }

  return (
    <View style={{ margin: 10, flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 25, margin: 15, textAlign: 'center' }}>Contador de Pessoas</Text>
      <Card>
        <Text style={{fontSize: 80, textAlign: 'center'}}>{ num }</Text>
      </Card>

      <Button color='green' title="+" onPress={somar} />
      <Button color='red' title="-" onPress={subtrair}/>
    </View>
  );
}
