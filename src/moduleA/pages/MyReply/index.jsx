import { useReady,getCurrentInstance,useReachBottom}from '@tarojs/taro'
import { View} from '@tarojs/components'
import { useEffect, useState } from 'react'
import Notification from '../../../Components/Notification'
/* import Fetch from '../../../Service/fetch' */
import './index.less'
import { getJson } from '../../../Service/fetch'



const MyReply = ()=>{


    const [msg,setMsg] = useState([])
    const [his,setHis] = useState([])//历史通知
    const [page,setPage] = useState(0)
    const limit =10
    const [fresh,setFresh] = useState(false)//刷新标识
    const [bottom,setBottom] = useState(false)

  useReady(()=>{
    // console.log('Ready')
     const params = getCurrentInstance()
     const param = params.router.params
     const data = JSON.parse(param.message)
    // console.log( JSON.parse(param.message))
     setMsg(data.data)
     //const data = JSON.parse(param.message)
    // setMsg(data.data)
   })

   //触底刷新
   useReachBottom(() => {
    setFresh(!fresh)
    //setPage(page+1)
 })

   useEffect(()=>{
        const p = page+1
        getJson(
            '/notification/history?page=' + p + '&limit=' + limit
            )
        .then(res=>{
            console.log(res)
            console.log(res.data.length)
            if(res.data.length>0)
            {   setBottom(false)
                setPage(p)
                setHis(his.concat(res.data))
            }
            else
                setBottom(true)
        })
   },[fresh])



    return (
        <>
            <View className='reply'>
                <View className='lastest'>最新</View>
                <View className='l_box'>
                    {msg.map((item)=>{
                        return(
                            <Notification key={item.create_time} is_to_post={item.is_to_post} id={item.post_id} comment_name={item.from_user_nick_name} like_name={item.from_user_nickname} create_time={item.create_time} like_type={item.like_type} content={item.content} comment_time={item.comment_time} avatar={item.from_user_avatar} />
                        )
                    })}
                </View>
                <View className='history'>历史</View>
                <View className='h_box'>
                {his.map((item)=>{
                        return(
                            <Notification key={item.action_time} type={item.action_type} is_to_post={item.is_to_post} id={item.post_id} comment_name={item.from_user_nickname} like_name={item.from_user_nickname} create_time={item.action_time}  content={item.comment_content} comment_time={item.action_time} avatar={item.from_user_avatar} />
                        )
                    })}  
                </View>
                <View className='btm'>{bottom?'已经到底啦!':''}</View>
            </View>
        </>
    )
}

export default MyReply;