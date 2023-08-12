import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import StockItem from '../../components/StockItem';
import styles from './styles';
import axios from 'axios';

interface dataProps {
  id: number;
  name: string;
  unitPrice: number;
  unitsInStock: number;
}

const StockList = () => {
  const [itemData, setItemData] = useState<dataProps[]>();

  useEffect(() => {
    axios
      .get('https://northwind.vercel.app/api/products')
      .then(res => {
        setItemData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={itemData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <StockItem
            name={item.name}
            unitPrice={item.unitPrice}
            unitStock={item.unitsInStock}
          />
        )}
      />
    </View>
  );
};

export default StockList;
