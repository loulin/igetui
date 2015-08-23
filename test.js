function getui() {
  var GeTui = require('./index');
  var HOST = 'http://sdk.open.api.igexin.com/apiex.htm';
  var APPID = 'sQWMlekSL07GydhWv41DS3';
  var APPKEY = 'dPfvyqUMnW8yU1EMNgvVA5';
  var MASTERSECRET = 'O7JhsG3eYQ8pLq4SGq3fE8';
  var gt = new GeTui(HOST, APPKEY, MASTERSECRET);
  var template = new GeTui.Template.LinkTemplate({
    appId: APPID,
    appKey: APPKEY,
    title: '聚多宝',
    text: '聚多宝正式推出，欢迎使用',
    logo: 'http://wwww.igetui.com/logo.png',
    logoUrl: 'https://www.baidu.com/img/bdlogo.png',
    isRing: true,
    isVibrate: true,
    isClearable: true,
    url: 'http://www.judb.com'
  });
  /*var message = new GeTui.Message.ListMessage({
    isOffline: false,
    offlineExpireTime: 1, //3600 * 12 * 1000,
    data: template
  });*/
  var message = new GeTui.Message.AppMessage({
    isOffline: false,
    offlineExpireTime: 1,//3600 * 12 * 1000,
    data: template,
    appIdList: [APPID]
      //        phoneTypeList: ['IOS'],
      //        provinceList: ['浙江'],
      //tagList: ['阿百川']
      //        speed: 1
  });
  /*gt.getContentId(message, null, function(err, res) {
    console.log(err, res);
    
    gt.stop(res, function(err, res) {
      console.log(err, res);
    });
  });*/

  gt.pushMessageToApp(message, function(err, res) {
    console.log(err, res);
  });

  /*gt.getPushMsgResult('GT_0419_2QHkPf56pU98UV8tcpfi64', function(err, res) {
    console.log(err, res);
  });*/
}

getui();
