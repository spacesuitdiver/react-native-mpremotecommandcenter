'use strict';

import { NativeModules, DeviceEventEmitter } from 'react-native';
const RNMPRemoteCommandCenter = NativeModules.RNMPRemoteCommandCenterManager


var listeners = {};

module.exports = {
  setNowPlayingInfo: function (info) {
    RNMPRemoteCommandCenter.setNowPlayingInfo(info);
  },

  setElapsedPlaybackTime: function(elapsedPlaybackTime) {
    RNMPRemoteCommandCenter.setElapsedPlaybackTime(elapsedPlaybackTime);
  },

  addListener: function(cb) {
    listeners[cb] = DeviceEventEmitter.addListener('RNMPRemoteCommandCenterEvent', cb);
  },

  removeListener(cb) {
    if (!listeners[cb]) {
      return;
    }
    listeners[cb].remove();
    listeners[cb] = null;
  }
};