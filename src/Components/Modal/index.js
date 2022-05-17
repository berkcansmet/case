import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';

const ModalComponent = ({ children, visible }) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType='slide' transparent={true} visible={visible}>
        {children}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  }
});

export default ModalComponent;
