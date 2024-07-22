import React, { useEffect } from 'react';

import { Animated, Dimensions, StyleSheet, View } from 'react-native';

import { colors } from '../../styles/colors/colors';

interface ConferttiAnimationProps {
    showConfetti: boolean;
}

const ConfettiAnimation = ({ showConfetti }: ConferttiAnimationProps) => {
  const confettiAnimations = Array.from({ length: 100 }).map(
    () => new Animated.Value(0),
  );

  useEffect(() => {
    if (showConfetti) {
      confettiAnimations.forEach((animation, index) => {
        Animated.timing(animation, {
          toValue: Dimensions.get('window').height,
          duration: 1500 + index * 50,
          useNativeDriver: true,
        }).start();
      });
    }
  }, [showConfetti]);

  const confettiColors = [
    colors.pink500,
    colors.pink300,
    colors.green300,
  ];

  return (
    <View style={StyleSheet.absoluteFill}>
      {showConfetti &&
        confettiAnimations.map((animation, index) => (
          <Animated.View
            key={index}
            style={[
              styles.confetti,
              {
                backgroundColor: confettiColors[index % confettiColors.length],
                transform: [{ translateY: animation }],
                left: Math.random() * Dimensions.get('window').width,
              },
            ]}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  confetti: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    top: -10,
  },
});

export default ConfettiAnimation;
