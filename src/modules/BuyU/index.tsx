import React, {useState} from 'react';
import {
  inputArr2,
  LowerkeyboardKeys,
  MiddlekeyboardKeys,
  TopkeyboardKeys,
  SECRETLETTER,
} from '../../dataSet/dataSet';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SquareTextInput from '../../components/SquareTextInput';
import KeyBoardTextInput from '../../components/KeyBoardTextInput';

const {width} = Dimensions.get('window');
const buyu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [inputArr, setInputArr] = useState(inputArr2);
  const keyPress = (value: string) => {
    console.log(value);
    const newArrSel = inputArr;
    newArrSel.forEach((ele, i) => {
      if (i === selectedIndex) {
        newArrSel[i].key = value;
      } else {
        return ele;
      }
    });
    setInputArr([...newArrSel]);
  };

  console.log(inputArr2);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {/* <Text>index</Text> */}
      <View style={styles.smallInputMainView}>
        {inputArr.map((e: any, i: any) => {
          return (
            <TouchableOpacity disabled={e.key.length===1} onPress={() => setSelectedIndex(i)}>
              <SquareTextInput
                selected={selectedIndex === i}
                value={e.key}
                backgroundColor={
                  e.key.length === 0
                    ? 'white'
                    : e.key == e.match
                    ? 'green'
                    : e.key.length > 0 && SECRETLETTER.includes(e.key)
                    ? '#cbb458'
                    : 'grey'
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.topKeyBoardInputMainView}>
        {TopkeyboardKeys.map((ekey: string, index) => {
          return (
            <KeyBoardTextInput
              onpress={() => keyPress(ekey)}
              keyStroke={ekey}
            />
          );
        })}
      </View>
      <View style={styles.topKeyBoardInputMainView}>
        {MiddlekeyboardKeys.map((ekey: string, index: number) => {
          return (
            <KeyBoardTextInput
              onpress={() => keyPress(ekey)}
              keyStroke={ekey}
            />
          );
        })}
      </View>
      <View style={styles.topKeyBoardInputMainView}>
        <KeyBoardTextInput
          onpress={() => {}}
          keyStroke={'ENTER'}
          extraTouchStyle={{width: 55}}
          extraTextStyle={{fontSize: 15}}
        />
        {LowerkeyboardKeys.map((ekey: string, index: number) => {
          return (
            <KeyBoardTextInput
              onpress={() => keyPress(ekey)}
              keyStroke={ekey}
            />
          );
        })}
        <KeyBoardTextInput
          onpress={() => keyPress("",)}
          keyStroke={'BACK'}
          extraTouchStyle={{width: 45}}
          extraTextStyle={{fontSize: 15}}
        />
      </View>
    </SafeAreaView>
  );
};

export default buyu;

const styles = StyleSheet.create({
  smallInputMainView: {
    width: width - 50,
    // borderWidth: 1,
    alignSelf: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginBottom: 30,
  },
  topKeyBoardInputMainView: {
    width: width - 10,
    alignSelf: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    marginBottom: 10,
  },
});
