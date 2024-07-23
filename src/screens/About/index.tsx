import React from 'react';

import {View, StyleSheet, Share, ScrollView} from 'react-native';

import {colors} from '../../styles/colors/colors';

import MainLayout from '../../styles/layouts/MainLayout';
import Buttons from '../../components/Buttons';
import Texts from '../../components/Texts';

import ShareIcon from '../../images/svg/icons/ic_share.svg';
import FolderIcon from '../../images/svg/icons/ic_folder.svg';

const AboutScreen = () => {
  const message = 'Confira nosso aplicativo!';
  const url = 'https://play.google.com/store/apps/details?id=com.eleveamieapps';
  const shareContent = async () => {
    try {
      await Share.share({
        message: `${message}\n${url}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainLayout logoHeader={true}>
      <View style={styles.container}>
        <ScrollView>
          <View style={{gap: 40}}>
            <View style={{gap: 20}}>
              <Texts.CustomText
                text="Está gostando do e Leve?"
                size={20}
                color={colors.purple700}
              />
              <Texts.ParagraphText text="Compartilhe com um amigo e ajude o app a crescer" />
              <Texts.ParagraphText text="Gratidão!" />
              <Buttons.PrimaryButton
                title="Compartilhar"
                icon={<ShareIcon width={30} height={30} />}
                onPress={shareContent}
              />
            </View>

            <View style={{gap: 20}}>
              <Texts.CustomText
                text="Gereciar informações salvas no dispositivo"
                size={20}
                color={colors.purple700}
              />
              <Buttons.PrimaryButton
                title="Gerenciar"
                icon={<FolderIcon width={30} height={30} />}
                onPress={() => {}}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
  },
});

export default AboutScreen;
