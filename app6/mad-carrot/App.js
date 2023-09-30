import { SafeAreaView, View, Text, Image, StyleSheet, TextInput, Button} from 'react-native';

function AppMyPerfil(){ 
  let img = 'https://pm1.aminoapps.com/6566/0791f432a62d358fc985c5ba413f8b7638609383_00.jpg';
  let prop1 = 'Dados pessoais:'
  let prop2 = 'Formação:'
  let prop3 = 'Experiências:'
  let prop4 = 'Projetos:'
  function aleatorio(){
    
  }
  return(
    <View>
      <Text style={{color: '#0d0d0d', fontSize: 20, textAlign: 'center', padding: '20px'}}>
        Número aleatório
      </Text>

      <Image
        source={{uri: img}}
        style={{width: 200, height: 200, margin: 'auto'}}
      />

      <Text style={{fontSize: 15, margin: 15}}>{prop1}</Text>
      <Text style={{textAlign: 'center'}}>Pense em um número de 0 a 10</Text>
      <Text style={{textAlign: 'center', padding: 20}}>?</Text>
      <Button style={{padding: 10}} title="Verificar" onPress={aleatorio} />
    </View>
    // JSX é a programação em react native (JS com XML)
  )
}

export default AppMyPerfil;
