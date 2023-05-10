import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  keyStroke: string;
  onpress: any;
  extraTouchStyle?: any;
  extraTextStyle?: any;
};
const KeyBoardTextInput = (props: Props) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.mainView, props.extraTouchStyle]}
        onPress={props.onpress}>
        <Text
          style={[{fontWeight: 'bold', fontSize: 20}, props.extraTextStyle]}>
          {props.keyStroke}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default KeyBoardTextInput;

const styles = StyleSheet.create({
  mainView: {
    width: 32,
    height: 45,
    // borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'lightgrey',
  },
});
