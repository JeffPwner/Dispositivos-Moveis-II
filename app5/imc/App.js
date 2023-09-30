import { View, Text } from 'react-native';
import IMC from './IMC/index'

function App() {
  return (
    <View>
      <Text style={{fontSize: 25, textAlign: 'center'}}>Cálculo do IMC</Text>
      <img src="https://static.wixstatic.com/media/e406d2_6ac039aebdf64ad69ce8c8eb9c79c8fd~mv2.jpg/v1/fill/w_1000,h_569,al_c,q_85,usm_0.66_1.00_0.01/e406d2_6ac039aebdf64ad69ce8c8eb9c79c8fd~mv2.jpg" alt="Imagem representando o cálculo de índice de massa corporal"></img>
      <IMC></IMC>
    </View>
  );
}

export default App;
