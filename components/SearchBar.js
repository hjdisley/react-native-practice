import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchBar = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <View>
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
          setSearchValue(searchValue);
          fetchData();
        }}
        style={{
          textAlign: 'center',
          backgroundColor: 'blue',
          padding: 10,
          margin: 10,
        }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
