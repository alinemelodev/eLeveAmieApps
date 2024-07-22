import {StyleSheet, View} from 'react-native';

import {colors} from '../../styles/colors/colors';
import {fonts} from '../../styles/fonts/fonts';

import Texts from '../../components/Texts';

import Logo from '../../images/svg/logo_name.svg';

interface HeaderProps {
  title?: string;
  logo?: boolean;
}

const Header = ({title, logo}: HeaderProps) => {
  return (
    <View style={styles.header}>
      {title && <Texts.CustomText style={styles.title} text={title} />}
      {logo && <Logo width={87} />}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 80,
    backgroundColor: colors.pink300,
  },
  title: {
    fontFamily: fonts.karla.medium,
    fontSize: 30,
    color: colors.white,
  },
});

export default Header;
