import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import MainLayout from '../../../styles/layouts/MainLayout';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';

const StartMeditationScreen = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();

  return (
    <MainLayout titleHeader="Meditação">
      <PrimaryButton
        title="Ir para a meditação"
        onPress={() => navigation.navigate('MeditationPractice')}
      />
    </MainLayout>
  );
};

export default StartMeditationScreen;
