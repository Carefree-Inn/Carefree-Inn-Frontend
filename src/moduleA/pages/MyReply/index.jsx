import { useReady,getCurrentInstance,useReachBottom}from '@tarojs/taro'
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

   useReachBottom(() => {
    setPage(page+1)
 })

   useEffect(()=>{
        getJson(
            '/notification/history?page=' + page + '&limit=' + limit
            )
        .then(res=>{
            console.log(res)
            setHis(res.data)
        })
   },[page])

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
                            <Notification key={item.action_time} type={item.action_type}  id={item.post_id} comment_name={item.from_user_nickname} like_name={item.from_user_nickname} create_time={item.action_time}  content={item.comment_content} comment_time={item.action_time} avatar={item.from_user_avatar} />
                        )
                    })}  
                </View>
            </View>
        </>
    )
}

export default MyReply;