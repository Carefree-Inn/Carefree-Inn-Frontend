import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import {Image, Text, View} from "@tarojs/components";
import topic from "../../Images/topic.png";
import more from "../../Images/more.svg";
import like from "../../Images/like.svg"
import message from "../../Images/message.svg"
import heart from "../../Images/heart.svg"
import "./index.less"


const GroundArticle = ({article_info}) => {

  const [article,setArticle] = useState({})
  const [user,setUser] = useState({})

  useEffect(() => {
    console.log(article_info)
    console.log(article_info['user_info'])
    setArticle({
      category: article_info.category,
      content: article_info.content,
      create_time: article_info.create_time,
      liked: article_info.liked,
      likes: article_info.likes,
      post_id: article_info.post_id,
      tags: article_info.tags,
      title: article_info.title
    })
    setUser(article_info['user_info'])
  },[])

  const goArticle = () => {
    Taro.navigateTo({
      url: '/moduleB/pages/Article/index',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log(data)
        },
        someEvent: function (data) {
          console.log(data)
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', {data: 'test'})
      }
    })
  }

  return (
    <View className='card'>
      <View className='cardInfo'>
        <View className='cardUser'>
          <Image className='cardUserImg' src={user.avatar?user.avatar:topic} />
          <Text className='cardUserName'>{user.nickname}</Text>
        </View>
        <View className='cardMore'>
          <View><Image className='cardMoreInfo' src={more} /></View>
          <View><Text className='cardTime'>{article.create_time}</Text></View>
        </View>
      </View>
      <View className='cardContent' onClick={goArticle}>
        <Text className='cardContentText'>{article.content}</Text>
        <Image className='cardContentImage' src='' />
        <Image className='cardContentImage' src='' />
        <Image className='cardContentImage' src='' />
        <Image className='cardContentImage' src='' />
      </View>
      <View className='cardLikeBox'>
        <View className='cardLikeBox2'>
          <Image className='cardLike' src={heart} />
          <Image className='cardLike' src={like} />
          <Image className='cardLike' src={message} />
        </View>
      </View>
    </View>
  )
}

export default GroundArticle;
