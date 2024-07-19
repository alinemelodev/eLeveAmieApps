import React from 'react';

import {ScrollView, StyleSheet} from 'react-native';

import MainLayout from '../../styles/layouts/MainLayout';
import CustomText from '../../components/CustomText';

import {colors} from '../../styles/colors/colors';
import {fonts} from '../../styles/fonts/fonts';

const HomeScreen = () => {
  return (
    <MainLayout logoHeader={true}>
      <ScrollView style={{gap: 20}}>  
        <CustomText
          text="Boa noite, Aline!"
          color={colors.purple700}
          size={20}
          family={fonts.karla.medium}
          style={styles.text}
        />
        <CustomText text="Que bom te ver por aqui :)" style={styles.text} />
        <CustomText text="Escolha uma prática e eleve o seu tempo com você." style={styles.text} />
      </ScrollView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 20,
  },
});

export default HomeScreen;
