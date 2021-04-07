import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  return (
    <View
      style={{
        marginBottom: 200,
        paddingBottom: 20,
        // flexDirection: "row",
      }}
    >
      <Text style={styles.title}>{title}</Text>
      <FlatList
        // showsVerticalScrollIndicator
        // horizontal
        data={results}
        keyExtractor={(results, index) => index.toString()}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default ResultsList;
