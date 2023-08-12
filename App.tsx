import {SafeAreaView} from 'react-native';
import React from 'react';
import AddStock from './src/pages/AddStockPage';
import StockList from './src/pages/StockListPage';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <AddStock /> */}
      <StockList />
    </SafeAreaView>
  );
};

export default App;
