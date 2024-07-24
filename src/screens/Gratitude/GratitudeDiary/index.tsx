import React, {useEffect} from 'react';

import {ScrollView, StyleSheet, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useGratitudeContext} from '../../../providers/GratitudeContext';

import MainLayout from '../../../styles/layouts/MainLayout';
import SubtitleBar from '../../../components/SubtitleBar';
import Buttons from '../../../components/Buttons';
import Components from '../../../components/GratitudeScreens';
import Texts from '../../../components/Texts';

import PlusIcon from '../../../images/svg/icons/ic_plus_math.svg';
import {colors} from '../../../styles/colors/colors';

const GratitudeDiaryScreen = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  const {gratitudes, setGratitudes} = useGratitudeContext();

  const sortedDates = Object.keys(gratitudes).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime(),
  );

  const hasGratitudes = () => {
    return sortedDates.some(date => gratitudes[date].length > 0);
  };

  useEffect(() => {
    const loadGratitudes = async () => {
      try {
        const storedGratitudes = await AsyncStorage.getItem('gratitudes');
        if (storedGratitudes) setGratitudes(JSON.parse(storedGratitudes));
      } catch (error) {
        console.error('Failed to load gratitudes from storage:', error);
      }
    };

    loadGratitudes();
  }, []);
  return (
    <MainLayout titleHeader="Gratidão">
      <SubtitleBar subtitle="Diário de Gratidão" />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.content}>
            {!hasGratitudes() && (
              <>
                <Texts.CustomText
                  text="Nenhuma gratidão registrada ainda"
                  size={18}
                  color={colors.purple700}
                />
                <Texts.CustomText text='Comece a sua jornada de gratidão hoje! Refletir sobre as pequenas coisas pelas quais somos gratos pode trazer mais alegria e positividade para o nosso dia a dia. Toque no botão "+" para adicionar sua primeira mensagem de gratidão.' />
              </>
            )}
            {sortedDates.map(date => (
              <View key={date} style={{gap: 10}}>
                <Texts.CustomText text={date} />
                {gratitudes[date].map((gratitude, index) => (
                  <Components.GratitudeCard key={index} text={gratitude} />
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.floatingButton}>
        <Buttons.RoundButton
          icon={<PlusIcon width={50} height={50} />}
          float
          onPress={() => navigation.navigate('AddGratitude')}
        />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  content: {
    flex: 1,
    gap: 10,
  },
  floatingButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
});

export default GratitudeDiaryScreen;
