import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';

const snack = [
  {
    id: 'snack1',
    name: '감자깡',
    price: `1000원`,
  },
  {
    id: 'snack2',
    name: '홈런볼',
    price: `2300원`,
  },
  {
    id: 'snack3',
    name: '고래밥',
    price: `2200원`,
  },
  {
    id: 'snack4',
    name: '누네띠네',
    price: `900원`,
  },
  {
    id: 'snack5',
    name: '쿠크다스',
    price: `5000원`,
  },
];

const Item = ({name, price}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.databox}>
        {name}
        {price}
      </Text>
    </View>
  );
};

const App = () => {
  const renderItem = ({item}) => {
    return <Item name={item.name} price={item.price} />; // {}를 쓴 후 return 써야함 안그러면 화면에 안나옴
  };
  return (
    <View>
      <View style={styles.bottombox}></View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={snack}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
    // SafeAreaView 안에 FlatList가 있는데, 우리가 데이터 7개를 넣어줌으로서 데이터가 다 끝날 때까지 돌아간다.
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#777`,
  },
  topbox: {},

  databox: {
    height: 40,
    marginTop: 20,
  },
  bottombox: {},
});

export default App;
