import { View, Text } from 'react-native';
import React from 'react';
import styles from './style';
import Button from '../Button';
import CustomIcon from '../CustomIcon';
const ModalContent = ({ approvedOnPress, disApprovedPress }) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalWrapper}>
        <View>
          <CustomIcon name='warning1' style={styles.modalIcon} />
          <Text style={styles.modalTitle}>Uyarı !</Text>
          <Text style={styles.contentText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining <Text style={styles.warningContentText}>essentially unchanged.</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.modalApprovedButton}
            textStyle={styles.modalButtonText}
            text='Kabul Et'
            onPress={approvedOnPress}
          />

          <Button
            buttonStyle={styles.modalDisapprovedButton}
            textStyle={styles.modalButtonText}
            text='Çıkış'
            onPress={disApprovedPress}
          />
        </View>
      </View>
    </View>
  );
};

export default ModalContent;
