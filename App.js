import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

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
      <View style={styles.topbox}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text2}>{price}</Text>
      </View>

      <View style={styles.btnbox}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>Select</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  const renderItem = ({item}) => {
    return <Item name={item.name} price={item.price} />;
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={snack}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbox: {
    width: `90%`,
    height: 90,
    marginTop: 15,

    alignItems: `center`,
  },

  text: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: 25,
  },

  text2: {
    marginTop: 10,
    marginLeft: 30,
    fontSize: 20,
  },

  btnbox: {
    width: `90%`,
    alignItems: `center`,
    justifyContent: `center`,
  },

  btn: {
    width: `30%`,
    height: 30,

    backgroundColor: `#616363`,

    alignItems: `center`,
    justifyContent: `center`,

    marginLeft: 30,
    marginTop: 10,
    borderRadius: 5,
  },

  btntext: {
    color: `#fff`,
  },
});

export default App;
