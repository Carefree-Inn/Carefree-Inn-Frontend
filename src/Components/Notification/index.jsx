
import {Image, Text, View} from "@tarojs/components";
import { useEffect, useState } from "react";
//import mine from '../../Images/avatar.png'
import './index.less'
import { getJson } from "../../Service/fet";



const Notification = (props) =>{

    const {comment_name,like_name, create_time, comment_time,avatar,id,content/* is_to_post */} = props
    const [type,setType] = useState(0) //0:点赞 1:评论
   // const [r_comment,setR_comment] = useState()
    const [post,setPost] = useState('')

    useEffect(()=>{
        if(props.like_type||props.type=='like')//对帖子的点赞
        { 
            console.log('like')
            setType(0)
        }
        else{
           /*  if(is_to_post==false)//回复的是评论
                setR_comment(true)
            else//对帖子的评论 */
                setType(1)
        }
        getJson(
            '/post/info?post_id=' + id
            )
        .then(res=>{
            console.log(res)
            if(res.status==500)
                setPost('该帖子已被删除!')
            if(res.status==200)
                setPost(res.data.content)
        }).catch((error)=>{console.log(error)})
    },[])

    return(
        <>
            <View className='notif'>
                <View className='avatar'>
                    <Image className='img' src={avatar}></Image>
                </View>
                <View className='text'>
                    <View className='top'><Text className='name'>{comment_name?comment_name:like_name}</Text>&nbsp;&nbsp;{type?/* r_comment? *//* '回复': */'评论':'点赞'}了我的{/* {r_comment? */}评论{/* :'帖子'}  */} </View>
                    <View className='comment'>{content}</View>
                    <Text className='time'>{create_time?create_time:comment_time}</Text>
                </View>
                <View className='post'>{post}</View>
            </View>
        </>
    )
}

export default Notification;