import React, {useState} from 'react';

import {Keyboard, ScrollView, StyleSheet, TextInput, View} from 'react-native';

import {useGratitudeContext} from '../../../providers/GratitudeContext';

import MainLayout from '../../../styles/layouts/MainLayout';
import SubtitleBar from '../../../components/SubtitleBar';
import Buttons from '../../../components/Buttons';

const AddGratitudeScreen = () => {
  const {addGratitude} = useGratitudeContext();
  const [gratitudeText, setGratitudeText] = useState('');

  const handleSave = () => {
    if (gratitudeText.trim()) {
      addGratitude(gratitudeText);
      setGratitudeText('');
      Keyboard.dismiss();
    }
  };

  return (
    <MainLayout titleHeader="Gratidão">
      <SubtitleBar subtitle="Pelo que sente gratidão hoje?" />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <TextInput
            placeholder="Toque aqui e digite sua mensagem de gratidão..."
            multiline={true}
            textAlignVertical="top"
            style={{flex: 1}}
            value={gratitudeText}
            onChangeText={setGratitudeText}
          />
        </ScrollView>
        <View style={{alignSelf: 'flex-end'}}>
          <Buttons.PrimaryButton
            title="Salvar"
            width={100}
            onPress={handleSave}
          />
        </View>
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
  },
});

export default AddGratitudeScreen;
