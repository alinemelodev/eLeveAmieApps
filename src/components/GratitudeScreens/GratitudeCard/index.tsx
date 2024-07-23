import React from 'react';

import { View, StyleSheet, ViewStyle } from 'react-native';

import { colors } from '../../../styles/colors/colors';

import Buttons from '../../../components/Buttons';
import Texts from '../../../components/Texts';

import DotsIcon from '../../../images/svg/icons/ic_dots.svg';

interface GratitudeCardProps {
  text: string;
  style?: ViewStyle;
}

const GratitudeCard: React.FC<GratitudeCardProps> = ({ text, style }) => {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.textBox}>
        <Texts.ParagraphText text={text} />
      </View>
      <Buttons.IconButton icon={<DotsIcon width={30} height={30} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 10,
    paddingVertical: 20,
    borderRadius: 5,
    backgroundColor: colors.gray100,
  },
  textBox: {
    flex: 1,
    marginRight: 10,
  },
});

export default GratitudeCard;
