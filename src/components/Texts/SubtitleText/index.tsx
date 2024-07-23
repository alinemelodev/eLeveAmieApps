import React from 'react';

import {StyleSheet, Text, TextProps} from 'react-native';

import {fonts} from '../../../styles/fonts/fonts';
import {colors} from '../../../styles/colors/colors';

interface SubtitleTextProps extends TextProps {
  text: string;
}

const SubtitleText: React.FC<SubtitleTextProps> = ({text, style}) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.karla.medium,
    fontSize: 20,
    color: colors.pink500,
    textAlign: 'left',
  },
});

export default SubtitleText;
