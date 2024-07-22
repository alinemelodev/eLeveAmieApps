import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import {colors} from '../../../styles/colors/colors';
import {fonts} from '../../../styles/fonts/fonts';

interface SelectableButtonProps extends TouchableOpacityProps {
  title: string | number;
  selected?: boolean;
  onPress?: () => void;
}

const SelectableButton = ({
  title,
  selected = false,
  onPress,
  ...props
}: SelectableButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: selected ? colors.pink500 : colors.pink100,
          borderWidth: 1,
          borderColor: colors.pink500,
        },
      ]}
      onPress={onPress}
      {...props}>
      <Text
        style={[
          styles.text,
          {color: selected ? colors.white : colors.pink500},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: fonts.karla.bold,
    fontSize: 18,
  },
});

export default SelectableButton;
