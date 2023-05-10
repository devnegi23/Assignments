import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

type Props = {
  onchangeText?: any;
  value?: any;
  backgroundColor?: string;
  onfocus?: any;
  selected?: boolean;
};
const SquareTextInput = (props: Props) => {
  return (
    <View
      style={[
        styles.mainView,
        {backgroundColor: props.backgroundColor},
        {borderColor: props.selected ? 'red' : 'black'},
      ]}>
      <Text
        style={{fontWeight: 'bold', fontSize: 25, padding: 0, color: 'white'}}>
        {props?.value}
      </Text>
    </View>
  );
};

export default SquareTextInput;

const styles = StyleSheet.create({
  mainView: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
