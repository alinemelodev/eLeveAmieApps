import React from 'react';

import {ScrollView, View} from 'react-native';

import {colors} from '../../styles/colors/colors';
import {fonts} from '../../styles/fonts/fonts';

import MainLayout from '../../styles/layouts/MainLayout';
import CustomText from '../../components/Texts/CustomText';
import TouchableImage from '../../components/Buttons/TouchableImage';

const HomeScreen = () => {
  return (
    <MainLayout logoHeader={true}>
      <ScrollView style={{paddingVertical: 20}}>
        <View style={{gap: 20}}>
          <CustomText
            text="Boa noite, Aline!"
            color={colors.purple700}
            size={20}
            family={fonts.karla.medium}
          />
          <CustomText text="Que bom te ver por aqui :)" />
          <CustomText text="Escolha uma prática e eleve o seu tempo com você." />
          <TouchableImage practice="hooponopono" />
          <TouchableImage practice="meditation" />
          <TouchableImage practice="gratitude" />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default HomeScreen;
