import React from 'react';

import {View, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useMeditationContext} from '../../../providers/MeditationContext';

import MainLayout from '../../../styles/layouts/MainLayout';
import SubtitleBar from '../../../components/SubtitleBar';
import SelectableButton from '../../../components/Buttons/SelectableButton';
import Buttons from '../../../components/Buttons';
import Texts from '../../../components/Texts';

const StartMeditationScreen = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  const {
    selectedTime,
    setSelectedTime,
    setBreathingCycleDuration,
    cleanStates,
  } = useMeditationContext();

  const handleSelectTime = (timeInMinutes: number) => {
    const timeInSeconds = timeInMinutes * 60;

    if (selectedTime === timeInSeconds) {
      setSelectedTime(null);
      setBreathingCycleDuration(null);
    } else {
      setSelectedTime(timeInSeconds);
      setBreathingCycleDuration(timeInSeconds);
    }
  };

  return (
    <MainLayout titleHeader="Meditação">
      <View style={{gap: 30}}>
        <SubtitleBar
          subtitle="Respiração em 4 tempos"
          showBackButton={false}
          additionalAction={cleanStates}
        />

        <Texts.ParagraphText text="Escolha o tempo de duração da sua prática" />

        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <SelectableButton
              title="3 min"
              selected={selectedTime === 180}
              onPress={() => handleSelectTime(3)}
            />
          </View>
          <View style={styles.button}>
            <SelectableButton
              title="5 min"
              selected={selectedTime === 300}
              onPress={() => handleSelectTime(5)}
            />
          </View>
          <View style={styles.button}>
            <SelectableButton
              title="10 min"
              selected={selectedTime === 600}
              onPress={() => handleSelectTime(10)}
            />
          </View>
        </View>

        <Texts.ParagraphText text="Quando estiver preparado pressione o botão iniciar." />
        <Texts.ParagraphText text="Boa prática :)" />

        {selectedTime && (
          <Buttons.PrimaryButton
            title="Ir para a meditação"
            onPress={() => navigation.navigate('MeditationPractice')}
          />
        )}
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    flex: 1,
  },
});

export default StartMeditationScreen;
