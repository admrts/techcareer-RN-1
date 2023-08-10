import React, {useState} from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import styles from './styles';
import axios from 'axios';

const FormTextItem = () => {
  const [name, setName] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [unitsInStock, setUnitsInStock] = useState('');

  const handleAdd = () => {
    axios
      .post('https://northwind.vercel.app/api/products', {
        name,
        unitPrice,
        unitsInStock,
      })
      .then(res => {})
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View>
      <Text style={styles.title}>Add Stock</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Name"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        onChangeText={setUnitPrice}
        value={unitPrice}
        placeholder="Unit Price"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setUnitsInStock}
        value={unitsInStock}
        placeholder="Unit in Stock"
        keyboardType="numeric"
      />

      <View style={styles.buttonWrapper}>
        <Pressable style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FormTextItem;
