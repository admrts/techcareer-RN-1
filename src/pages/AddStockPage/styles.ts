import {StyleSheet, Dimensions} from 'react-native';
const {width: screenWidth} = Dimensions.get('window');

export default StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  buttonWrapper: {
    alignItems: 'flex-end',
  },
  button: {
    margin: 12,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'rgb(0,122,255)',
    borderRadius: 5,
    width: screenWidth / 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
