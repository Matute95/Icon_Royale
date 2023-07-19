import React, { useState } from 'react';
import { View, Text, ScrollView, Image, Button, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Item = ({ images, description }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        {images.map((image, index) => (
          <Image source={image} key={index} style={styles.image} />
        ))}
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const Evento = ({ route, navigation }) => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const { demas } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        {demas.map((personaje, index) => (
          <Item images={personaje.interaccion} description={personaje.evento} key={index} />
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Siguiente día" onPress={() => setCurrentDayIndex(currentDayIndex + 1)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
  },
  itemContainer: {
    marginVertical: 8,
    alignItems: 'center',
    flex: 1,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: (width - 32) / 3, // 3 images per row
    height: 100,
    marginRight: 8,
    marginBottom: 8,
  },
  description: {
    marginTop: 8,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    padding: 8,
  },
});

export default Evento;
