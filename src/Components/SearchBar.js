import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)} // can also be written like this -> onChangeText={onTermChange}
        style={styles.inputStyle}
        placeholder="Search"
        onEndEditing={() => onTermSubmit()} // can also be written like this -> onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
