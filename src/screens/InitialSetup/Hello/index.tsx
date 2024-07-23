import React, {useState} from 'react';

import {StyleSheet, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {fonts} from '../../../styles/fonts/fonts';

import {useUserContext} from '../../../providers/UserContext';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import IntroLayou from '../../../styles/layouts/IntroLayou';
import Texts from '../../../components/Texts';
import Buttons from '../../../components/Buttons';
import Input from '../../../components/Input';

import Logo from '../../../images/svg/logo_symbol.svg';

const HelloScreen = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> = useNavigation();
  const { setUsername } = useUserContext();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (text: string) => {
    setInputValue(text);
    if (error) setError('');
  };

  const handlePress = async () => {
    if (!inputValue) {
      setError('Por favor, insira um nome de usuário');
    } else {
      setError('');
      await AsyncStorage.setItem('username', inputValue);
      setUsername(inputValue); 
      navigation.navigate('TabHome');
    }
  };

  return (
    <IntroLayou>
      <View style={styles.container}>
        <Logo width={100} height={100} />
        <Texts.CustomText text="Olá" size={22} family={fonts.karla.medium} />
        <Input
          onChangeText={handleInputChange}
          placeholder="Como gostaria de ser chamado?"
          errorMessage={error}
          isError={!!error}
        />
        <Buttons.PrimaryButton title="Enviar" onPress={handlePress} />
      </View>
    </IntroLayou>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
});

export default HelloScreen;