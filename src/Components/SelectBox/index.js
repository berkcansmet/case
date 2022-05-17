import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SelectBox = ({
  placeHolder,
  data,
  selectBoxContainerStyle,
  selectBoxWrapperStyle,
  iconName,
  contentContainerStyle,
  contentWrapperStyle,
  open,
  selected,
  openChange,
  onChange
}) => {
  const onChangeSelected = item => {
    onChange(item);
    openChange(!open);
  };
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => openChange(!open)}
        style={selectBoxContainerStyle}
      >
        <View style={selectBoxWrapperStyle}>
          <Text>{selected ? selected : placeHolder}</Text>
          <AntDesign name={iconName} />
        </View>
      </TouchableOpacity>
      {open && (
        <View style={contentContainerStyle}>
          {!!data &&
            data.map((item, index) => {
              return (
                <TouchableOpacity
                key={item.toString() + index}
                  onPress={() => onChangeSelected(item)}
                  style={contentWrapperStyle}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      )}
    </>
  );
};

SelectBox.defaultProps = {
  placeHolder: 'Seçiniz',
  selectBoxContainerStyle: styles.selectBoxContainer,
  selectBoxWrapperStyle: styles.selectBoxWrapper,
  iconName: 'down',
  contentContainerStyle: styles.selectBoxContentContainer,
  contentWrapperStyle: styles.selectBoxContentWrapper
};
export default SelectBox;
