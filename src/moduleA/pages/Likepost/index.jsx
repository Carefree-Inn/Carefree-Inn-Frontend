import { useReachBottom}from '@tarojs/taro'
/* import {  useState , useEffect} from 'react' */
import { View} from '@tarojs/components'
import { useEffect, useState } from 'react'
import { getJson } from '../../../Service/fet'
/* import { getJson } from '../../../Service/fet' */
import Mypost from '../../../Components/MyPost'
/* import Fetch from '../../../Service/fetch' */
import './index.less'


const Likepost=()=>{


    const [page,setPage] = useState(0)
    const limit = 10
    const [posts,setPosts] = useState([])
    const [fresh,setFresh] = useState(false)
    const [bottom,setBottom] = useState(false)

    useEffect(()=>{

        getJson(
            '/post/liked?page=' + page+1 + '&limit=' + limit,
            {}
        ).then(res=>{
            console.log(res.data)
            if(res.data.length>0)
               { setPosts(posts.concat(res.data))
                setPage(page+1)}
            else
                setBottom(true)
        })
    },[fresh])

    function test(){
        console.log(posts)
    }

    useReachBottom(() => {
        setFresh(true)
       // setPage(page+1)
     })
    

    return (
        <>
            <View className='like'>
                {posts.map((item)=>{
                    return(
                        <View className='post' onClick={test} key={item.post_id}>
                            <Mypost id={item.post_id} avatar={item.user_info.avatar} nickname={item.user_info.nickname} create_time={item.create_time}likes={item.likes} liked={item.liked} title={item.title} content={item.content} />
                        </View>
                    )
                })}
                <View className='btm'>{bottom?'已经到底啦!':''}</View>
            </View>
        </>
    )


}

export default Likepost;