import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import buyu from './src/modules/BuyU';
import practiseUseOne from './src/modules/BuyU/practiseUseOne';

const STACK = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <STACK.Navigator screenOptions={{headerShown: false}}>
          <STACK.Screen name="practiseUseOne" component={practiseUseOne} />
          <STACK.Screen name="buyu" component={buyu} />
        </STACK.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
