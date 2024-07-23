import React from 'react';

import {View, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import Buttons from '../../components/Buttons';
import Texts from '../../components/Texts';

import GobackIcon from '../../images/svg/icons/ic_go_back.svg';
import InfoIcon from '../../images/svg/icons/ic_info.svg';

interface SubtitleBarProps {
  subtitle: string;
  showBackButton?: boolean;
  additionalAction?: () => void;
}

const SubtitleBar: React.FC<SubtitleBarProps> = ({
  subtitle,
  showBackButton = true,
  additionalAction,
}) => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();

  const handleGoBack = () => {
    if (additionalAction) additionalAction();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {showBackButton && (
          <Buttons.IconButton
            icon={<GobackIcon width={30} height={30} />}
            onPress={handleGoBack}
          />
        )}
        <Texts.SubtitleText text={subtitle} />
      </View>
      <Buttons.IconButton icon={<InfoIcon width={30} height={30} />} />
    </View>
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
