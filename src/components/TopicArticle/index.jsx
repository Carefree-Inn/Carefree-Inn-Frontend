import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import {Image, Text, View} from "@tarojs/components";
import more from "../../Images/more.svg";
import like from "../../Images/like.svg"
import liked from "../../Images/like-fill.svg"
import message from "../../Images/message.svg"
import "./index.less"
import { getJson, postData } from "../../Service/fetch";


const TopicArticle = ({article_info, onLikeClick, cancelLikeClick}) => {

  const [article,setArticle] = useState({})
  const [user,setUser] = useState({})
  const [sender,setSender] = useState({})

  useEffect(() => {
    // console.log(article_info)
    // console.log(article_info['user_info'])                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
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

    getJson('/user/profile').then(
      data => {
        setSender(data.data)
      }
    )
  },[])

  const onLike = () => {

    const query = {
      from_user_avatar: sender.avatar,
      from_user_nickname: user.nickname,
      post_id: article.post_id,
      to_user_account: user.account
    }
    console.log(query)
    // onLikeClick(query)
    // postData('/like',{
    //   from_user_avatar: sender.avatar,
    //   from_user_nickname: user.nickname,
    //   post_id: article.post_id,
    //   to_user_account: user.account
    // }).then(
    //   data => {
    //     console.log(data)
    //   }
    // )
  }

  const cancelLike = () => {
    // cancelLike(article.post_id)
  }

  const goArticle = () => {
    Taro.navigateTo({
      url: `/moduleB/pages/Article/index?post_id=${article.post_id}`,
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
          <Image className='cardUserImg' src={user.avatar} />
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
        <View className='category'>{article_info.category.title}</View>{/* 分区 */}
        <View className='cardLikeBox2'> 
          <View className='box3'>
            <Image className='cardLike' 
              src={article_info.liked?liked:like} 
              onClick={onLike}
            />
            <View className='num'>{article.likes}</View>
          </View>
          <View className='box3'>
            <Image className='cardLike' src={message} />
            <View className='num'>{article_info.comments}</View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default TopicArticle;
