import React, {useState} from 'react';

import {View, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import Buttons from '../../components/Buttons';
import Texts from '../../components/Texts';
import Modals from '../../components/Modals/index';

import GobackIcon from '../../images/svg/icons/ic_go_back.svg';
import InfoIcon from '../../images/svg/icons/ic_info.svg';

interface SubtitleBarProps {
  subtitle?: string;
  showBackButton?: boolean;
  additionalAction?: () => void;
  infoTitle?: string;
  infoText?: string;
}

const SubtitleBar: React.FC<SubtitleBarProps> = ({
  subtitle,
  showBackButton = true,
  additionalAction,
  infoTitle,
  infoText,
}) => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleGoBack = () => {
    if (additionalAction) additionalAction();
    navigation.goBack();
  };

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {showBackButton && (
            <Buttons.IconButton
              icon={<GobackIcon width={30} height={30} />}
              onPress={handleGoBack}
            />
          )}
          {subtitle && <Texts.SubtitleText text={subtitle} />}
        </View>
        <Buttons.IconButton
          icon={<InfoIcon width={30} height={30} />}
          onPress={handleOpenModal}
        />
      </View>

      <Modals.InfoModal
        visible={modalVisible}
        onClose={handleCloseModal}
        infoTitle={infoTitle}
        infoText={infoText}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
});

export default SubtitleBar;
