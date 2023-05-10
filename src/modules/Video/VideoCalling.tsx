import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  ClientRoleType,
  createAgoraRtcEngine,
  IRtcEngine,
  RtcSurfaceView,
  ChannelProfileType,
} from 'react-native-agora';

const appId = '<--Insert app ID here-->';
const channelName = '<--Insert channel name here-->';
const token = '<--Insert authentication token here-->';
const uid = 0;

const VideoCalling = () => {
  const [isJoined, setIsJoined] = useState(false);

  const joinCall = () => {
    console.log('join call');
  };
  const leaveCall = () => {
    console.log('leave call');
  };

  const getPermission = async () => {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ]);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        onPress={joinCall}
        style={{width: 100, height: 50, backgroundColor: 'green'}}>
        <Text>JOIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={leaveCall}
        style={{width: 100, height: 50, backgroundColor: 'red'}}>
        <Text>LEAVE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VideoCalling;

const styles = StyleSheet.create({});
