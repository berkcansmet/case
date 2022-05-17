import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  titleIconWrapperStyle: {
    flexDirection: 'row'
  },
  iconStyle: {
    fontSize: 15
  },
  textWrapperStyle: {
    marginLeft: 10,
    width: '85%'
  },
  titleStyle: {
    fontFamily: 'Poppins-Medium',
    color: '#000'
  },
  subTitleStyle: {
    color: '#949494'
  },
  buttonIcon: {
    fontSize: 30,
    color: '#005CF6'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  modalWrapper: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35
  },
  modalIcon: {
    fontSize: 38,
    color: '#DC1A34',
    textAlign: 'center'
  },
  modalTitle: {
    fontFamily: 'Poppins-Regular',
    color: '#949494',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10
  },
  contentText: {
    color: '#949494',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textAlign: 'center'
  },
  modalApprovedButton: {
    width: '45%',
    backgroundColor: '#58B75F'
  },
  modalButtonText: {
    color: '#fff',
    padding: 20,
    textAlign: 'center'
  },
  modalDisapprovedButton: {
    width: '45%',
    backgroundColor: '#DC1A34'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  warningContentText: {
    color: '#FF0000',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default styles;
