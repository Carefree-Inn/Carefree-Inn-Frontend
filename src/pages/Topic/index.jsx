import Taro from '@tarojs/taro'
import {useState, useEffect} from 'react'
import {View, Text, Input, Image} from '@tarojs/components'
import search from '../../Images/search.png'
import background from '../../Images/flower.jpg'
import './index.less'
import {getJson} from '../../Service/fetch'


const Topic = () => {

  const [topics, setTopics] = useState([])
  const [searchContent, setSearchContent] = useState('')

  useEffect(() => {
    getJson('/post/square').then(
      data => {
        console.log(data)
        setTopics(data.data)
      }
    )
  }, [])

  const toArticles = (topic) => {
    Taro.navigateTo({
      url: `/moduleB/pages/TopicArticles/index?topic=${topic}`
    })
  }

  const searchArticles = () => {
    console.log('22222222222222222')
    Taro.navigateTo({
      url: `/moduleB/pages/TopicSearchResult/index?keyword=${searchContent}`
    })
  }

  return (
    <View className='topic-wrapper'>

      <View className='search-box'>
        <Input
          placeholder='#'
          className='search-input'
          type='text'
          confirmType='search'
          value={searchContent}
          onInput={(e) => setSearchContent(e.detail.value)}
          onConfirm={searchArticles}
        />
        <View className='search-icon-box' onClick={searchArticles}>
          <Image className='search-icon' src={search} />
        </View>
      </View>
      <View className='topic-title'>
        <Text>今日话题</Text>
      </View>
      <View className='topic-content-box'>
        <View className='topic-list'>
          {
            topics.map((topic, index) => {
              return <View key={`${index}`} className='topic-item' onClick={() => toArticles(topic)}>
                <View className={`topic-item-order ${index < 3 ? 'active' : ''}`}>{index + 1}</View>
                <View className='topic-item-content'>{`#${topic}`}</View>
              </View>
            })
          }
          {/* <View className='topic-item'>
            <View className='topic-item-order'>1</View>
            <View className='topic-item-content'>#今天吃什么</View>
          </View>
          <View className='topic-item'>
            <View className='topic-item-order'>2</View>
            <View className='topic-item-content'>#看樱花</View>
          </View>
          <View className='topic-item'>
            <View className='topic-item-order'>3</View>
            <View className='topic-item-content'>#早八</View>
          </View>
          <View className='topic-item'>
            <View className='topic-item-order'>4</View>
            <View className='topic-item-content'>#停水停电</View>
          </View> */}
        </View>
      </View>
      <Image className='topic-background-img' src={background} />
    </View>
  )
}
export default Topic;
