import {Image, Text, View} from "@tarojs/components";
import topic from "../../../Images/topic.png";
import like from "../../../Images/like.svg";
import "./index.less"

const ArticleComment = () => {


  return (
    <View className='articleComment'>
      <View className='cardUser'>
        <Image className='cardUserImg' src={topic} />
      </View>
      <View className='articleCommentContent'>
        <Text className='articleCommentUserName'>用户名</Text>
        <Text>好漂亮啊</Text>
      </View>
      {/*<View className='articleCommentLike'>*/}
      {/*  <Image className='articleCommentLikeImg' src={like} />*/}
      {/*  <Text>123</Text>*/}
      {/*</View>*/}
    </View>
  )
}

export default ArticleComment;
