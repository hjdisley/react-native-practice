import React, { useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import { Text, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';

const ImageCard = ({ data, navigation }) => {
  if (data.length == 0)
    return (
      <View>
        <Text style={{ textAlign: 'center' }}>No images</Text>
      </View>
    );

  return (
    <>
      <ScrollView>
        <FlatList
          data={data.collection.items}
          renderItem={({ item }) => (
            <>
              <View style={{ alignItems: 'center', marginBottom: 10 }}>
                <Image
                  onPress={() =>
                    navigation.navigate('CardPage', {
                      title: item.data[0].title,
                      description: item.data[0].description,
                      image: item.links[0].href,
                    })
                  }
                  source={{ uri: item.links[0].href }}
                  style={{ height: 100, width: 100, marginBottom: 10 }}
                />
                <Text style={{ textAlign: 'center' }}>
                  {item.data[0].title}
                </Text>
              </View>
            </>
          )}
        />
      </ScrollView>
    </>
  );
};

export default ImageCard;
