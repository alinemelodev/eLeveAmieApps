import React from 'react';

import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const HelloScreen = () => {
  const stackNavigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();

  return (
    <SafeAreaView style={{height: '100%', width: '100%'}}>
      <Text>Tela Hello</Text>
      <Text>conteúdo</Text>

      <TouchableOpacity onPress={() => stackNavigation.navigate('TabHome')}>
        <Text>Ir para a Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HelloScreen;
