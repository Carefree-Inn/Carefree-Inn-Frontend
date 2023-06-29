import Taro, {usePullDownRefresh} from '@tarojs/taro'
import {View, Input, Text, Image} from '@tarojs/components'
import {useEffect, useState} from 'react';
import './index.less'
import edit from '../../Images/edit.svg'
import search from '../../Images/search.png'
import GroundArticle from "../../components/GroundArticle";
import {getJson} from "../../fetch";

const Ground = () => {

  const [area, setArea] = useState([])
  const [CategoryId, setCategoryId] = useState(1)
  const [article, setArticle] = useState([])
  const [user, setUser] = useState([])

  const [searchContent, setSearchContent] = useState('')

  useEffect(() => {
      getJson('/post/category/all').then(r => {
        const sortedrdata = r.data.map((x) => x).sort((a, b) => a.CategoryId - b.CategoryId)
        setArea(sortedrdata)
      })
      getJson('/user/profile').then(r => {
        setUser(r.data)
      })
    },
    []
  )

  useEffect(() => {
    getJson(`/post/category?category_id=${CategoryId}`).then(r => {
      setArticle(r.data)
    })
  }, [CategoryId])

  usePullDownRefresh(() => {
    getJson(`/post/category?category_id=${CategoryId}`).then(r => {
      setArticle(r.data)
    })
  })

  const goPostArticle = () => {
    Taro.navigateTo({url: '/moduleB/pages/PostArticle/index'})
  }

  const changeArea = (Id) => {
    setCategoryId(Id)
  }

  const searchArticles = () => {
    Taro.navigateTo({
      url: `/moduleB/pages/TopicSearchResult/index?keyword=${searchContent}`
    })
  }

  return (
    <View className='ground'>
      <View className='search-box'>
        <Input
          className='search-input'
          type='text'
          placeholder='搜索帖子'
          value={searchContent}
          onInput={(e) => setSearchContent(e.detail.value)}
          onConfirm={searchArticles}
        />
        <View className='search-icon-box' onClick={searchArticles}>
          <Image className='search-icon' src={search} />
        </View>
      </View>
      {/*<Input type='text' placeholder='搜索帖子' className='searchBox' />*/}
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
          {article.map((art) => {
            return (
              <GroundArticle key='create_time' nickname={art.user_info.nickname} avatar={art.user_info.avatar} title={art.title}
                content={art.content} likes={art.likes} comments={art.comments} account={art.user_info.account}
                tags={art.tags} create_time={art.create_time} liked={art.liked} post_id={art.post_id}
                useraccount={user.account} useravatar={user.avatar} username={user.nickname}
                category={art.category}
              ></GroundArticle>)
          })}
        </View>
      </View>
      <View className='groundPostArticle' onClick={goPostArticle}>
        <Image className='groundPostArticleImg' src={edit} />
      </View>
    </View>
  )
}
export default Ground;
