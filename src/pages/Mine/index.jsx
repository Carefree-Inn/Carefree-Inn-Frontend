import Taro,{ usePullDownRefresh } from '@tarojs/taro'
import { useEffect, useState,useLayoutEffect } from 'react'
import { View, Text,Image,Button } from '@tarojs/components'
import { getJson } from '../../Service/fetch'
import home from '../../Images/home.png'
import like from '../../Images/like.png'
import notif from '../../Images/notif.png'
/* import zan from '../../Images/zan.png'
import reply from '../../Images/reply.png' */
import './index.less'


const Mine=()=>{

  const [name,setName] = useState('')
  const [avatar,setAvatar] = useState('')
  const [days,setDays] = useState()
  const [socketOpen, setSocketOpen] = useState(false)
  const [message,setMessage] = useState([])
  const [read,setRead] = useState(false)//通知是否查看

'"{"comment_id":77,"post_id":4,"to_user_account":"2021213975","comment_time":"2023-06-28 15:54-48","content":"我再回复一次你的评论","from_user_account":"2021214115","from_user_avatar":"http://qny.yyj-freshman-blog.xyz/FnSELjfIpMKxAiBFTJEG-lQdh4Yi","from_user_nick_name":"hello"}"'
  '"{"comment_id":7,"post_id":7,"to_user_account":"2021213975","comment_time":"2023-06-27 15:03-17","content":"真的很不错啊","from_user_account":"2021213975","from_user_avatar":"http://dummyimage.com/100x100","from_user_nick_name":"2021213940"}"'
  '"{"post_id":15,"to_user_account":"2021213975","create_time":"2023-06-27 15:05:59","like_type":"make","from_user_account":"2021213975","from_user_avatar":"http://dummyimage.com/100x100","from_user_nickname":"2021213940"}"'

  useLayoutEffect(()=>{
    //console.log('231')
      getWebsocket()
  },[])

//连接websocket
    function getWebsocket(){
      Taro.connectSocket({
        url: 'ws://139.196.30.123:8080/inn/api/v1/notification',
        header:{
          'content-type': 'application/json',
          'Authorization': Taro.getStorageSync('token')/* 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBY2NvdW50IjoiMjAyMTIxMzk3NSIsImV4cCI6MTY4ODQzMzMyMiwiaXNzIjoiQ0NOVS1Jbm4ifQ.HauJKVJhCLA0ha_yRvFyRxTSdQxU3QI36ew-ye7eQCA', */
        },
       // protocols:["protocal1"],
        success: function () {
          console.log('connect success')
          Taro.onSocketOpen(()=>{
            console.log('打开了')
            setSocketOpen(true)
            //Taro.onSocketMessage((msg)=>console.log(msg))
          })
        }
      }).then(task => {
        task.onOpen(function () {
          console.log('onOpen')
        })
        task.onMessage(function (msg) {
          //接受服务器消息
         // console.log('onMessage: ', msg)
          const data = JSON.parse(msg.data)
          console.log(data)
          setMessage(message.concat(data))
          //task.close()
        })
        task.onError(function () {
          console.log('onError')
          setSocketOpen(false)
          reconnect()
        })
        task.onClose(function (e) {
          console.log('onClose: ', e)
          setSocketOpen(false)
          reconnect()
        })
    })}

    function reconnect(){
      if(!socketOpen)
        setSocketOpen(true)
        setTimeout(function(){
          getWebsocket();
        },2000)
    }


  useEffect(()=>
  {
   
    getJson('/user/profile',{})
    .then(res=>{
      setName(res.data.nickname)
      setAvatar(res.data.avatar)
      setDays(res.data.days)
     // console.log(res)
  })},[])

  usePullDownRefresh(() => {
    getJson('/user/profile',{})
    .then(res=>{
      setName(res.data.nickname)
      setAvatar(res.data.avatar)
      setDays(res.data.days)
     //console.log(res)
  })
  })


  const  toMylike=()=>{
    Taro.navigateTo({
      url:'/moduleA/pages/Likepost/index'
    })
  }

  const toHome=()=>{
    Taro.navigateTo({
      url:`/moduleA/pages/Homepage/index?avatar=${avatar}&name=${name}`
    })
  }

  const toReply =()=>{
    setRead(true)
    Taro.navigateTo({
      url:`/moduleA/pages/MyReply/index?message=${JSON.stringify({data:message})}`
    })
  }

  function unLogin(){

    Taro.clearStorageSync()
    Taro.showToast({
      icon: 'loading',
      title: '正在退出登录'
    });
    Taro.navigateTo({
      url: '/pages/Login/index'
    })
  }
  return (

    <>
    <View className='Mine'>
      <View className='user'>
        <View className='left'>
          <View className='u_name'>{name}</View>
          <View className='join_time'>已加入{days}天</View>
        </View>
        <View className='right'>
          <Image src={avatar} ></Image>
        </View>
      </View>
      <View className='Mine_box'>
          <View className='item' >
            <Image src={home}></Image>
            <Text onClick={toHome}>我的主页 </Text></View>
          <View className='item'>
            <Image src={like}></Image>
            <Text onClick={toMylike}>我喜欢的帖子</Text>
            </View>
          <View className='item'>
            <Image src={notif}></Image>
            <Text  onClick={toReply}>通知</Text>
            {message.length==0 || read ?'':<View className='circle'>{message.length}</View>}
          </View>
      </View>
        <Button className='unlogin' onClick={unLogin}>退出登录</Button>
    </View>
    </>
  )
}
export default Mine;
