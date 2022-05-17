import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  formContainer: {
    marginTop: 10
  },
  pageTitleText: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    marginBottom: 10
  },
  pageSubTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  pageSubTitleText: {
    color: '#949494'
  },
  icon: {
    color: '#949494',
    marginLeft: 5
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#949494'
  },
  titleIconWrapper: {
    flexDirection: 'row',
    marginBottom: 5
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#005CF6',
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    padding: 10
  }
});

export default styles;
