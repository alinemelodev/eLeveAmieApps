import React, {useState} from 'react';

import {Text, View, StyleSheet, Animated} from 'react-native';

import {colors} from '../../../styles/colors/colors';
import {fonts} from '../../../styles/fonts/fonts';

import {useMeditationContext} from '../../../providers/MeditationContext';

import MainLayout from '../../../styles/layouts/MainLayout';
import Components from '../../../components/MeditationScreens';
import Buttons from '../../../components/Buttons';

import StartIcon from '../../../images/svg/icons/ic_play.svg';
import SubtitleBar from '../../../components/SubtitleBar';

const MeditationPractice = () => {
  const {
    start,
    setStart,
    showBreathingCircle,
    setShowBreathingCircle,
    showEndMessage,
    setShowEndMessage,
    breathingCycleDuration,
    setBreathingCycleDuration,
    setSelectedTime,
    cleanStates,
  } = useMeditationContext();
  const [opacity] = useState(new Animated.Value(1));

  const startPractice = () => {
    setStart(true);
  };

  const showPracticeComponents = () => {
    setTimeout(() => {
      setStart(false);
      setShowBreathingCircle(true);
    }, 1000);
  };

  const handleTimeEnd = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setShowBreathingCircle(false);
      setBreathingCycleDuration(null);
      setSelectedTime(null);
      setShowEndMessage(true);
    });
  };

  return (
    <MainLayout titleHeader="Meditação">
      <SubtitleBar
        subtitle="Respiração em 4 tempos"
        additionalAction={cleanStates}
      />
      <View style={styles.content}>
        {!start && !showBreathingCircle && !showEndMessage ? (
          <Buttons.RoundButton
            icon={<StartIcon width={50} />}
            onPress={startPractice}
          />
        ) : (
          start &&
          !showBreathingCircle && (
            <Components.Countdown onComplete={showPracticeComponents} />
          )
        )}

        {showBreathingCircle && (
          <Animated.View style={[styles.animatedContainer, {opacity}]}>
            <Components.BreathingCircle />
            <Components.CountdownTimer
              initialTime={breathingCycleDuration!}
              onTimeEnd={handleTimeEnd}
            />
          </Animated.View>
        )}

        {showEndMessage && (
          <View style={styles.endMessageContainer}>
            <Text style={styles.endMessage}>A prática chegou ao fim.</Text>
            <Text style={styles.endMessage}>Bom trabalho!</Text>
          </View>
        )}
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  endMessageContainer: {
    paddingTop: 30,
  },
  endMessage: {
    fontFamily: fonts.karla.bold,
    fontSize: 24,
    color: colors.gray500,
  },
});

export default MeditationPractice;
