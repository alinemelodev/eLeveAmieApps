import React from 'react';

import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  icon?: React.ReactNode;
  onPress?: () => void;
}

const IconButton = ({icon, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={{width: 30, height: 30}} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;
