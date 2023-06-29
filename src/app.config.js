export default ({
  pages: [
    'pages/Login/index',
    'pages/Mine/index',
    'pages/Topic/index',
    'pages/Ground/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#FFEFEA',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  subpackages: [//分包
    {
      root: "moduleA",
      pages: [
       'pages/Homepage/index',
       "pages/EditInfo/index",
       'pages/Likepost/index',
       'pages/MyReply/index'
      ],
      independent: false
    }, 
    {
      root: "moduleB",
      pages: [
        'pages/Article/index',
        'pages/PostArticle/index',
        'pages/TopicArticle/index',
        'pages/InitUserInfo/index',
        'pages/TopicSearchResult/index',
        'pages/Article/index',
        'pages/PostArticle/index'
      ],
    }
    

  ],
    tabBar: {
      /* tab页面必须放在主包里 */
      list: [
        {
          pagePath: 'pages/Topic/index',
          text:'话题',
          iconPath: 'Images/topic.png',
          selectedIconPath: 'Images/topic-selected.png'
        },
        {
          pagePath: 'pages/Ground/index',
          text:'广场',
          iconPath: 'Images/ground.png',
          selectedIconPath: 'Images/ground-selected.png',
  
        },
        {
          pagePath: 'pages/Mine/index',
          text:'个人',
          iconPath: 'Images/mine.png',
          selectedIconPath: 'Images/mine-selected.png'
        }],
        color: '#000000',
        backgroundColor: '#F5E3E3',
        selectedColor: '#D39999'
      }
})
