var response = JSON.parse($response.body);

response.data = response.data || {};
response.data.vipInfo = response.data.vipInfo || {};

response.data.vipInfo.allAuthority = true;
response.data.vipInfo.vipType = "diamond";

$done({
  body: JSON.stringify(response)
});
