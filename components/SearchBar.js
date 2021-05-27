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
        value={props.searchValue}
        onChange={handleChange}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          padding: 15,
          margin: 10,
        }}
      />
      <Button />
    </View>
  );
};

export default SearchBar;
