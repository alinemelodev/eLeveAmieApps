import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import {colors} from '../../../styles/colors/colors';
import {fonts} from '../../../styles/fonts/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: React.ReactNode;
  width?: number;
  textSize?: number;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const PrimaryButton = ({
  title,
  icon,
  width,
  textSize,
  type,
  loading,
  disabled,
  onPress,
  ...props
}: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderContent = () => (
    <>
      {loading ? (
        <ActivityIndicator color={colors.white} size={30}/>
      ) : (
        <>
          {icon ? (
            <View
              style={[
                styles.textIconBox,
                {justifyContent: icon ? 'space-between' : 'center'},
              ]}>
              <Text style={[styles.text, {fontSize: 18}]}>{title}</Text>
              {icon}
            </View>
          ) : (
            <Text style={[styles.text, {fontSize: textSize || 18}]}>{title}</Text>
          )}
        </>
      )}
    </>
  );

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: width || '100%',
          backgroundColor: disabled ? colors.gray500 : colors.pink500,
        },
      ]}
      onPress={handleOnPress}
      disabled={disabled || loading} 
    {...props}>
      {renderContent()}
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
    color: colors.white,
  },
  textIconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    width: '100%',
  },
});

export default PrimaryButton;
