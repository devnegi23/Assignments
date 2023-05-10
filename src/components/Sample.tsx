import {
  Image,
  ImageRequireSource,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';

type Props = {
  extraMainView?: ViewStyle;
  onPress?: any;
  sampleNumber?: any;
};
const Sample = (props: Props) => {
  const {extraMainView, onPress, sampleNumber} = props;
  const [empty, setEmpty] = useState(true);
  const [circle, setCircle] = useState(false);
  const [disabledCount, setDisabledCount] = useState(false);
  const onpress = () => {
    setDisabledCount(true);

    setEmpty(false);
    if (sampleNumber % 2) {
      onPress('circle');
      setCircle(true);
    } else {
      setCircle(false);
      onPress('cross');
    }
  };
  return (
    <View aria-disabled={false} style={[styles.mainView, extraMainView]}>
      <TouchableOpacity
        disabled={disabledCount}
        onPress={onpress}
        activeOpacity={0.7}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {empty ? (
          <View style={{width: 80, height: 80}}></View>
        ) : circle ? (
          // <Image source={require('../assets/circle.png')} />
          <Text style= {{
            fontSize: 100,
            bottom: 20
          }}>o</Text>
        ) : (
          // <Image source={require('../assets/close.png')} />
          <Text style= {{
            fontSize: 90,
            bottom: 10
          }}>x</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Sample;

const styles = StyleSheet.create({
  mainView: {
    // borderWidth: 2,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/**
 * [ '', '', '']
 * [ '', '', '']
 * [ '', '', '']
 * 
 */
