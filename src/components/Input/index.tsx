import React, {useState} from 'react';

import {StyleSheet, TextInput, View} from 'react-native';

import {colors} from '../../styles/colors/colors';

import Texts from '../Texts';

interface IInputProps {
  placeholder?: string;
  value?: string;
  errorMessage?: string | null;
  onChangeText?: any;
  isError?: boolean;
}

const Input = ({
  placeholder,
  value,
  errorMessage,
  onChangeText,
  isError = false,
}: IInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          isFocused && styles.focusedInput,
          isError && styles.errorInput,
        ]}
        placeholderTextColor={colors.gray500}
        placeholder={isFocused ? '' : placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        
      />
      {isFocused && (
        <>
          {placeholder && isFocused && (
            <View
              style={styles.focusedLabelBox}>
              <Texts.CustomText text={placeholder} />
            </View>
          )}
        </>
      )}
      {isError && errorMessage && <Texts.CustomText text={errorMessage} color={colors.purple700}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 56,
    backgroundColor: colors.gray100,
    padding: 10,
    borderRadius: 5,
    borderColor: 'transparent',
    borderWidth: 1,
  },
  focusedInput: {
    backgroundColor: colors.white,
    borderColor: colors.pink300,
  },
  focusedLabelBox: {
    backgroundColor: colors.pink100,
    paddingHorizontal: 10,
    position: 'absolute',
    top: -10,
    left: 10,
    zIndex: 1,
  },
  errorInput: {
    borderColor: colors.purple700,
    borderWidth: 1,
  },
});

export default Input;
