import Taro from "@tarojs/taro";
import {View, Input, Text, Button, Image, Icon} from '@tarojs/components'
import './index.less'
import topic from "../../../Images/topic.png";
import more from "../../../Images/more.png";
import like from "../../../Images/like.svg"
import heart from "../../../Images/heart.svg"
import ArticleComment from "../../component/ArticleComment";


const Article = () => {

  Taro.setNavigationBarTitle({
    title: ''
  })


  return (
    <View className='Article'>
      <View className='ArticleBox'>
        <View className='card'>
          <View className='cardInfo'>
            <View className='cardUser'>
              <Image className='cardUserImg' src={topic} />
              <Text className='cardUserName'>用户名</Text>
            </View>
            <View className='cardMore'>
              <View><Image className='cardMoreInfo' src={more} /></View>
              <View><Text className='cardTime'>2023-3-13 14:30</Text></View>
            </View>
          </View>
          <View className='cardContent'>
            <Text className='cardContentText'>123455555555555556666666666666666666666666666666666666666666666666666666</Text>
            <Image className='cardContentImage' src='' />
            <Image className='cardContentImage' src='' />
            <Image className='cardContentImage' src='' />
            <Image className='cardContentImage' src='' />
          </View>
        </View>
        <View className='articleComments'>
          <ArticleComment></ArticleComment>
          <ArticleComment></ArticleComment>
        </View>
      </View>
      <View className='articlePostComment'>
        <Input type='text' className='articlePostCommentInput'></Input>
        <Image className='articleLike' src={heart} />
        <Image className='articleLike' src={like} />
      </View>
    </View>
  )
}

export default Article;
