
function addAuth(obj, key) {
  if (obj[key] === undefined || !obj[key]) {
    obj[key] = {
      allAuthority: true
    }
  } else {
    obj[key].allAuthority = true
  }
}

function supplementWithEmptyObject(obj, key) {
  if (obj[key] === undefined) {
      obj[key] = {};
  }
}

var response = JSON.parse($response.body);
for (let item of response.data.item || []) {
  addAuth(item, "vipInfo")
}
addAuth(response.data, "liuQinTuShi")
// addAuth(response.data.liuQinTuShi, "vipInfo")
addAuth(response.data, "baZiGeJuInfo")
addAuth(response.data.baZiGeJuInfo, "vipInfo")
addAuth(response.data, "gongWeiTuShi")
// addAuth(response.data.gongWeiTuShi, "vipInfo")
addAuth(response.data, "tiaoHouYongShen")
// addAuth(response.data.tiaoHouYongShen, "vipInfo")
addAuth(response.data, "LiuTongTuShi")
// addAuth(response.data.LiuTongTuShi, "vipInfo")
addAuth(response.data, "chuShengTianTiTu")
addAuth(response.data, "xianTianTiZhi")
addAuth(response.data, "riZhuShuXing")
addAuth(response.data, "wuXingGeShu")
addAuth(response.data, "wuXingHanCangGan")
addAuth(response.data, "wuXingNengLiang")
addAuth(response.data, "wangShuai")
addAuth(response.data, "xiJiYongShen")
addAuth(response.data, "daYunCaiFu")
addAuth(response.data, "caiNianTuBiao")
addAuth(response.data, "xianTianCaiFu")
addAuth(response, "data")

$done({body : JSON.stringify(response)});
