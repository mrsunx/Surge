var response = JSON.parse($response.body);

response.data.vipExpireTimeStr = "2099-09-09 09:09:09"
response.data.vipType = "diamond"

$done({body : JSON.stringify(response)});
