import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  selectBoxContentContainer: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#949494'
  },
  selectBoxContentWrapper: {
    padding: 5,
    borderBottomColor: '#949494',
    borderBottomWidth: 0.5
  },
  checkBoxContainer: {
    marginTop: 10
  },
  buttonLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelText: {
    color: '#949494',
    fontFamily: 'Poppins-Medium',
    marginLeft: 5,
    fontSize: 12
  },
  activeLabelText: {
    fontFamily: 'Poppins-Medium',
    marginLeft: 5,
    color: '#005CF6',
    fontSize: 12
  },
  checkboxButtonContainer: {
    width: 30,
    height: 30,
    borderWidth: 0.5
  },
  checkboxButtonActiveContainer: {
    width: 30,
    height: 30,
    backgroundColor: '#005CF6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkboxButtonIcon: {
    color: '#fff',
    fontSize: 20
  }
});

export default styles;
