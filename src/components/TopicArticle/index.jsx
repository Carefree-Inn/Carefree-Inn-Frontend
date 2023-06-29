import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import {Image, Text, View} from "@tarojs/components";
import more from "../../Images/more.svg";
import like from "../../Images/like.svg"
import liked from "../../Images/like-fill.svg"
import message from "../../Images/message.svg"
import "./index.less"
import { getJson } from "../../Service/fetch";


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
        console.log(data.data)
        setSender(data.data)
      }
    )
  },[])

  const handleOnClick = () => {
    if(article_info.liked){
      cancelLikeClick(article.post_id)
    } else {
      const query = {
        from_user_avatar: sender.avatar,
        from_user_nickname: sender.nickname,
        post_id: article.post_id,
        to_user_account: user.account
      }
      console.log(query)
      onLikeClick(query)
    }
  }

  const goArticle = () => {
    Taro.navigateTo({
      url: `/moduleB/pages/Article/index?post_id=${article.post_id}`,
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
      <View dangerouslySetInnerHTML={{__html: `${article.content}`}}></View>{/* 解析html */}
       
      </View>
      <View className='cardLikeBox'>
        <View className='category'>{article_info.category.title}</View>{/* 分区 */}
        <View className='cardLikeBox2'> 
          <View className='box3'>
            <Image className='cardLike' 
              src={article_info.liked?liked:like} 
              onClick={handleOnClick}
            />
            <View className='num'>{article_info.likes}</View>
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
