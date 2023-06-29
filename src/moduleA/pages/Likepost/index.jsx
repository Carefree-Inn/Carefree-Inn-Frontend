import { useReachBottom}from '@tarojs/taro'
/* import {  useState , useEffect} from 'react' */
import { View} from '@tarojs/components'
import { useEffect, useState } from 'react'
import { getJson } from '../../../Service/fetch'
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
        const p = page+1
        getJson(
            '/post/liked?page=' + p + '&limit=' + limit,
            {}
        ).then(res=>{
            console.log(res.data)
            if(res.data.length>0)
               { setBottom(false)
                setPosts(posts.concat(res.data))
                setPage(p)}
            else
                setBottom(true)
        })
    },[fresh])
    
    useReachBottom(() => {
        setFresh(!fresh)
       // setPage(page+1)
     })
    

    return (
        <>
            <View className='like'>
                {posts.map((item)=>{
                    return(
                        <View className='post'  key={item.post_id}>
                            <Mypost id={item.post_id} tags={item.tags} category={item.category.title} comments={item.comments} avatar={item.user_info.avatar} nickname={item.user_info.nickname} create_time={item.create_time}likes={item.likes} useraccount={item.from_user_account} account={item.to_user_account}  liked={item.liked} title={item.title} content={item.content} />
                        </View>
                    )
                })}
                <View className='btm'>{bottom?'已经到底啦!':''}</View>
            </View>
        </>
    )


}

export default Likepost;