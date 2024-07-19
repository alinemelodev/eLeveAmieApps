import React from 'react';

import {Text} from 'react-native';

import MainLayout from '../../styles/layouts/MainLayout';

const HomeScreen = () => {
  return (
    <MainLayout logoHeader={true}>
      <Text>Home</Text>
    </MainLayout>
  );
};

export default HomeScreen;
