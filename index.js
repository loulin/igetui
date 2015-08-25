'use strict';

var GeTui = require('./GT.push');
GeTui.Template = {
  APNTemplate: require('./getui/template/APNTemplate'),
  NotyPopLoadTemplate: require('./getui/template/NotyPopLoadTemplate'),
  LinkTemplate: require('./getui/template/LinkTemplate'),
  NotificationTemplate: require('./getui/template/NotificationTemplate'),
  PopupTransmissionTemplate: require('./getui/template/PopupTransmissionTemplate'),
  TransmissionTemplate: require('./getui/template/TransmissionTemplate'),
  BaseTemplate: require('./getui/template/BaseTemplate')
};

GeTui.Payload = {
  APNPayload: require('./payload/APNPayload'),
  DictionaryAlertMsg: require('./payload/DictionaryAlertMsg'),
  SimpleAlertMsg: require('./payload/SimpleAlertMsg')
};

GeTui.Message = {
  SingleMessage: require('./getui/message/SingleMessage'),
  AppMessage: require('./getui/message/AppMessage'),
  ListMessage: require('./getui/message/ListMessage')
};

GeTui.Target = require('./getui/Target');

module.exports = GeTui;
