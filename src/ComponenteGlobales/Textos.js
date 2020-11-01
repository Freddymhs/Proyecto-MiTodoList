import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Textos = () => {
  return (
    <View>
      <Text>-</Text>
    </View>
  );
};
export const Subtitulo = (props) => {
  const {subt} = props;
  return (
    <View>
      <Text>{subt}</Text>
    </View>
  );
};

export default Textos;
const styles = StyleSheet.create({});
