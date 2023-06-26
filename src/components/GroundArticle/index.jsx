import Taro from "@tarojs/taro";
import {Image, Text, View} from "@tarojs/components";
import topic from "../../Images/topic.png";
import more from "../../Images/more.svg";
import like from "../../Images/like.svg"
import likefill from "../../Images/like-fill.svg"
import message from "../../Images/message.svg"
import heart from "../../Images/heart.svg"
import "./index.less"


const GroundArticle = (nickname, avatar, title, content, likes, create_time, liked) => {


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
    }).then(r => {
    })
  }


  return (

    <View className='card'>
      <View className='cardInfo'>
        <View className='cardUser'>
          <Image className='cardUserImg' src={avatar} />
          <Text className='cardUserName'>nickname</Text>
        </View>
        <View className='cardMore'>
          <View><Image className='cardMoreInfo' src={more} /></View>
          <View><Text className='cardTime'>create_time</Text></View>
        </View>
      </View>
      <View className='cardContent' onClick={goArticle}>
        <Text className='cardContentText'>content</Text>
        <Image className='cardContentImage' src='' />
        <Image className='cardContentImage' src='' />
        <Image className='cardContentImage' src='' />
        <Image className='cardContentImage' src='' />
      </View>
      <View className='cardLikeBox'>
        <View className='cardLikeBox2'>
          <Image className='cardLike' src={heart} />
          <Image className='cardLike' src={liked ? likefill : like} />
          <Image className='cardLike' src={message} />
        </View>
      </View>
    </View>
  )
}

export default GroundArticle;
