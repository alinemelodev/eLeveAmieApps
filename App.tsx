import React from 'react';

import {StatusBar} from 'react-native';

import {colors} from './src/styles/colors/colors';

import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/routes/Routes';

import {UserProvider} from './src/providers/UserContext';
import {MeditationProvider} from './src/providers/MeditationContext';

const App = (): React.JSX.Element => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.pink300} />
      <NavigationContainer>
        <UserProvider>
          <MeditationProvider>
            <Routes />
          </MeditationProvider>
        </UserProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
