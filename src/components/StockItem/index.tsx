import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  name: string;
  unitPrice: number;
  unitStock: number;
}

const index = ({name, unitPrice, unitStock}: Props) => {
  return (
    <View
      style={[
        styles.wrapper,
        {backgroundColor: unitPrice > 50 ? 'red' : 'white'},
      ]}>
      <Text style={[styles.name, {color: unitPrice > 50 ? 'white' : 'black'}]}>
        Name: {name}
      </Text>
      <Text style={{color: unitPrice > 50 ? 'white' : 'black'}}>
        Price: ${unitPrice}
      </Text>
      <Text style={{color: unitPrice > 50 ? 'white' : 'black'}}>
        in Stock: {unitStock}
      </Text>
    </View>
  );
};

export default index;
