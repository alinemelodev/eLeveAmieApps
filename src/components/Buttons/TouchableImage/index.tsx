import React from 'react';

import {
  TouchableOpacityProps,
  StyleSheet,
  View,
} from 'react-native';

import {colors} from '../../../styles/colors/colors';

import {useNavigation, CommonActions} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import PrimaryButton from '../PrimaryButton';

import HooponoponoImage from '../../../images/svg/images/img_hooponopono.svg';
import MeditationImage from '../../../images/svg/images/img_meditaion.svg';
import GratitudeImage from '../../../images/svg/images/img_gratitude.svg';

interface TouchableImageProps extends TouchableOpacityProps {
  practice: 'hooponopono' | 'meditation' | 'gratitude';
}

const TouchableImage = ({practice}: TouchableImageProps) => {
  const stackNavigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();

  const renderImage = () => {
    switch (practice) {
      case 'hooponopono':
        return <HooponoponoImage width={'100%'} />;
      case 'meditation':
        return <MeditationImage width={'100%'} />;
      case 'gratitude':
        return <GratitudeImage width={'100%'} />;
      default:
        return null;
    }
  };

  const getPracticeName = () => {
    switch (practice) {
      case 'hooponopono':
        return "Ho'oponopono";
      case 'meditation':
        return 'Meditação';
      case 'gratitude':
        return 'Gratidão';
      default:
        return '';
    }
  };

  const handlePress = () => {
    switch (practice) {
      case 'hooponopono':
        stackNavigation.dispatch(
          CommonActions.navigate({
            name: 'TabHome',
            params: {screen: 'Ho oponopono'},
          }),
        );
        break;
      case 'meditation':
        stackNavigation.dispatch(
          CommonActions.navigate({
            name: 'TabHome',
            params: {screen: 'Meditação'},
          }),
        );
        break;
      case 'gratitude':
        stackNavigation.dispatch(
          CommonActions.navigate({
            name: 'TabHome',
            params: {screen: 'Gratidão'},
          }),
        );
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.imageContainer}>
      {renderImage()}
      <PrimaryButton
        title={getPracticeName()}
        textSize={24}
        textColor={colors.purple700}
        style={styles.button}
        onPress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 220,
    height: 50,
    backgroundColor: colors.pink100_alpha,
    paddingLeft: 15,
    justifyContent: 'center',
    position: 'absolute',
    left: 20,
    borderRadius: 5,
  },
  imageContainer: {
    width: '100%',
    height: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default TouchableImage;
