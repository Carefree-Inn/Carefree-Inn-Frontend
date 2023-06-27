import { useReady,getCurrentInstance}from '@tarojs/taro'
import { View} from '@tarojs/components'
import { useEffect, useState } from 'react'
import Notification from '../../../Components/Notification'
/* import Fetch from '../../../Service/fetch' */
import './index.less'
import { getJson } from '../../../Service/fet'



const MyReply = ()=>{


    const [msg,setMsg] = useState([])
    const [his,setHis] = useState([])//历史通知
    const [page,setPage] = useState(1)
    const limit =10
  useReady(()=>{
    // console.log('Ready')
     const params = getCurrentInstance()
     const param = params.router.params
     const data = JSON.parse(param.message)
     console.log( JSON.parse(param.message))
     setMsg(data.data)
     //const data = JSON.parse(param.message)
    // setMsg(data.data)
   })

   useEffect(()=>{
        getJson(
            '/notification/history?page=' + page + '&limit=' + limit
            )
        .then(res=>{
            console.log(res)
            setHis(res.data)
        })
   },[])

    return (
        <>
            <View className='reply'>
                <View className='lastest'>最新</View>
                <View className='l_box'>
                    {msg.map((item)=>{
                        return(
                            <Notification key={item.create_time} id={item.post_id} comment_name={item.from_user_nick_name} like_name={item.from_user_nickname} create_time={item.create_time} like_type={item.like_type} content={item.content} comment_time={item.comment_time} avatar={item.from_user_avatar} />
                        )
                    })}
                </View>
                <View className='history'>历史</View>
                <View className='h_box'>
                {his.map((item)=>{
                        return(
                            <Notification key={item.create_time} type={item.ActionType}  id={item.PostId} comment_name={item.FromUserNickname} like_name={item.FromUserNickname} create_time={item.ActionTime}  content={item.CommentContent} comment_time={item.ActionTime} avatar={item.FromUserAvatar} />
                        )
                    })}  
                </View>
            </View>
        </>
    )
}

export default MyReply;