'use strict';

var RNMPRemoteCommandCenter = require('react-native').NativeModules.RNMPRemoteCommandCenter;
var DeviceEventEmitter = require('react-native').DeviceEventEmitter;

var listeners = {};

module.exports = {
  setNowPlayingInfo: function (info) {
    RNMPRemoteCommandCenter.setNowPlayingInfo(info);
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