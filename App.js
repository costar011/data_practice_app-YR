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

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topbox}>
        <Text>test</Text>
      </View>
      <View style={styles.bottombox}>
        <Text>bottom</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#777`,
  },
  topbox: {
    height: 200,

    backgroundColor: `#555`,

    alignItems: `center`,
    justifyContent: `center`,
  },

  bottombox: {
    height: 300,

    backgroundColor: `#444`,

    alignItems: `center`,
    justifyContent: `center`,
  },
});

export default App;
