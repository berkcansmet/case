import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Checkbox = ({
  containerStyle,
  buttonLabelWrapper,
  activeIconStyle,
  icon,
  activeButtonContainerStyle,
  buttonContainerStyle,
  labelStyle,
  activeLabelStyle,
  active,
  onChange,
  label
}) => {
  return (
    <View style={containerStyle}>
      <View style={buttonLabelWrapper}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => onChange(!active)}
          style={active ? activeButtonContainerStyle : buttonContainerStyle}
        >
          {active && <AntDesign name={icon} style={activeIconStyle} />}
        </TouchableOpacity>
        <Text style={active ? activeLabelStyle : labelStyle}>{label}</Text>
      </View>
    </View>
  );
};

Checkbox.defaultProps = {
  activeIconStyle: styles.checkboxButtonIcon,
  icon: 'check',
  buttonContainerStyle: styles.checkboxButtonContainer,
  activeButtonContainerStyle: styles.checkboxButtonActiveContainer,
  containerStyle: styles.checkBoxContainer,
  buttonLabelWrapper: styles.buttonLabelWrapper,
  labelStyle: styles.labelText,
  activeLabelStyle: styles.activeLabelText
};
export default Checkbox;
