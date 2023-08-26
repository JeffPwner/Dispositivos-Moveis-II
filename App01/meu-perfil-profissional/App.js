import React from 'react';
import { View, Text, Image} from 'react-native';

function App(){
      let img = 'https://media.licdn.com/dms/image/D4D03AQGGizfyK4hfAg/profile-displayphoto-shrink_800_800/0/1673400273955?e=2147483647&v=beta&t=Tc272xcFZkQAIEPQQZVvdCw5qUWyH7b3a5c-PUABoCs';
      let dados = 'Meu nome é Everson, tenho 20 anos e atualmente moro em Cubatão. Gosto muito de tecnologia desdo criança, por isso, decidi seguir a área independente do setor. Hoje estou atuando como Analista de Suporte na Eval Sistemas, porém, pretendo migrar para desenvolvimento ou segurança da informação.';
      let formacao = 'Sou formado em Logística pela Etec de Cubatão, em inglês pela H2O, atualmente estou cursando Sistemas para Internet na Fatec.';
      let exp = 'Tenho experiência em projetos próprios criados no curso de Logística, além de 1 ano de experiência como Analista de Suporte';
      let proj = 'MedsHelp, SoftTI, AuraTrip';
      
  return(

    <View>
      <Image source={{uri: img}} style={{width: 250, height: 250, margin: 25}}/>
      
      <Text style={{fontSize:16, fontWeight: 'bold', margin: 10}}>Dados Pessoais</Text>
      <Text style={{fontSize: 14, margin: 15, textAlign: 'justify'}}>{dados}</Text>
      
      <Text style={{fontSize:16, fontWeight: 'bold', margin: 10}}>Formação</Text>
      <Text style={{fontSize: 14, margin: 15, textAlign: 'justify'}}>{formacao}</Text>
      
      <Text style={{fontSize:16, fontWeight: 'bold', margin: 10}}>Experiência</Text>
      <Text style={{fontSize: 14, margin: 15, textAlign: 'justify'}}>{exp}</Text>
      
      <Text style={{fontSize:16, fontWeight: 'bold', margin: 10}}>Projetos</Text>
      <Text style={{fontSize: 14, margin: 15, textAlign: 'justify'}}>{proj}</Text>

    </View>
  )
}


export default App;