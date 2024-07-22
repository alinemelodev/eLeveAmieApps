import React, {useEffect, useState} from 'react';

import {View, Text} from 'react-native';

import {fonts} from '../../../styles/fonts/fonts';
import {colors} from '../../../styles/colors/colors';

interface CountdownProps {
  onComplete: () => void;
}

const Countdown: React.FC<CountdownProps> = ({onComplete}) => {
  const [count, setCount] = useState(3);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 1) {
        setCount(count - 1);
      } else {
        clearInterval(timer);
        setIsVisible(false);
        onComplete();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [count, onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text
        style={{
          fontFamily: fonts.karla.medium,
          color: colors.gray500,
          fontSize: 150,
        }}>
        {count}
      </Text>
    </View>
  );
};

export default Countdown;
