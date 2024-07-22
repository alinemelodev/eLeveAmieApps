import React, {useState} from 'react';

import {View, StyleSheet} from 'react-native';

import {fonts} from '../../styles/fonts/fonts';
import {colors} from '../../styles/colors/colors';

import MainLayout from '../../styles/layouts/MainLayout';
import Buttons from '../../components/Buttons';
import Texts from '../../components/Texts';
import Components from '../../components/HooponoponoScreen';

import PrayingBeadsImage from '../../images/svg/icons/ic_praying_beads_page.svg';
import InfoIcon from '../../images/svg/icons/ic_info.svg';

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
      <View style={styles.topButtons}>
        <Buttons.IconButton icon={<InfoIcon width={30} height={30} />} />
        {count !== 108 && <Buttons.RoundButton title="zerar" onPress={clearCount} />}
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
                text="Sou grato(a)"
                family={fonts.karla.medium}
                color={colors.purple700}
                size={24}
                align="center"
              />
              <Texts.CustomText
                text="Eu te amo"
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
          <Buttons.PrimaryButton title="Reiniciar" onPress={clearCount} textSize={24} />
        )}
      </View>
      <Components.ConfettiAnimation showConfetti={showConfetti} />
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
});

export default HooponoponoScreen;
