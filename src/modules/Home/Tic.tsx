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

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
    setLoader(!loader);
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

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'orange', alignItems: 'center'}}>
      <Text>Tic Tac Toe</Text>
      {row1Circle && (
        <View
          style={{
            borderWidth: 2,
            width: 300,
            borderColor: 'red',
            position: 'absolute',
            top: 115,
          }}></View>
      )}
      {row2Circle && (
        <View
          style={{
            borderWidth: 2,
            width: 300,
            borderColor: 'red',
            position: 'absolute',
            top: 215,
          }}></View>
      )}
      {row3Circle && (
        <View
          style={{
            borderWidth: 2,
            width: 300,
            borderColor: 'red',
            position: 'absolute',
            top: 315,
          }}></View>
      )}
      {col1Circle && (
        <View
          style={{
            borderWidth: 2,
            height: 300,
            borderColor: 'red',
            position: 'absolute',
            top: 70,
            left: 85,
          }}></View>
      )}
      {col2Circle && (
        <View
          style={{
            borderWidth: 2,
            height: 300,
            borderColor: 'red',
            position: 'absolute',
            top: 70,
          }}></View>
      )}
      {col3Circle && (
        <View
          style={{
            borderWidth: 2,
            height: 300,
            borderColor: 'red',
            position: 'absolute',
            top: 70,
            right: 85,
          }}></View>
      )}
      {diag2Circle && (
        <View
          style={{
            borderWidth: 2,
            height: 400,
            borderColor: 'red',
            position: 'absolute',
            top: 20,
            // right: 85,
            transform: [{rotate: '45deg'}],
          }}></View>
      )}
      {diag1Circle && (
        <View
          style={{
            borderWidth: 2,
            height: 400,
            borderColor: 'red',
            position: 'absolute',
            top: 20,
            // right: 85,
            transform: [{rotate: '135deg'}],
          }}></View>
      )}

      {row1Cross && (
        <View
          style={{
            borderWidth: 2,
            width: 300,
            borderColor: 'red',
            position: 'absolute',
            top: 115,
          }}></View>
      )}
      {row2Cross && (
        <View
          style={{
            borderWidth: 2,
            width: 300,
            borderColor: 'red',
            position: 'absolute',
            top: 215,
          }}></View>
      )}
      {row3Cross && (
        <View
          style={{
            borderWidth: 2,
            width: 300,
            borderColor: 'red',
            position: 'absolute',
            top: 315,
          }}></View>
      )}
      {col1Cross && (
        <View
          style={{
            borderWidth: 2,
            height: 300,
            borderColor: 'red',
            position: 'absolute',
            top: 70,
            left: 85,
          }}></View>
      )}
      {col2Cross && (
        <View
          style={{
            borderWidth: 2,
            height: 300,
            borderColor: 'red',
            position: 'absolute',
            top: 70,
          }}></View>
      )}
      {col3Cross && (
        <View
          style={{
            borderWidth: 2,
            height: 300,
            borderColor: 'red',
            position: 'absolute',
            top: 70,
            right: 85,
          }}></View>
      )}
      {diag2Cross && (
        <View
          style={{
            borderWidth: 2,
            height: 400,
            borderColor: 'red',
            position: 'absolute',
            top: 20,
            // right: 85,
            transform: [{rotate: '45deg'}],
          }}></View>
      )}
      {diag1Cross && (
        <View
          style={{
            borderWidth: 2,
            height: 400,
            borderColor: 'red',
            position: 'absolute',
            top: 20,
            // right: 85,
            transform: [{rotate: '135deg'}],
          }}></View>
      )}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {arr?.map((e, index) => (
          <Sample
            sampleNumber={count}
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
          borderRadius:20
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

const styles = StyleSheet.create({});
