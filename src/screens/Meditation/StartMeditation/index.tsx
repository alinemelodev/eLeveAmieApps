import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

import { useNavigation } from "@react-navigation/native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const StartMeditationScreen = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> = useNavigation();
  return (
    <SafeAreaView style={{height: '100%', width: '100%'}}>
      <Text>Tela Iniciar meditação</Text>
      <Text>conteúdo</Text>

      <TouchableOpacity onPress={() => navigation.navigate('MeditationPractice')}><Text>Iniciar a meditação</Text></TouchableOpacity>
    </SafeAreaView>
  );
};

export default StartMeditationScreen;
