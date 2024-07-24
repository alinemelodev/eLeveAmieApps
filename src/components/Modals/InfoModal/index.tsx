import React from 'react';

import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import {colors} from '../../../styles/colors/colors';
import {fonts} from '../../../styles/fonts/fonts';

import Texts from '../../Texts';

interface InfoModalProps {
  visible: boolean;
  onClose: () => void;
  infoTitle?: string;
  infoText?: string;
}

const InfoModal: React.FC<InfoModalProps> = ({
  visible,
  onClose,
  infoTitle = '',
  infoText = '',
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalWrapper}>
          <View style={styles.returnContainer}>
            <Texts.CustomText
              text="Retornar"
              color={colors.white}
              size={20}
              family={fonts.karla.medium}
              style={styles.returnText}
            />
          </View>
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <Texts.CustomText
                text={infoTitle}
                color={colors.purple700}
                size={20}
              />
              <Texts.CustomText text={infoText} />
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.purple700_alpha,
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  modalWrapper: {
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  returnContainer: {
    width: '100%',
    paddingLeft: 20,
    paddingBottom: 10,
  },
  returnText: {
    alignSelf: 'flex-start',
  },
  modalContent: {
    width: '100%',
    maxHeight: 400,
    backgroundColor: colors.pink100,
    borderRadius: 10,
    padding: 20,
    gap: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    gap: 20,
  },
});

export default InfoModal;
