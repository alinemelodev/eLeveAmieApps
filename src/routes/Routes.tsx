import React from 'react';

import {colors} from '../styles/colors/colors';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LotusIconActive from '../images/svg/navigationIcons/ic_lotus_active.svg';
import LotusIconInactive from '../images/svg/navigationIcons/ic_lotus_inactive.svg';

import HooponoponoIconActive from '../images/svg/navigationIcons/ic_praying_beads_active.svg';
import HooponoponoIconInactive from '../images/svg/navigationIcons/ic_praying_beads_inactive.svg';

import MeditationIconActive from '../images/svg/navigationIcons/ic_guru_active.svg';
import MeditationIconInactive from '../images/svg/navigationIcons/ic_guru_inactive.svg';

import GratitudeIconActive from '../images/svg/navigationIcons/ic_journal_active.svg';
import GratitudeIconInactive from '../images/svg/navigationIcons/ic_journal_inactive.svg';

import LogoIcon from '../images/svg/navigationIcons/ic_logo.svg';

import SplashScreen from '../screens/InitialSetup/SplashScreen';
import HelloScreen from '../screens/InitialSetup/Hello';
import HomeScreen from '../screens/Home';
import HooponoponoScreen from '../screens/Hooponopono';
import AboutScreen from '../screens/About';
import StartMeditationScreen from '../screens/Meditation/StartMeditaion';
import MeditaionPraticeScreen from '../screens/Meditation/MeditationPraticeScreen';
import GratitudeDiaryScreen from '../screens/Gratitude/GratitudeDiary';
import AddGratitudeScreen from '../screens/Gratitude/AddGratitude';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MenuTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 11,
          color: colors.gray500,
        },
        tabBarIcon: ({focused}) => {
          let icon;
          if (route.name === 'Home') {
            icon = focused ? (
              <LotusIconActive width={30} />
            ) : (
              <LotusIconInactive width={30} />
            );
          } else if (route.name === 'Ho oponopono') {
            icon = focused ? (
              <HooponoponoIconActive width={30} />
            ) : (
              <HooponoponoIconInactive width={30} />
            );
          } else if (route.name === 'e Leve') {
            icon = focused ? (
              <LogoIcon width={30} height={30} />
            ) : (
              <LogoIcon width={30} height={30} />
            );
          } else if (route.name === 'Meditação') {
            icon = focused ? (
              <MeditationIconActive width={30} />
            ) : (
              <MeditationIconInactive width={30} />
            );
          } else if (route.name === 'Gratidão') {
            icon = focused ? (
              <GratitudeIconActive width={30} />
            ) : (
              <GratitudeIconInactive width={30} />
            );
          }
          return icon;
        },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 1,
          borderColor: colors.gray100,
          backgroundColor: colors.white,
          paddingBottom: 10,
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Ho oponopono" component={HooponoponoScreen} />
      <Tab.Screen name="e Leve" component={AboutScreen} />
      <Tab.Screen name="Meditação" component={StartMeditationScreen} />
      <Tab.Screen name="Gratidão" component={GratitudeDiaryScreen} />
    </Tab.Navigator>
  );
};

export const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Hello" component={HelloScreen} />

      <Stack.Screen name="TabHome" component={MenuTabs} />
      <Stack.Screen name="MeditationPratice" component={MeditaionPraticeScreen} />
      <Stack.Screen name="AddGratitude" component={AddGratitudeScreen} />
    </Stack.Navigator>
  );
};
