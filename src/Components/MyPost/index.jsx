import Taro from "@tarojs/taro";
import {Image, Text, View} from "@tarojs/components";
import more from "../../Images/more.svg";
import like from "../../Images/like.svg";
import likefill from "../../Images/like-fill.svg";
import message from "../../Images/message.svg";
import "./index.less";



const Mypost = (props) => {



    const {nickname, avatar, content,liked, create_time, likes, id} = props


  const goArticle = () => {
    Taro.navigateTo({
      url: `/moduleB/pages/Article/index?post_id=${id}`,
      
    })
  }

  return (

    <View className='card'>
      <View className='cardInfo'>
        <View className='cardUser'>
          <Image className='cardUserImg' src={avatar} />
          <Text className='cardUserName'>{nickname}</Text>
        </View>
        <View className='cardMore'>
          <View><Image className='cardMoreInfo' src={more} /></View>
          <View><Text className='cardTime'>{create_time}</Text></View>
        </View>
      </View>
      <View className='cardContent' onClick={goArticle}>
        <Text className='cardContentText'>{content}</Text>
        <Image className='cardContentImage' src='' />
        <Image className='cardContentImage' src='' />
        <Image className='cardContentImage' src='' />
        <Image className='cardContentImage' src='' />
      </View>
      <View className='cardLikeBox'>
        <View className='cardLikeBox2'>
            <View className='box3'>
                <Image className='cardLike' src={liked ? likefill : like} />
                <View className='num'>{likes}</View>
            </View>
            <View className='box3'>
                <Image className='cardLike' src={message} />
                <View className='num'>10</View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default Mypost;