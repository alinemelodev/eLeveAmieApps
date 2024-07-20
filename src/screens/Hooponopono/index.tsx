import React, {useState, useEffect} from 'react';

import {View, StyleSheet, Animated, Dimensions} from 'react-native';

import {fonts} from '../../styles/fonts/fonts';
import {colors} from '../../styles/colors/colors';

import MainLayout from '../../styles/layouts/MainLayout';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import CustomText from '../../components/CustomText';
import RoundButton from '../../components/Buttons/RoundButton';
import IconButton from '../../components/Buttons/IconButton';

import PrayingBeadsImage from '../../images/svg/icons/ic_praying_beads_page.svg';
import InfoIcon from '../../images/svg/icons/ic_info.svg';

const HooponoponoScreen = () => {
  const [count, setCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiAnimations = Array.from({length: 100}).map(
    () => new Animated.Value(0),
  );

  const handleCount = () => {
    if (count < 108) setCount(count + 1);
    if (count === 107) setShowConfetti(true);
  };

  const clearCount = () => {
    setCount(0);
    setShowConfetti(false);
  };

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
    <MainLayout titleHeader={"Ho'oponopono"}>
      <View style={styles.topButtons}>
        <IconButton icon={<InfoIcon width={30} height={30} />} />
        {count !== 108 && <RoundButton title="zerar" onPress={clearCount} />}
      </View>
      <View style={styles.container}>
        <PrayingBeadsImage width={80} />
        <View style={styles.textContainer}>
          {count !== 108 ? (
            <>
              <CustomText
                text="Sinto muito"
                family={fonts.karla.medium}
                color={colors.purple700}
                size={24}
                align="center"
              />
              <CustomText
                text="Me perdoe"
                family={fonts.karla.medium}
                color={colors.purple700}
                size={24}
                align="center"
              />
              <CustomText
                text="Sou grato(a)"
                family={fonts.karla.medium}
                color={colors.purple700}
                size={24}
                align="center"
              />
              <CustomText
                text="Eu te amo"
                family={fonts.karla.medium}
                color={colors.purple700}
                size={24}
                align="center"
              />
            </>
          ) : (
            <>
              <CustomText
                text="A prática chegou ao fim."
                family={fonts.karla.medium}
                color={colors.purple700}
                size={24}
                align="center"
              />
              <CustomText
                text="Bom trabalho!"
                family={fonts.karla.medium}
                color={colors.purple700}
                size={24}
                align="center"
              />
            </>
          )}
        </View>
        {count !== 108 ? (
          <PrimaryButton
            title={count.toString()}
            onPress={handleCount}
            textSize={40}
          />
        ) : (
          <PrimaryButton title="Reiniciar" onPress={clearCount} textSize={24} />
        )}
      </View>
      {showConfetti &&
        confettiAnimations.map((animation, index) => (
          <Animated.View
            key={index}
            style={[
              styles.confetti,
              {
                backgroundColor: confettiColors[index % confettiColors.length],
                transform: [{translateY: animation}],
                left: Math.random() * Dimensions.get('window').width,
              },
            ]}
          />
        ))}
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  topButtons: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  confetti: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    top: -10,
  },
});

export default HooponoponoScreen;
