import Taro from "@tarojs/taro";
import {Button, Text, Textarea, View} from "@tarojs/components";
import React from "react";
import "./index.less"


const AddTag = (props) => {


  const inputRef = React.createRef();
  const addTag = () => {
    let content = inputRef.current.value;
    let tags = content.split(/;|；/)
    props.addTag(tags)
    props.hideTag()
  }

  return (
    <View className='addTag'>
      <View className='toastbg'></View>
      <View className='addTagBox'>
        <View className='addTagTitle'>添加标签</View>
        <View className='addTagText'>
          <Textarea className='addTagText1' ref={inputRef} maxlength={88} placeholder='请输入标签，多个标签用分号分隔'></Textarea>
        </View>
        <View className='addTagConfirm'>
          <View className='addTagButton' onClick={props.hideTag}>取消</View>
          <View className='addTagButton' onClick={addTag}>确定</View>
        </View>
      </View>
    </View>
  )
}

export default AddTag;
