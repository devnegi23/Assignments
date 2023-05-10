import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/Redux/Store';
import ScreenOne from './src/ScreenOne';
import Tic from './src/modules/Home/Tic';
import Shimmer from './src/modules/Shimmer/Shimmer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import buyu from './src/modules/BuyU';

const STACK = createNativeStackNavigator();

const App = () => {
  return (
    // <View style={{flex: 1}}>
    //   <Provider store={store}>
    //     {/* <ScreenOne /> */}
    //     <Tic/>
    //     {/* <VideoCalling/> */}
    //     {/* <Shimmer/> */}
    //   </Provider>
    // </View>
    <View style={{flex: 1}}>
      <NavigationContainer>
        <STACK.Navigator screenOptions={{headerShown: false}}>
          <STACK.Screen name="buyu" component={buyu} />
          <STACK.Screen name="Tic" component={Tic} />
          <STACK.Screen name="ScreenOne" component={ScreenOne} />
        </STACK.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
