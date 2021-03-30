import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import SearchBar from "../component/SearchBar";
import useResults from "../hook/useResults";
import ResultsList from "../component/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  // const filterResultsByPrice = () => {
  //   console.log({ results });
  //   return results.filter(() => {
  //     return results.price === price;
  //   })
  // };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text> We found some {results.resultCount} results</Text>
      <ResultsList title="Itune Books" results={results.results} />
    </View>
  );
};
const styles = StyleSheet.create({});

export default SearchScreen;
