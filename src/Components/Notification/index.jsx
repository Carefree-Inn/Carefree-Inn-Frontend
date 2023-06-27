
import {Image, Text, View} from "@tarojs/components";
import { useEffect, useState } from "react";
//import mine from '../../Images/avatar.png'
import './index.less'
import { getJson } from "../../Service/fet";



const Notification = (props) =>{

    const {comment_name,like_name, create_time, comment_time,avatar,id,content} = props
    const [type,setType] = useState(0) //0:点赞 1:评论
    const [post,setPost] = useState('')

    useEffect(()=>{
        if(props.like_type||props.type=='like')
        { 
            console.log('like')
            setType(0)
        }
        else
            setType(1)
        getJson(
            '/post/info?post_id=' + id
            )
        .then(res=>{
            console.log(res)
            setPost(res.data.content)
        })
    },[])

    return(
        <>
            <View className='notif'>
                <View className='avatar'>
                    <Image className='img' src={avatar}></Image>
                </View>
                <View className='text'>
                    <View className='top'><Text className='name'>{comment_name?comment_name:like_name}</Text>&nbsp;&nbsp;{type?'评论':'点赞'}了我的帖子  </View>
                    <View className='comment'>{content}</View>
                    <Text className='time'>{create_time?create_time:comment_time}</Text>
                </View>
                <View className='post'>{post}</View>
            </View>
        </>
    )
}

export default Notification;