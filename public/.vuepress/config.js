module.exports = {
  "base":"/",
  "title": "慕随心",
  "description": "见素抱朴，少私寡欲，绝学无忧",
  "dest": "docs",
  "theme": "reco",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "在线文档",
        "icon": "reco-document",
        "items": [
          {
            "text": "Vue",
            "link": "https://cn.vuejs.org/v2/api/",
          }, {
            "text": "Vuex",
            "link": "https://vuex.vuejs.org/zh/api/#vuex-store",
          },{
            "text": "Java全栈知识",
            "link": "https://www.pdai.tech/",
          },{
            "text": "李卫民-微服务",
            "link": "https://www.funtl.com/",
          }
        ]
      },
      {
        "text": "个人站点",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/musuixin/",
            "icon": "reco-github"
          },        {
            "text": "CSDN",
            "link": "https://blog.csdn.net/qq_36618531",
            "icon": "reco-csdn"
          },  {
            "text": "Twitter",
            "link": "https://twitter.com/musuixin",
            "icon": "reco-twitter"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    // "friendLink": [
    //   {
    //     "title": "午后南杂",
    //     "desc": "Enjoy when you can, and endure when you must.",
    //     "email": "1156743527@qq.com",
    //     "link": "https://www.recoluan.com"
    //   },
    //   {
    //     "title": "vuepress-theme-reco",
    //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     "link": "https://vuepress-theme-reco.recoluan.com"
    //   }
    // ],
    // "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "慕随心",
    "authorAvatar": "/avatar.jpg",
    // "record": "xxxx",
    "startYear": "2019"
  },
  "markdown": {
    "lineNumbers": true
  }
}
