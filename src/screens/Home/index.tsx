import React, {useEffect} from 'react';

import {ScrollView, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {colors} from '../../styles/colors/colors';
import {fonts} from '../../styles/fonts/fonts';

import {useUserContext} from '../../providers/UserContext';

import MainLayout from '../../styles/layouts/MainLayout';
import CustomText from '../../components/Texts/CustomText';
import TouchableImage from '../../components/Buttons/TouchableImage';

const HomeScreen = () => {
  const {username, setUsername, getGreeting} = useUserContext();

  useEffect(() => {
    const loadUsername = async () => {
      const storedUsername = await AsyncStorage.getItem('username');
      if (storedUsername) setUsername(storedUsername);
    };
    loadUsername();
  }, []);

  return (
    <MainLayout logoHeader={true}>
      <ScrollView style={{paddingVertical: 20}}>
        <View style={{gap: 20}}>
          <CustomText
            text={`${getGreeting()}, ${username}!`}
            color={colors.purple700}
            size={20}
            family={fonts.karla.medium}
          />
          <CustomText text="Que bom te ver por aqui :)" />
          <CustomText text="Eleve-se e sinta-se leve com cada prática." />
          <TouchableImage practice="hooponopono" />
          <TouchableImage practice="meditation" />
          <TouchableImage practice="gratitude" />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default HomeScreen;
