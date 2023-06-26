import Taro from "@tarojs/taro";
import {Image, Textarea, View} from "@tarojs/components";
import React from "react";
import * as qiniu from 'qiniu-js'
import postImg from "../../../Images/image-fill.svg"
import hashTag from "../../../Images/hash.svg"
import "./index.less"
import {postData} from "../../../fetch";


const PostArticle = () => {

  Taro.setNavigationBarTitle({
    title: '发布'
  })

  const inputRef = React.createRef();

  const handlePost = () => {
    let content = inputRef.current.value;

    postData('',
      {
        "category": {
          "category_id": 47,
          "title": ""
        },
        "content": `<Text className='cardContentText'>${content}</Text>`,
        "title": "",
        "tags": [
          {
            "tag": "dolore et fugiat nisi"
          },
          {
            "tag": "Ut non enim"
          },
          {
            "tag": "esse officia"
          },
          {
            "tag": "magna reprehenderit"
          },
          {
            "tag": "Excepteur nisi officia amet"
          }
        ]
      })

    inputRef.current.value = '';
  };


  return (
    <View className='postArticle'>
      <View className='postArticleTop'>
        <View className='postArticleButton'>发布</View>
      </View>
      <Textarea className='postArticleContent' ref={inputRef} maxlength={888} placeholder='请输入内容'></Textarea>
      <View className='postArticleEndBar'>
        <Image className='postArticleImg1' src={postImg} />
        <Image className='postArticleImg2' src={hashTag} />
      </View>
    </View>
  )
}

export default PostArticle;
