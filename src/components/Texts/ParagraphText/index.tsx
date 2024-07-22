import React from 'react';

import {StyleSheet, Text, TextProps} from 'react-native';

import {fonts} from '../../../styles/fonts/fonts';
import {colors} from '../../../styles/colors/colors';

interface ParagraphTextProps extends TextProps {
  text: string;
  align?: 'left' | 'center' | 'right';
}

const ParagraphText: React.FC<ParagraphTextProps> = ({
  text,
  align = 'left',
}) => {
  return <Text style={[styles.text, {textAlign: align}]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.karla.regular,
    fontSize: 16,
    color: colors.gray500,
  },
});

export default ParagraphText;
