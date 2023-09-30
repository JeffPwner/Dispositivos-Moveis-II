import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Switch, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

function App(){
  let statusescolar = [
    {id:1, nome:'Ensino Fundamental'},
    {id:2, nome:'Ensino Médio'},
    {id:3, nome:'Superior'},
    {id:4, nome:'Mestrado'},
    {id:5, nome:'Doutorado'},
  ]

  let [nome, setNome] = useState('');
  let [idade, setIdade] = useState('');
  let [value, setValue] = useState(0);
  let [escolaridade, setEscolaridade] = useState(0);
  let [sexo, setSexo] = useState('');
  let [escolaridades, setEscolaridades] = useState(statusescolar);
  let [brazilian, setBrazilian] = useState(false);
  let [resultado, setResultado] = useState('');

  let escolaridadeItem = escolaridades.map( (valor, chave) => {
    return <Picker.Item key={chave} value={valor.id} label={valor.nome} />
  })

  function getResultado() {
    let brasileiro = (brazilian) ? 'Sim' : 'Não';

    setResultado("Nome: " + nome + " \n Idade:" + idade + "\n Sexo:" + sexo
    + "\n Escolaridade:" + escolaridades[escolaridade].nome + "\n Limite:" + value.toFixed(0) + "\n Brasileiro:" + brasileiro);
  }

  return(
    <View style={{fontSize: 15, margin: 30}}>
      <ScrollView style={{textAlign: 'center', margin: 10}}>
        <Text style={{color: 'red', fontSize: 25, textAlign: 'center'}}> abertura de conta </Text>

        <TextInput style={{borderWidth: 1, padding: 5, borderRadius: 2, margin: 5}} placeholder="Nome: " onChangeText={setNome}/>

        <TextInput style={{borderWidth: 1, padding: 5, borderRadius: 2, margin: 5}} placeholder="Idade: " onChangeText={setIdade}/>

        Sexo: <Picker style={{margin: 5}} selectedValue={sexo} onValueChange={ (itemValue, itemIndex) => setSexo(itemValue)}>

          <Picker.Item key={1} value={"Masculino"} label="Masculino" />
          <Picker.Item key={2} value={"Feminino"} label="Feminino" />

        </Picker>
        
        Escolaridade: <Picker style={{margin: 5}} selectedValue={escolaridade+1} onValueChange={ (itemValue, itemIndex) => setEscolaridade(itemValue) }
          >
          {escolaridadeItem}
        </Picker>

        Limite: 
        <Slider style={{margin: 5}}
          minimumValue={0}
          maximumValue={200}
          onValueChange={(value) => setValue(value)}
          value={value}
        />
        <Text> {value.toFixed(0)} </Text>

        Brasileiro: 
        <Switch style={{margin: 'auto'}}
          value={brazilian}
          onValueChange={ (valorSwitch) => setBrazilian(valorSwitch) }
        />

        <Pressable style={{margin: 10, padding: 10, borderRadius: 5, backgroundColor: '#2cb81b'}} onPress={getResultado}>
          <Text style={{color: '#ffffff', fontWeight: 'bold'}}>Confirmar</Text>
        </Pressable>


        {resultado}
      </ScrollView>
    </View>
  );
}

export default App;
