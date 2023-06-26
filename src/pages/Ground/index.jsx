import Taro from '@tarojs/taro'
import {View, Input, Text, Image} from '@tarojs/components'
import {useEffect, useState} from 'react';
import './index.less'
import edit from '../../Images/edit.svg'
import GroundArticle from "../../components/GroundArticle";
import {getJson, postData} from "../../fetch";

const Ground = () => {

  const [area, setArea] = useState([])
  const [CategoryId, setCategoryId] = useState(1)
  const [article, setArticle] = useState([])

  useEffect(() => {
      getJson('/post/category/all').then(r => {
          const sortedrdata = r.data.map((x) => x).sort((a, b) => a.CategoryId - b.CategoryId)
          setArea(sortedrdata)
        }
      )
    },
    []
  )

  useEffect(() => {
    getJson('/post/category', {category_id: CategoryId}).then(r => {
      setArticle(r.data)
    })
  }, [CategoryId])


  const goPostArticle = () => {
    Taro.navigateTo({
      url: '/moduleB/pages/PostArticle/index',
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

  const changeArea = (Id) => {
    setCategoryId(Id)
  }

  return (
    <View className='ground'>
      <Input type='text' placeholder='搜索帖子' className='searchBox' />
      <View className='groundBox'>
        <View className='groundAreas'>
          {area.map((ar) => {
            return (
              <View className='groundArea' key='CategoryId' onClick={() => {
                changeArea(ar.CategoryId)
              }}
              ><Text>{ar.Title}</Text></View>
            )
          })}
        </View>
        <View className='cards'>
          {/*{article.map((art) => {*/}
          {/*  <GroundArticle nickname={art.nickname} avatar={art.avatar} title={art.title} content={art.content} likes={art.likes}*/}
          {/*    create_time={art.create_time} liked={art.liked}*/}
          {/*  ></GroundArticle>*/}
          {/*})}*/}
          <GroundArticle></GroundArticle>
          <GroundArticle></GroundArticle>
        </View>
      </View>
      <View className='groundPostArticle' onClick={goPostArticle}>
        <Image className='groundPostArticleImg' src={edit} />
      </View>
    </View>
  )
}
export default Ground;
