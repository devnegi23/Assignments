// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {email_password} from './Redux/LoginReducer';

// const ScreenOne = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const signUp = () => {

//     // dispatch(email_password({email, password}));
//     return 5
//   };

//   const data = useSelector(state => state);
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'orange',
//       }}>
//       <Text onPress={() => console.log('hellooo')}>ScreenOne</Text>
//       <TextInput
//         placeholder="EMAIL"
//         style={{
//           width: 300,
//           height: 50,
//           borderWidth: 1,
//           borderRadius: 20,
//           backgroundColor: 'white',
//           marginBottom: 20,
//           paddingHorizontal: 20,
//         }}
//         onChangeText={text => setEmail(text)}
//       />
//       <TextInput
//         placeholder="PASSWORD"
//         style={{
//           width: 300,
//           height: 50,
//           borderWidth: 1,
//           borderRadius: 20,
//           backgroundColor: 'white',
//           marginBottom: 20,
//           paddingHorizontal: 20,
//         }}
//         onChangeText={text => setPassword(text)}
//       />
//       <TouchableOpacity
//         onPress={signUp}
//         style={{
//           borderWidth: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//           borderRadius: 10,
//           paddingHorizontal: 40,
//           paddingVertical: 5,
//         }}>
//         <Text
//           style={{
//             fontSize: 25,
//             fontWeight: 'bold',
//           }}>
//           SIGNUP
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ScreenOne;

// const styles = StyleSheet.create({});

import React, {Component, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

function ScreenOne() {
  const sum = () => {
    console.log('5');
    return 5;
  };

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(res => console.log('res', res))
  //     .catch(e => console.log('erroer', e));
  // }, []);
  return (
    <View testID='main_view' style={styles.container}>
      <Text style={styles.welcome} onPress={sum}>
        to React Native!
      </Text>
      <Text style={styles.instructions}>
        This is a React Native snapshot test.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
    backgroundColor:"red"
  },
  instructions: {
    color: 'red',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

export default ScreenOne;
