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
import PrimaryButton from '../../Buttons/PrimaryButton';

interface ConfirmDeletionModalProps {
  visible: boolean;
  onClose: () => void;
  text?: string;
  onConfirm: () => void;
}

const ConfirmDeletionModal: React.FC<ConfirmDeletionModalProps> = ({
  visible,
  onClose,
  text = '',
  onConfirm,
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
                text={`Você confirma a exclusão${text && ' '}${text}?`}
                color={colors.purple700}
                size={20}
              />
              <Texts.ParagraphText text="Essa ação é irreversível" />
              <View style={{flexDirection: 'row', gap: 20}}>
                <View style={styles.buttonBox}>
                  <PrimaryButton title="Excluir" onPress={onConfirm} />
                </View>
                <View style={styles.buttonBox}>
                  <PrimaryButton title="Cancelar" onPress={onClose} />
                </View>
              </View>
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
    height: 210,
    backgroundColor: colors.pink100,
    borderRadius: 10,
    padding: 20,
    gap: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    gap: 20,
  },
  buttonBox: {
    flex: 1,
  },
});

export default ConfirmDeletionModal;
