import React, {useState} from 'react';

import {View, StyleSheet} from 'react-native';

import {fonts} from '../../styles/fonts/fonts';
import {colors} from '../../styles/colors/colors';

import MainLayout from '../../styles/layouts/MainLayout';
import Buttons from '../../components/Buttons';
import Texts from '../../components/Texts';
import Components from '../../components/HooponoponoScreen';
import SubtitleBar from '../../components/SubtitleBar';

import PrayingBeadsImage from '../../images/svg/icons/ic_praying_beads_page.svg';

import {infoTexts} from '../../assets/texts/infoTexts';

const HooponoponoScreen = () => {
  const [count, setCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCount = () => {
    if (count < 108) setCount(count + 1);
    if (count === 107) setShowConfetti(true);
  };

  const clearCount = () => {
    setCount(0);
    setShowConfetti(false);
  };

  return (
    <MainLayout titleHeader={"Ho'oponopono"}>
      <SubtitleBar
        showBackButton={false}
        infoTitle={infoTexts.hooponopono.title}
        infoText={infoTexts.hooponopono.text}
      />
      <View style={styles.topButton}>
        {count !== 108 && (
          <Buttons.RoundButton title="zerar" onPress={clearCount} />
        )}
      </View>
      <View style={styles.container}>
        <PrayingBeadsImage width={80} />
        <View style={styles.textContainer}>
          {count !== 108 ? (
            <>
              <Texts.CustomText
                text="Sinto muito"
                family={fonts.karla.medium}
                color={colors.purple700}
                size={24}
                align="center"
              />
              <Texts.CustomText
                text="Me perdoe"
                family={fonts.karla.medium}
                color={colors.purple700}
                size={24}
                align="center"
              />
              <Texts.CustomText
                text="Te amo"
                family={fonts.karla.medium}
                color={colors.purple700}
                size={24}
                align="center"
              />
              <Texts.CustomText
                text="Obrigado(a)"
                family={fonts.karla.medium}
                color={colors.purple700}
                size={24}
                align="center"
              />
            </>
          ) : (
            <>
              <Texts.CustomText
                text="A prática chegou ao fim."
                family={fonts.karla.medium}
                color={colors.purple700}
                size={24}
                align="center"
              />
              <Texts.CustomText
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
          <Buttons.PrimaryButton
            title={count.toString()}
            onPress={handleCount}
            textSize={40}
          />
        ) : (
          <Buttons.PrimaryButton
            title="Reiniciar"
            onPress={clearCount}
            textSize={24}
          />
        )}
      </View>
      <Components.ConfettiAnimation showConfetti={showConfetti} />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  topButton: {
    position: 'absolute',
    top: 30,
    left: 30,
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
});

export default HooponoponoScreen;
