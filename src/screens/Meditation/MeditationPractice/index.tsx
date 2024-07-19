import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Animated,
} from 'react-native';

import {colors} from '../../../styles/colors/colors';
import {fonts} from '../../../styles/fonts/fonts';

import BreathingCircle from '../../../components/MeditationScreens/BreathingCircle';
import CountdownTimer from '../../../components/MeditationScreens/CountdownTimer';
import Countdown from '../../../components/MeditationScreens/Countdown';

import StartIcon from '../../../images/svg/icons/ic_play.svg';

const MeditationPractice = () => {
  const [start, setStart] = useState(false);
  const [showBreathingCircle, setShowBreathingCircle] = useState(false);
  const [showEndMessage, setShowEndMessage] = useState(false);
  const [breathingCycleDuration, setBreathingCycleDuration] = useState(20);
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
      setShowEndMessage(true);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tela Prática de Meditação</Text>

      <View style={styles.content}>
        {!start && !showBreathingCircle && !showEndMessage ? (
          <TouchableOpacity style={styles.startButton} onPress={startPractice}>
            <StartIcon width={50} />
          </TouchableOpacity>
        ) : (
          start &&
          !showBreathingCircle && (
            <Countdown onComplete={showPracticeComponents} />
          )
        )}

        {showBreathingCircle && (
          <Animated.View style={[styles.animatedContainer, {opacity}]}>
            <BreathingCircle />
            <CountdownTimer
              initialTime={breathingCycleDuration}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.pink100,
  },
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
  startButton: {
    backgroundColor: colors.green300,
    width: 100,
    height: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
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
