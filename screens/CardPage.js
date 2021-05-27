import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

const CardPage = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: route.params.image }}
        style={{ height: 200, width: 175 }}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        {route.params.title}
      </Text>
      <Text>{route.params.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CardPage;
