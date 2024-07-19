import {Text, View} from 'react-native';

import Logo from '../../images/svg/logo_name.svg';

import {colors} from '../../styles/colors/colors';
import {fonts} from '../../styles/fonts/fonts';

interface HeaderProps {
  title?: string;
  logo?: boolean;
}

const Header = ({title, logo}: HeaderProps) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 80,
        backgroundColor: colors.pink300,
      }}>
      {title && (
        <Text
          style={{
            fontFamily: fonts.karla.medium,
            fontSize: 30,
            color: colors.white,
          }}>
          {title}
        </Text>
      )}
      {logo && <Logo width={87} />}
    </View>
  );
};

export default Header;
