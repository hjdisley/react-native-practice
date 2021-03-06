import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ImageCard from '../components/ImageCard';

const SearchPage = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('apollo');

  useEffect(() => {
    fetchData();
  }, []);

  const handleInput = (event) => {
    setSearchValue(event.nativeEvent.text);
  };

  const fetchData = async () => {
    let response = await fetch(
      `https://images-api.nasa.gov/search?q=${searchValue}&media_type=image&page=1`
    );
    const jsonData = await response.json();
    setData(jsonData);
  };

  return (
    <View>
      <Text style={styles.title}>Nasa Image Search</Text>
      <TextInput
        placeholder="Search Here..."
        value={searchValue}
        onChange={handleInput}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          padding: 15,
          margin: 10,
        }}
      />
      <TouchableOpacity
        onPress={() => {
          // setSearchValue(searchValue);
          fetchData();
        }}
        style={{
          textAlign: 'center',
          backgroundColor: 'blue',
          padding: 10,
          margin: 10,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
      <ImageCard data={data} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 100,
    textAlign: 'center',
    paddingBottom: 50,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default SearchPage;
