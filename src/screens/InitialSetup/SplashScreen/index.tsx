import React, {useEffect} from 'react';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import IntroLayout from '../../../styles/layouts/IntroLayou';

import Logo from '../../../images/svg/logo_symbol.svg';

const SplashScreen = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const username = await AsyncStorage.getItem('username');
        if (username) navigation.navigate('TabHome');
        else navigation.navigate('Hello');
      } catch (error) {
        console.error('Erro ao acessar o armazenamento: ', error);
      }
    };

    const timeout = setTimeout(() => {
      checkUser();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <IntroLayout>
      <Logo />
    </IntroLayout>
  );
};

export default SplashScreen;
