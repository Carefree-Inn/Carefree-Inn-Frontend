import Taro , { useReady,getCurrentInstance}from '@tarojs/taro'
import {  useState , useEffect} from 'react'
import { View, Image, Button} from '@tarojs/components'
import Mypost from '../../../Components/MyPost'
import { getJson } from '../../../Service/fet'
/* import Fetch from '../../../Service/fetch' */
import './index.less'


const Homepage=()=>{

  const [name,setName] = useState('')
  const [avatar,setAvatar] = useState('')
  const [posts,setPosts] = useState([])
  const [page,setPage] = useState(1)


  useReady(()=>{
   // console.log('Ready')
    const params = getCurrentInstance()
    const param = params.router.params
    console.log(param.name)
    setName(param.name)
    setAvatar(param.avatar)
  })

  useEffect(()=>{

    getJson(
      '/post/user?page=' + page +'&limit=' + 10
      )
      .then(res=>{
        console.log(res.data)
        setPosts(res.data)
      })
  },[])

  function toEdit(){
    Taro.navigateTo({
      url:'/moduleA/pages/EditInfo/index'
    })
  }
  
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
              <Mypost id={item.post_id} avatar={item.user_info.avatar} nickname={item.user_info.nickname} create_time={item.create_time}likes={item.likes} liked={item.liked} title={item.title} content={item.content} />
          </View>
         )})}
      </View>
    </View>
    </>
  )
}
export default Homepage;
