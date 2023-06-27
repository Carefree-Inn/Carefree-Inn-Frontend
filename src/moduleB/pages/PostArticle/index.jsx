import Taro from "@tarojs/taro";
import {Image, Textarea, View} from "@tarojs/components";
import postImg from "../../../Images/image-fill.svg"
import hashTag from "../../../Images/hash.svg"
import "./index.less"


const PostArticle = () => {

  Taro.setNavigationBarTitle({
    title: '发布'
  })


  return (
    <View className='postArticle'>
      <View className='postArticleTop'>
        <View className='postArticleButton'>发布</View>
      </View>
      <Textarea className='postArticleContent' maxlength={888} placeholder='请输入内容'></Textarea>
      <View className='postArticleEndBar'>
        <Image className='postArticleImg1' src={postImg} />
        <Image className='postArticleImg2' src={hashTag} />
      </View>
    </View>
  )
}

export default PostArticle;
