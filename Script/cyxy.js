var obj = JSON.parse($response.body);
obj = Object.assign(obj,
{
  "point": {
  },
  "rc": 0,
  "user": {
    "_id": "632933fc2f54ba000f53afe1",
    "biz": {
      "device_id": "",
      "_id": "632933fc2f54ba000f53afe1",
      "is_visitor": false,
      "created_at": 1663644668.0604190826,
      "platform_name": "qq",
      "is_phone_verified": false,
      "last_acted_at": 1663823249.2639560699,
      "hasBeenInvited": false,
      "is_xy_vip": true,
      "vip_expired_at": 2069311538,
      "is_vip": true,
      "score": 2000,
      "xy_vip_type": "s",
      "xy_svip_expire": 2069311538,
      "auto_renewal_type": "",
      "third_party_ids": [
      ],
      "name": "Zero24",
      "vip_take_effect": 1,
      "is_auto_renewal": true,
      "avatar": "http://thirdqq.qlogo.cn/g?b=oidb&k=EEtwoAXRQcOvz4yPibhJjyg&s=100&t=1580358266",
      "platform_id": "UID_AC69ABD7410348DB4E66396742483CB9",
      "is_primary": true,
      "phone_num": "",
      "gender": "0",
      "xy_vip_expire": 2069311538,
      "is_xy_auto_renewal": true,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNjMyOTMzZmMyZjU0YmEwMDBmNTNhZmUxIiwic3ZpcF9leHBpcmVkX2F0IjowLCJ2aXBfZXhwaXJlZF9hdCI6MH0.tEVHjYDDqTjONkSVKvKpMWMgvGP8BCACHbEcAmIlGeM",
      "is_kol": false,
      "is_login": true,
      "svip_expired_at": 2069311538,
      "svip_take_effect": 1,
      "vip_type": "s",
      "bound_status": {
        "qq": {
          "id": "632933fc2f54ba000f53afe1",
          "username": "Zero24",
          "is_bound": true
        },
        "google": {
          "id": "",
          "username": "",
          "is_bound": false
        },
        "weixin": {
          "id": "",
          "username": "",
          "is_bound": false
        },
        "caiyun": {
          "id": "",
          "username": "",
          "is_bound": false
        },
        "twitter": {
          "id": "",
          "username": "",
          "is_bound": false
        },
        "facebook": {
          "id": "",
          "username": "",
          "is_bound": false
        },
        "apple": {
          "id": "",
          "username": "",
          "is_bound": false
        },
        "weibo": {
          "id": "",
          "username": "",
          "is_bound": false
        }
      }
    },
    "created_at": 1663644668,
    "id": "632933fc2f54ba000f53afe1",
    "total_doc_translate_remain": 3000,
    "total_video_addition_remain": 3000,
    "daily_share_count": 0,
    "daily_sentence_count": 0,
    "is_visitor": false,
    "addition_quota": {
      "doc_download": [
      ],
      "image_translate": [
      ],
      "video_translate": [
      ]
    },
    "type": "registered",
    "free_download_count": 1,
    "free_download_times_remain": 30000,
    "xy_svip_expire": 2069311538,
    "daily_comment_count": 0,
    "avatar_url": "http://thirdqq.qlogo.cn/g?b=oidb&k=EEtwoAXRQcOvz4yPibhJjyg&s=100&t=1580358266",
    "email": "",
    "total_doc_addition_remain": 30000,
    "has_audio_permission": true,
    "page_favorite_count": 0,
    "doc_trans_block": false,
    "vip_download_word_count": 0,
    "username": "Zero24",
    "vip_take_effect": 1,
    "status": "",
    "continuous_reading_count": 1,
    "user_quota": {
      "doc_download": {
        "quota": 0,
        "remain": 0
      },
      "video_translate": {
        "quota": 900,
        "remain": 900
      },
      "image_translate": {
      },
      "update_time": 1666195200
    },
    "total_video_translate_remain": 900,
    "updated_at": 1663896379,
    "xy_vip_expire": 2069311538,
    "official_account_following_count": 0,
    "mvp_count": 477,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNjMyOTMzZmMyZjU0YmEwMDBmNTNhZmUxIiwic3ZpcF9leHBpcmVkX2F0IjowLCJ2aXBfZXhwaXJlZF9hdCI6MH0.tEVHjYDDqTjONkSVKvKpMWMgvGP8BCACHbEcAmIlGeM",
    "has_doc_permission": true,
    "point": 300,
    "translation_count": 0,
    "reading_page_count": 0,
    "reading_time_this_week": 0,
    "svip_take_effect": 1,
    "member_type": "normal",
    "remain_user_quota": null,
    "be_liked_count": 0,
    "vip_type": "s"
  }
})

$done({body: JSON.stringify(obj)});
