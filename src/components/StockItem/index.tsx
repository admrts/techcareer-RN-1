import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const index = ({name = 'iphone', unitPrice = '3000', unitStock = '10'}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.name}>Name: {name}</Text>
      <Text>Price: ${unitPrice}</Text>
      <Text>in Stock: {unitStock}</Text>
    </View>
  );
};

export default index;
