import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import {colors} from '../../../styles/colors/colors';
import {fonts} from '../../../styles/fonts/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  icon?: React.ReactNode;
  float?: boolean;
  onPress?: () => void;
}

const RoundButton = ({title, icon, onPress, float}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, float && styles.floatButton]}
      onPress={onPress}>
      {icon}
      {title && <Text style={styles.text}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: colors.green300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatButton: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  text: {
    fontFamily: fonts.karla.bold,
    color: colors.white,
    fontSize: 20
  },
});

export default RoundButton;
