import { View, Text } from 'react-native';
import React, { useState } from 'react';
import FormItem from '../../Components/Form/FormItem';
import styles from './style';
import SelectBox from '../../Components/SelectBox';
import CustomIcon from '../../Components/CustomIcon';
import Checkbox from '../../Components/Checkbox';
import Button from '../../Components/Button';
import ModalComponent from '../../Components/Modal';
import ModalContent from '../../Components/Form/ModalContent';

const Form = () => {
  const selectData = ['Kategori 1', 'Kategori 2', 'Kategori 3'];
  const [hiddenContentEnabled, setHiddenContentEnabled] = useState(false);
  const toggleHiddenContent = () => setHiddenContentEnabled(previousState => !previousState);
  const [privateContentEnabled, setPrivateContentEnabled] = useState(false);
  const togglePrivateContent = () => setPrivateContentEnabled(previousState => !previousState);
  const [openSelectBox, setOpenSelectBox] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [checked, setCheck] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);

  const onChangeModalStatus = () => {
    setModalStatus(!modalStatus);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitleText}>Ayarlar</Text>
      <View style={styles.pageSubTitleWrapper}>
        <Text style={styles.pageSubTitleText}>Ayarlarınızı güncel bir şekilde kaydedin</Text>
        <CustomIcon name='warning1' style={styles.icon} />
      </View>
      <View style={styles.formContainer}>
        <SelectBox
          data={selectData}
          placeHolder='Seçim'
          open={openSelectBox}
          openChange={setOpenSelectBox}
          onChange={setSelectedItem}
          selected={selectedItem}
        />
        <FormItem
          icon='feature'
          title='Özellikler'
          subTitle='Özellik eklemek için butonu kullanabilirsiniz.'
          buttonIcon='plus'
        />
        <FormItem
          icon='star'
          title='Seviyeler'
          subTitle='Seviyenizi belirleyin.'
          buttonIcon='plus'
        />
        <FormItem
          icon='statistics'
          title='İstatistikler'
          subTitle='Daha anlaşılabilir olmak için istatistikleri belirleyin.'
          buttonIcon='plus'
        />
        <FormItem
          icon='unlock'
          title='Gizli İçerik'
          subTitle='Gizli içerik özelliğini aktif hale getirin.'
          isEnabled={hiddenContentEnabled}
          toggleSwitch={toggleHiddenContent}
          isSwitch
          toggleIosBackgroundColor='#7A8BA8'
          falseThumbColor='#fff'
          trueThumbColor='#fff'
          falseTrackColor='#7A8BA8'
          trueTrackColor='#000'
          containerStyle={styles.toggleContainer}
          titleIconWrapperStyle={styles.titleIconWrapper}
        />
        <FormItem
          icon='warning'
          title='Özel İçerik'
          subTitle='Özel içerik özelliğini aktif hale getirebilirsiniz.'
          isEnabled={privateContentEnabled}
          toggleSwitch={togglePrivateContent}
          isSwitch
          containerStyle={styles.toggleContainer}
          titleIconWrapperStyle={styles.titleIconWrapper}
        />
      </View>
      <View style={styles.footerContainer}>
        <Checkbox active={checked} onChange={setCheck} label='Kabul ediyorum' />
        <Button
          textStyle={styles.buttonText}
          buttonStyle={styles.button}
          text='Değişiklikleri Kaydet'
          onPress={() => onChangeModalStatus()}
        />
      </View>
      <ModalComponent visible={modalStatus}>
        <ModalContent
          disApprovedPress={() => onChangeModalStatus()}
          approvedOnPress={() => onChangeModalStatus()}
        />
      </ModalComponent>
    </View>
  );
};

export default Form;
