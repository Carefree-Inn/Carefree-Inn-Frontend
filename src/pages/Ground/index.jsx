import Taro from '@tarojs/taro'
import {View, Input, Text, Image} from '@tarojs/components'
import './index.less'
import edit from '../../Images/edit.svg'
import GroundArticle from "../../components/GroundArticle";

const Ground = () => {

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

  return (
    <View className='ground'>
      <Input type='text' placeholder='搜索帖子' className='searchBox' />
      <View className='groundBox'>
        <View className='groundAreas'>
          <View className='groundArea'><Text>聊天嗑瓜子</Text></View>
          <View className='groundArea'><Text>二手物品</Text></View>
          <View className='groundArea'><Text>选课</Text></View>
          <View className='groundArea'><Text>学习组队</Text></View>
          <View className='groundArea'><Text>吃喝玩乐</Text></View>
        </View>
        <View className='cards'>
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
