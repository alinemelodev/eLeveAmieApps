import React, {useState} from 'react';

import {View, StyleSheet, Keyboard} from 'react-native';

import {colors} from '../../../styles/colors/colors';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useUserContext} from '../../../providers/UserContext';
import {useGratitudeContext} from '../../../providers/GratitudeContext';

import MainLayout from '../../../styles/layouts/MainLayout';
import Buttons from '../../../components/Buttons';
import Texts from '../../../components/Texts';
import Input from '../../../components/Input';
import SubtitleBar from '../../../components/SubtitleBar';
import Modals from '../../../components/Modals';

import {infoTexts} from '../../../assets/texts/infoTexts';

const StoredInfoSettings = () => {
  const {setUsername} = useUserContext();
  const {clearGratitudeData} = useGratitudeContext();

  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    }
    Keyboard.dismiss();
  };

  const handleDeletePress = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleModalConfirm = () => {
    clearGratitudeData();
    handleModalClose();
  };

  return (
    <MainLayout logoHeader={true}>
      <SubtitleBar
        subtitle="Gerenciar informações"
        infoTitle={infoTexts.dataCleansing.title}
        infoText={infoTexts.dataCleansing.text}
      />
      <View style={styles.container}>
        <View style={{gap: 20}}>
          <Texts.CustomText
            text="Atualizar o seu nome de usuário"
            size={18}
            color={colors.purple700}
          />
          <Input
            onChangeText={handleInputChange}
            placeholder="Como gostaria de ser chamado?"
            errorMessage={error}
            isError={!!error}
          />
          <Buttons.PrimaryButton
            title="Salvar alteração"
            onPress={handlePress}
          />
        </View>
        <View style={{gap: 20}}>
          <Texts.CustomText
            text="Excluir todos os dados salvos no seu Diário de Gratidão"
            size={18}
            color={colors.purple700}
          />
          <Buttons.PrimaryButton title="Excluir" onPress={handleDeletePress} />
        </View>
      </View>
      <Modals.ConfirmDeletionModal
        visible={isModalVisible}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
        text="dos dados do seu Diário de Gratidão"
      />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    marginTop: 30,
  },
});

export default StoredInfoSettings;
