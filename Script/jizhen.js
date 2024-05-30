var response = JSON.parse($response.body);

response.data.expires = "2099-09-09 09:09:09"
response.data.vipLevel = 1

$done({body : JSON.stringify(response)});
