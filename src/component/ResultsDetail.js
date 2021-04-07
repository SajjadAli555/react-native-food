import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={{ uri: result.artworkUrl100 }} />
      <Text style={styles.text}> America:{result.collectionCensoredName}</Text>
      <Text style={styles.text}> Genre:{result.primaryGenreName}</Text>
      <Text style={styles.text}> Artist:{result.artistName}</Text>
      <Text style={styles.text}>Country:{result.country}</Text>
      <Text style={styles.text}>Currency:{result.currency}</Text>
      <Text style={styles.text}>Price:{result.collectionPrice}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 50,
    marginBottom: 10,
    marginRight: 50,
    marginHorizontal: 10,
    flexDirection: "column",
    paddingBottom: 10,
    paddingTop: 10,
    borderWidth: 2,
    borderColor: "black",
    width: "80%",
    backgroundColor: "yellow",
  },
  Image: {
    width: 250,
    borderRadius: 3,
    height: 180,
    left: 70,
    // right: 130,
    // resizeMode: "contain",
  },
  text: {
    top: 5,
    left: 5,
    fontSize: 16,
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    // paddingBottom: 10,
    // textAlignVertical: "center",
  },
});
export default ResultsDetail;
