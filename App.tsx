import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import IconTeste from './src/images/svg/logo_symbol.svg';
import { colors } from './src/styles/colors/colors';
import { fonts } from './src/styles/fonts/fonts';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView
      style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.pink300} />
      <IconTeste />
      <Text style={{fontFamily: fonts.karla.bold, fontSize: 50}}>e Leve</Text>
    </SafeAreaView>
  );
};

export default App;
