import { View, Text, Switch } from 'react-native';
import React from 'react';
import CustomIcon from '../CustomIcon';
import styles from './style';

const FormItem = ({
  iconStyle,
  textWrapperStyle,
  subTitleStyle,
  titleStyle,
  titleIconWrapperStyle,
  containerStyle,
  toggleIosBackgroundColor,
  falseTrackColor,
  trueTrackColor,
  trueThumbColor,
  falseThumbColor,
  icon,
  title,
  subTitle,
  buttonIcon,
  isEnabled,
  toggleSwitch,
  isSwitch
}) => {
  return (
    <View style={containerStyle}>
      <View style={titleIconWrapperStyle}>
        {icon && <CustomIcon name={icon} style={iconStyle} />}
        <View style={textWrapperStyle}>
          {title && <Text style={titleStyle}>{title}</Text>}
          {subTitle && <Text style={subTitleStyle}>{subTitle}</Text>}
        </View>
      </View>
      {isSwitch ? (
        <View>
          <Switch
            style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
            trackColor={{ false: falseTrackColor, true: trueTrackColor }}
            thumbColor={isEnabled ? trueThumbColor : falseThumbColor}
            ios_backgroundColor={toggleIosBackgroundColor}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      ) : (
        <CustomIcon name={buttonIcon} style={styles.buttonIcon} />
      )}
    </View>
  );
};

FormItem.defaultProps = {
  iconStyle: styles.iconStyle,
  textWrapperStyle: styles.textWrapperStyle,
  subTitleStyle: styles.subTitleStyle,
  titleStyle: styles.titleStyle,
  titleIconWrapperStyle: styles.titleIconWrapperStyle,
  containerStyle: styles.containerStyle,
  toggleIosBackgroundColor: '#7A8BA8',
  falseTrackColor: '#7A8BA8',
  trueTrackColor: '#000',
  trueThumbColor: '#fff',
  falseThumbColor: '#fff'
};

export default FormItem;
