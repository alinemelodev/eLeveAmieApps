import React, {useEffect, useState} from 'react';

import {View, Text, StyleSheet} from 'react-native';

import {colors} from '../../../styles/colors/colors';
import {fonts} from '../../../styles/fonts/fonts';

interface CountdownTimerProps {
  initialTime: number;
  onTimeEnd?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialTime,
  onTimeEnd,
}) => {
  const [timer, setTimer] = useState(initialTime | 0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(prevTimer => prevTimer - 1);
      } else {
        clearInterval(timerInterval);
        if (onTimeEnd) onTimeEnd();
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timer]);

  const formattedTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>{formattedTime()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    paddingTop: 30,
  },
  timerText: {
    fontFamily: fonts.karla.medium,
    fontSize: 24,
    color: colors.gray500,
  },
});

export default CountdownTimer;
