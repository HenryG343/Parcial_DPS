import * as React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import { AppRegistry } from 'react-native';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const DATA = [
  {
    id: '1',
    title: 'Mercurio',
    src: require('./src/mercury-11591_960_720.png'),
    desc: 'Planeta más próximo al sol',
  },
  {
    id: '2',
    title: 'Venus',
    src: require('./src/venus-11022_960_720.jpg'),
    desc: '2° Planeta más próximo al sol',
  },
  {
    id: '3',
    title: 'Tierra',
    src: require('./src/earth-11015_960_720.webp'),
    desc: '3° Planeta más próximo al sol',
  },
  {
    id: '4',
    title: 'Marte',
    src: require('./src/mars-11012_960_720.jpg'),
    desc: '4° Planeta más próximo al sol',
  },
  {
    id: '5',
    title: 'Jupiter',
    src: require('./src/jupiter-67481_960_720.jpg'),
    desc: '5° Planeta más próximo al sol',
  },
  {
    id: '6',
    title: 'Saturno',
    src: require('./src/saturn_1293_132.jpg'),
    desc: '6° Planeta más próximo al sol',
  },
  {
    id: '7',
    title: 'Urano',
    src: require('./src/uranus-11625_960_720.jpg'),
    desc: '7° Planeta más próximo al sol',
  },
  {
    id: '8',
    title: 'Neptuno',
    src: require('./src/neptune-67537_960_720.jpg'),
    desc: 'Planeta más alejado al sol',
  },
  {
    id: '9',
    title: 'Sol',
    src: require('./src/sun-11582_960_720.jpg'),
    desc: 'La estrella más cercana a la Tierra',
  },
  {
    id: '10',
    title: 'Alfa Centauri',
    src: require('./src/alfacentury_2193_123.jpg'),
    desc: 'Estrella más cercana a la Tierra después de nuestro sol',
  },
   {
    id: '12',
    title: 'Barnard',
    src: require('./src/Barnardstar2006.jpg'),
    desc: '2° estrella más cercana al Sol',
  },
   {
    id: '13',
    title: 'Wolf 359',
    src: require('./src/Wolf359.jpg'),
    desc: '3° estrella más cercana al Sol a 8.29 años luz',
  },
    {
    id: '14',
    title: 'Sirio',
    src: require('./src/syrio_2139_3193.jpg'),
    desc: 'Compuesto por Sirio A, una estrella blanca y Sirio B, una enana blanca',
  },
    {
    id: '15',
    title: 'Luna',
    src: require('./src/full-moon-1869760_960_720.jpg'),
    desc: 'El único satélite natural de la Tierra',
  },
];
const Item = ({ title, img, desc }) => (
  <View style={styles.item}>
    <Image style={styles.img} source={img} />
    <View style={styles.item2}>
      <Text style={{ color: 'black', fontWeight: 'bold' }}>{title}</Text>
      <Text style={{ color: 'gray' }}>{desc}</Text>
    </View>
  </View>
);

const renderItem = ({ item }) => (
  <Item title={item.title} img={item.src} desc={item.desc} />
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>🚀 Espacio 🌕</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight || 0,
    padding: 8,
  },
  paragraph: {
    padding: '4%',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'justify',
    backgroundColor: 'black',
    color: 'white',
  },
  item: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: '1%',
    paddingBottom: '1%',
  },
  item2: {
    width: '80%',
    height: '100%',
    borderBottom: '1px solid gray',
    display: 'flex',
    paddingBottom: '4px',
  },
  img: {
    borderRadius: '50%',
    width: 55,
    height: 55,
  },
});
