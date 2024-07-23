import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import {colors} from '../../colors/colors';

interface LayoutProps {
  children: React.ReactNode;
}

const IntroLayou = ({children}: LayoutProps) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.pink100,
    padding: 20,
  },
});

export default IntroLayou;
