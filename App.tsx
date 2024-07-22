import React from 'react';

import {StatusBar} from 'react-native';

import {colors} from './src/styles/colors/colors';

import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/routes/Routes';

import {MeditationProvider} from './src/providers/MeditationContext';

const App = (): React.JSX.Element => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.pink300} />
      <NavigationContainer>
        <MeditationProvider>
          <Routes />
        </MeditationProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
