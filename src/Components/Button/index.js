import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';

const Button = ({ onPress, buttonStyle, disabled, text, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} disabled={disabled}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  disabled: false,
  buttonStyle: styles.container,
  textStyle: styles.text
};

export default Button;
