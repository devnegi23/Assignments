import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Sample from '../../components/Sample';
import RNRestart from 'react-native-restart';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const FontSize = 40;
const TextMarginBottom = 20;
const LineTop = FontSize + TextMarginBottom - 10;

const Tic = () => {
  const [count, setCount] = useState(1);
  const [empty, setEmpty] = useState(true);
  const [sample1, setSample1] = useState('');
  const [sample2, setSample2] = useState('');
  const [sample3, setSample3] = useState('');
  const [sample4, setSample4] = useState('');
  const [sample5, setSample5] = useState('');
  const [sample6, setSample6] = useState('');
  const [sample7, setSample7] = useState('');
  const [sample8, setSample8] = useState('');
  const [sample9, setSample9] = useState('');
  const [loader, setLoader] = useState(false);

  const onClick = (text: any, index: number) => {
    console.log('index', index, text);
    setCount(count + 1);
    if (index === 0) setSample1(text);
    if (index === 1) setSample2(text);
    if (index === 2) setSample3(text);
    if (index === 3) setSample4(text);
    if (index === 4) setSample5(text);
    if (index === 5) setSample6(text);
    if (index === 6) setSample7(text);
    if (index === 7) setSample8(text);
    if (index === 8) setSample9(text);
  };

  const onclick = () => {
    // setLoader(!loader);
    RNRestart.restart();
    // setEmpty(false);
  };
  const resetPress = () => {
    setCount(1);
  };

  const row1Circle =
    sample1 === 'circle' && sample2 === 'circle' && sample3 === 'circle';
  const row2Circle =
    sample4 === 'circle' && sample5 === 'circle' && sample6 === 'circle';
  const row3Circle =
    sample7 === 'circle' && sample8 === 'circle' && sample9 === 'circle';
  const col1Circle =
    sample1 === 'circle' && sample4 === 'circle' && sample7 === 'circle';
  const col2Circle =
    sample2 === 'circle' && sample5 === 'circle' && sample8 === 'circle';
  const col3Circle =
    sample3 === 'circle' && sample6 === 'circle' && sample9 === 'circle';
  const diag1Circle =
    sample1 === 'circle' && sample5 === 'circle' && sample9 === 'circle';
  const diag2Circle =
    sample3 === 'circle' && sample5 === 'circle' && sample7 === 'circle';

  const row1Cross =
    sample1 === 'cross' && sample2 === 'cross' && sample3 === 'cross';
  const row2Cross =
    sample4 === 'cross' && sample5 === 'cross' && sample6 === 'cross';
  const row3Cross =
    sample7 === 'cross' && sample8 === 'cross' && sample9 === 'cross';
  const col1Cross =
    sample1 === 'cross' && sample4 === 'cross' && sample7 === 'cross';
  const col2Cross =
    sample2 === 'cross' && sample5 === 'cross' && sample8 === 'cross';
  const col3Cross =
    sample3 === 'cross' && sample6 === 'cross' && sample9 === 'cross';
  const diag1Cross =
    sample1 === 'cross' && sample5 === 'cross' && sample9 === 'cross';
  const diag2Cross =
    sample3 === 'cross' && sample5 === 'cross' && sample7 === 'cross';

  const disablity =
    row1Circle ||
    row2Circle ||
    row3Circle ||
    col1Circle ||
    col2Circle ||
    col3Circle ||
    diag1Circle ||
    diag2Circle ||
    row1Cross ||
    row2Cross ||
    row3Cross ||
    col1Cross ||
    col2Cross ||
    col3Cross ||
    diag1Cross ||
    diag2Cross;

  return (
    <SafeAreaView style={styles.mainView}>
      <Text style={styles.tic_tac_toe}>Tic Tac Toe</Text>
      {row1Circle && (
        <View style={[styles.SingleWidthView, {top: 115 + LineTop}]}></View>
      )}
      {row2Circle && (
        <View style={[styles.SingleWidthView, {top: 215 + LineTop}]}></View>
      )}
      {row3Circle && (
        <View style={[styles.SingleWidthView, {top: 315 + LineTop}]}></View>
      )}
      {col1Circle && (
        <View
          style={[
            styles.SingleHeightView,
            {top: 70 + LineTop, left: 85},
          ]}></View>
      )}
      {col2Circle && (
        <View style={[styles.SingleHeightView, {top: 70 + LineTop}]}></View>
      )}
      {col3Circle && (
        <View
          style={[
            styles.SingleHeightView,
            {top: 70 + LineTop, right: 85},
          ]}></View>
      )}
      {diag2Circle && (
        <View
          style={[
            styles.SingleDiagonalHeightView,
            {top: 20 + LineTop, transform: [{rotate: '45deg'}]},
          ]}></View>
      )}
      {diag1Circle && (
        <View
          style={[
            styles.SingleDiagonalHeightView,
            {top: 20 + LineTop, transform: [{rotate: '135deg'}]},
          ]}></View>
      )}

      {row1Cross && (
        <View style={[styles.SingleWidthView, {top: 115 + LineTop}]}></View>
      )}
      {row2Cross && (
        <View style={[styles.SingleWidthView, {top: 215 + LineTop}]}></View>
      )}
      {row3Cross && (
        <View style={[styles.SingleWidthView, {top: 315 + LineTop}]}></View>
      )}
      {col1Cross && (
        <View
          style={[
            styles.SingleHeightView,
            {top: 70 + LineTop, left: 85},
          ]}></View>
      )}
      {col2Cross && (
        <View style={[styles.SingleHeightView, {top: 70 + LineTop}]}></View>
      )}
      {col3Cross && (
        <View
          style={[
            styles.SingleHeightView,
            {top: 70 + LineTop, right: 85},
          ]}></View>
      )}
      {diag2Cross && (
        <View
          style={[
            styles.SingleDiagonalHeightView,
            {top: 20 + LineTop, transform: [{rotate: '45deg'}]},
          ]}></View>
      )}
      {diag1Cross && (
        <View
          style={[
            styles.SingleDiagonalHeightView,
            {top: 20 + LineTop, transform: [{rotate: '135deg'}]},
          ]}></View>
      )}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {arr?.map((e, index) => (
          <Sample
            disablity={disablity}
            sampleNumber={count}
            emptyBox={!empty}
            extraMainView={{
              borderRightWidth: index % 3 != 2 ? 2 : 0,
              borderTopWidth: index > 2 ? 2 : 0,
            }}
            onPress={(text: any) => onClick(text, index)}
          />
        ))}
      </View>
      <TouchableOpacity
        onPress={onclick}
        style={{
          height: 50,
          width: 250,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
        }}>
        {loader ? (
          <ActivityIndicator size="small" color="black" />
        ) : (
          <Text>YOU WIN</Text>
        )}
      </TouchableOpacity>

      <Text>YOU WIN</Text>
    </SafeAreaView>
  );
};

export default Tic;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  tic_tac_toe: {
    fontSize: FontSize,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: TextMarginBottom,
  },
  SingleWidthView: {
    borderWidth: 2,
    width: 300,
    borderColor: 'red',
    position: 'absolute',
  },
  SingleHeightView: {
    borderWidth: 2,
    height: 300,
    borderColor: 'red',
    position: 'absolute',
  },
  SingleDiagonalHeightView: {
    borderWidth: 2,
    height: 400,
    borderColor: 'red',
    position: 'absolute',
  },
  mainGridStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
