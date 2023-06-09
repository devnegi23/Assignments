import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Shimmer = () => {
  return (
    // <View>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <SkeletonPlaceholder borderRadius={4}>
        <View style={{width: 60, height: 60, borderRadius: 50}} />
        <View style={{marginLeft: 20}}>
          {/* <Image style={{width: 120, height: 20}} src={requre('./src/assets/image.png')} /> */}
          <Text style={{marginTop: 6, fontSize: 14, lineHeight: 18}}>
            Hello world
          </Text>
        </View>
      </SkeletonPlaceholder>
    </View>
    // </View>
  );
};

export default Shimmer;

const styles = StyleSheet.create({});
