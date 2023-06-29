import Taro , { useReady,getCurrentInstance,useReachBottom}from '@tarojs/taro'
import {  useState , useEffect} from 'react'
import { View, Image, Button} from '@tarojs/components'
import Mypost from '../../../Components/MyPost'
import { getJson } from '../../../Service/fetch'
/* import Fetch from '../../../Service/fetch' */
import './index.less'


const Homepage=()=>{

  const [name,setName] = useState('')
  const [avatar,setAvatar] = useState('')
  const [posts,setPosts] = useState([])
  const [page,setPage] = useState(0)
  const [bottom,setBottom] = useState(false)
  const [fresh,setFresh] = useState(false)

  useReady(()=>{
   // console.log('Ready')
    const params = getCurrentInstance()
    const param = params.router.params
    console.log(param.name)
    setName(param.name)
    setAvatar(param.avatar)
  })

  useEffect(()=>{
    const p = page+1
    getJson(
      '/post/user?page=' + p +'&limit=' + 10
      )
      .then(res=>{
        console.log(res.data)
        if(res.data.length>0)
        {  setBottom(false)
          setPosts(posts.concat(res.data))
            setPage(p)
            } //没有新帖子, 页面回到之前
        else
          setBottom(true) 
       // setPosts(res.data)
      })
  },[fresh])

  function toEdit(){
    Taro.navigateTo({
      url:'/moduleA/pages/EditInfo/index'
    })
  }
//触底刷新
  useReachBottom(() => {
    setFresh(!fresh)
   // setPage(page+1)
 })

  return (

    <>
    <View className='home'>
      <View className='edit'>
        <Button onClick={toEdit}>编辑</Button>
      </View>
      <View className='top'>
        <View className='name'>{name}</View>
        <View className='avatar'>
          <Image src={avatar}></Image>
        </View>
      </View>
      <View className='bottom'>
       {/*  <View className='nav'> */}
        <View className='publish'>我发布的</View>
        {/* </View> */}
        {posts.map((item)=>{ return(
           <View className='post' key={item.post_id}>
              <Mypost id={item.post_id} avatar={item.user_info.avatar} category={item.category.title} nickname={item.user_info.nickname} create_time={item.create_time}likes={item.likes} comments={item.comments} liked={item.liked} title={item.title} content={item.content} />
          </View>
         )})}
      </View>
      <View className='btm'>{bottom?'已经到底啦!':''}</View>
    </View>
    </>
  )
}
export default Homepage;
