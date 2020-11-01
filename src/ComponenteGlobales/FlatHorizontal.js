import React from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';
const QueAreaobjetivos = ['s', 'x'];
var id = 0;

const FlatHorizontal = (props) => {
  const {ElementosArray} = props;

  return (
    <FlatList
      style={{backgroundColor: 'red'}}
      horizontal={true}
      data={ElementosArray}
      renderItem={({item}) => (
        <>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F5FCFF',
              flexDirection: 'column',
            }}>
            <Image
              style={{
                borderColor: 'red',
                borderWidth: 1,
                width: 80,
                height: 80,
                marginHorizontal: 5,
              }}
              source={require('../images/imgEjemplo.png')}
            />
            <Text key={id++}>
              {id++}
              {item}
            </Text>
          </View>
        </>
      )}
    />
  );
};

export default FlatHorizontal;

const styles = StyleSheet.create({});
