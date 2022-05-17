import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  selectBoxContainer: {
    borderWidth: 0.5,
    borderColor: '#949494'
  },
  selectBoxWrapper: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  selectBoxContentContainer: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#949494'
  },
  selectBoxContentWrapper: {
    padding: 5,
    borderBottomColor: '#949494',
    borderBottomWidth: 0.5
  }
});

export default styles;
