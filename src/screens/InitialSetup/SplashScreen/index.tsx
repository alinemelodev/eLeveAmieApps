import React, {useEffect} from 'react';

import {SafeAreaView} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import Logo from '../../../images/svg/logo_symbol.svg';

const SplashScreen = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Hello');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Logo />
    </SafeAreaView>
  );
};

export default SplashScreen;
