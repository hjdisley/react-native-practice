import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageCard from '../components/ImageCard';
import SearchBar from '../components/SearchBar';

const SearchPage = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [searchValue]);

  const handleChange = (newValue) => {
    setSearchValue(newValue);
  };

  const fetchData = async () => {
    let response = await fetch(
      `https://images-api.nasa.gov/search?q=${searchValue}&media_type=image&page=1`
    );
    const jsonData = await response.json();
    setData(jsonData);
    setLoading(false);
  };
  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View>
      <Text style={styles.title}>Nasa Image Search</Text>
      <SearchBar value={searchValue} onChange={handleChange} />
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
