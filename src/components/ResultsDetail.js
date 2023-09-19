import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultsDetail = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: result.image_url}} />
      <Text style={styles.textName}>{result.name}</Text>
      <Text>
        {result.rating} stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom: 10,
  },
  image: {
    width: 240,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  textName: {
    fontWeight: 'bold',
  },
});

export default ResultsDetail;
