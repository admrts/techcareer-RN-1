import {StyleSheet, Dimensions} from 'react-native';

const {height: screenHeight} = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    height: screenHeight / 9,
    margin: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    gap: 5,
    padding: 4,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  price: {},
  stock: {},
});
