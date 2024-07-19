import React from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';

import Header from '../../../components/Header';
import {colors} from '../../colors/colors';

interface LayoutProps {
  children: React.ReactNode;
  titleHeader?: string;
  logoHeader?: boolean;
}

const MainLayout = ({children, titleHeader, logoHeader}: LayoutProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={titleHeader} logo={logoHeader} />
      <View style={styles.contentBox}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.pink300,
  },
  contentBox: {
    flex: 1,
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: colors.white,
    overflow: 'hidden',
    padding: 20,
  },
});

export default MainLayout;
