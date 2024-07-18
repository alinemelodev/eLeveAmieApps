import React, {useEffect, useRef, useState} from 'react';

import {View, Animated, Easing, StyleSheet, Text} from 'react-native';

import {colors} from '../../styles/colors/colors';
import { fonts } from '../../styles/fonts/fonts';

const BreathingCircle: React.FC = () => {
  const radius = useRef(new Animated.Value(50)).current;

  const breatheIn = Animated.timing(radius, {
    toValue: 125,
    duration: 4000,
    easing: Easing.inOut(Easing.ease),
    useNativeDriver: false,
  });

  const breatheOut = Animated.timing(radius, {
    toValue: 50,
    duration: 4000,
    easing: Easing.inOut(Easing.ease),
    useNativeDriver: false,
  });

  const pause = Animated.delay(4000);

  const loop = Animated.loop(
    Animated.sequence([breatheIn, pause, breatheOut, pause]),
  );

  useEffect(() => {
    loop.start();
    return () => loop.stop();
  }, []);

  return (
    <View>
      <View style={styles.outerCircle}>
        <Animated.View
          style={[
            styles.innerCircle,
            {
              width: radius.interpolate({
                inputRange: [50, 125],
                outputRange: [100, 250],
              }),
              height: radius.interpolate({
                inputRange: [50, 125],
                outputRange: [100, 250],
              }),
              borderRadius: radius.interpolate({
                inputRange: [50, 125],
                outputRange: [50, 125],
              }),
            },
          ]}
        />
        <BreathingText />
      </View>
    </View>
  );
};

const BreathingText: React.FC = () => {
  const [text, setText] = useState('Puxe o ar');

  useEffect(() => {
    const textAnimations = [
      {text: 'Puxe o ar', duration: 4000},
      {text: 'Segure', duration: 4000},
      {text: 'Solte o ar', duration: 4000},
      {text: 'Segure', duration: 4000},
    ];

    let index = 0;
    const animateText = () => {
      setText(textAnimations[index].text);
      setTimeout(() => {
        index = (index + 1) % textAnimations.length;
        animateText();
      }, textAnimations[index].duration);
    };

    animateText();

    return () => {};
  }, []);

  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  outerCircle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: colors.green300,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  innerCircle: {
    backgroundColor: colors.pink300,
    position: 'absolute',
    zIndex: 1,
  },
  textContainer: {
    position: 'absolute',
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    fontFamily: fonts.karla.medium,
    fontSize: 30,
    color: colors.white,
  },
});

export default BreathingCircle;
