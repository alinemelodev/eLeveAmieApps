import React from 'react';

import {colors} from '../styles/colors/colors';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import screens from '../screens';

import LotusIconActive from '../images/svg/navigationIcons/ic_lotus_active.svg';
import LotusIconInactive from '../images/svg/navigationIcons/ic_lotus_inactive.svg';

import HooponoponoIconActive from '../images/svg/navigationIcons/ic_praying_beads_active.svg';
import HooponoponoIconInactive from '../images/svg/navigationIcons/ic_praying_beads_inactive.svg';

import MeditationIconActive from '../images/svg/navigationIcons/ic_guru_active.svg';
import MeditationIconInactive from '../images/svg/navigationIcons/ic_guru_inactive.svg';

import GratitudeIconActive from '../images/svg/navigationIcons/ic_journal_active.svg';
import GratitudeIconInactive from '../images/svg/navigationIcons/ic_journal_inactive.svg';

import LogoIcon from '../images/svg/navigationIcons/ic_logo.svg';

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
              <LotusIconActive width={33} />
            ) : (
              <LotusIconInactive width={33} />
            );
          } else if (route.name === 'Ho oponopono') {
            icon = focused ? (
              <HooponoponoIconActive width={33} />
            ) : (
              <HooponoponoIconInactive width={33} />
            );
          } else if (route.name === 'e Leve') {
            icon = focused ? (
              <LogoIcon width={33} height={33} />
            ) : (
              <LogoIcon width={33} height={33} />
            );
          } else if (route.name === 'Meditação') {
            icon = focused ? (
              <MeditationIconActive width={33} />
            ) : (
              <MeditationIconInactive width={33} />
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
      <Tab.Screen name="Home" component={screens.HomeScreen} />
      <Tab.Screen name="Ho oponopono" component={screens.HooponoponoScreen} />
      <Tab.Screen name="e Leve" component={screens.AboutScreen} />
      <Tab.Screen name="Meditação" component={screens.StartMeditationScreen} />
      <Tab.Screen name="Gratidão" component={screens.GratitudeDiaryScreen} />
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
      <Stack.Screen name="SplashScreen" component={screens.SplashScreen} />
      <Stack.Screen name="Hello" component={screens.HelloScreen} />

      <Stack.Screen name="TabHome" component={MenuTabs} />
      <Stack.Screen
        name="MeditationPractice"
        component={screens.MeditaionPracticeScreen}
      />
      <Stack.Screen
        name="AddGratitude"
        component={screens.AddGratitudeScreen}
      />
    </Stack.Navigator>
  );
};
