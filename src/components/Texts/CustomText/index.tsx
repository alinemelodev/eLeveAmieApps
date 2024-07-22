import React from 'react';

import {Text, TextProps} from 'react-native';

import {fonts} from '../../../styles/fonts/fonts';
import {colors} from '../../../styles/colors/colors';

interface CustomTextProps extends TextProps {
  text: string;
  family?: string;
  size?: number;
  color?: string;
  align?: 'left' | 'center' | 'right';
}

const CustomText: React.FC<CustomTextProps> = ({
  text,
  family = fonts.karla.regular,
  size = 16,
  color = colors.gray500,
  align = 'left',
  style,
}) => {
  return (
    <Text
      style={[
        {fontFamily: family, fontSize: size, color, textAlign: align},
        style,
      ]}>
      {text}
    </Text>
  );
};

export default CustomText;
