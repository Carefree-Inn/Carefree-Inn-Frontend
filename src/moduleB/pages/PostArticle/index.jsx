import Taro from "@tarojs/taro";
import {Image, Picker, Text, Textarea, View} from "@tarojs/components";
import React, {useEffect, useState} from "react";
import postImg from "../../../Images/image-fill.svg"
import hashTag from "../../../Images/hash.svg"
import "./index.less"
import {getJson, postData} from "../../../fetch";
import AddTag from "../../../components/AddTag";


const PostArticle = () => {
//
  Taro.setNavigationBarTitle({
    title: '发布'
  })

  const [image, setImage] = useState([])
  const [tempImage, setTempImage] = useState([])
  const [imgStr, setImgStr] = useState('')
  const [hide, setHide] = useState(false)
  const [tags, setTags] = useState([])
  const [area, setArea] = useState([''])
  const [area1, setArea1] = useState([''])
  const [currentArea, setCurrentArea] = useState('')

  useEffect(() => {
      const imageStr = image.map(x => {
          return `<img class='cardContentImage' src='${x}'  alt={''}>`
        }
      ).join("")
      setImgStr(imageStr)
    },
    [image]
  )

  useEffect(() => {
    getJson('/post/category/all').then(r => {
      const sortedrdata = r.data.map((x) => x).sort((a, b) => a.CategoryId - b.CategoryId)
      setArea1(sortedrdata)
      const newArr = sortedrdata.map(x => x.Title);
      setArea(newArr)
    })
  }, [])

  const inputRef = React.createRef();

  const postImage = () => {

    Taro.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        setTempImage([...tempImage, tempFilePaths])
        for (const img in tempFilePaths) {
          Taro.uploadFile({
            url: 'http://139.196.30.123:8080/inn/api/v1/upload/file',
            filePath: tempFilePaths[img],
            name: 'image',
            success(r) {
              const obj = JSON.parse(r.data);
              setImage([...image, obj.data])
            }
          })
        }
      }
    })
  }

  const hideTag = () => {
    setHide(!hide)
  }

  const addTag = (e) => {
    setTags([...tags, ...e])
  }


  const handlePost = () => {
    let content = inputRef.current.value;

    if (area1 === ['']) {
      Taro.showModal({
        title: '提示',
        content: '请选择分区!',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return
    }
    if (content === '') {
      Taro.showModal({
        title: '提示',
        content: '请输入贴子内容!',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return
    }

    postData('/post', {
      "category": {
        "category_id": area1.find(x => x.Title === currentArea).CategoryId,
        "title": currentArea
      },
      "content": `<div class='cardContentText'>${content}</div>${imgStr.toString()}`,
      "title": ".",
      "tags": tags.map(x => ({tag: x}))
    })

    inputRef.current.value = '';
    Taro.navigateBack()
  };


  return (
    <View className='postArticle'>
      <View className='postArticleTop'>
        <View>
          <Picker range={area} onChange={(e) => {
            setCurrentArea(area[e.detail.value])
          }}
          >
            <View className='postArticlePicker'>
              当前分区：{currentArea}
            </View>
          </Picker>
        </View>
        <View className='postArticleButton' onClick={handlePost}>发布</View>
      </View>
      <View className='postArticleContent'>
        <View className='postArticleTags'>
          {tags.map((tag) => {
            return (<Text className='postArticleTag'>#{tag}</Text>)
          })}
        </View>
        <Textarea className='postArticleText' ref={inputRef} maxlength={888} placeholder='请输入内容'></Textarea>
        <View className='postImageContent'>
          {image.map((img) => {
            return (
              <View className='postImageBox'>
                <Image className='postImage' mode='widthFix' src={img} />
              </View>
            )
          })}
        </View>
      </View>
      <View className='postArticleEndBar'>
        <Image className='postArticleImg1' src={postImg} onClick={postImage} />
        <Image className='postArticleImg2' src={hashTag} onClick={hideTag} />
      </View>
      {hide ? <AddTag hideTag={hideTag} addTag={addTag}></AddTag> : ''}
    </View>
  )
}

export default PostArticle;
