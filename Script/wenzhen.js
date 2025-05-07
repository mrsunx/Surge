/*************************************

项目名称：问真排盘
下载地址：
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/bzpp\d\.iwzbz\.com\/api\/[^\/]+\/(user\/getvipinfo(_nv1)?|User\/getWXPW)(\?.*)?$ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/wenzhenpaipan.js

[mitm]
hostname = bzpp3.iwzbz.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.isSuccess = true;
chxm1023.validateKey = "key";
chxm1023.data = {
    "expires" : "2099-09-09 09:09:09",
    "vipLevel" : 3
  };

$done({body : JSON.stringify(chxm1023)});
