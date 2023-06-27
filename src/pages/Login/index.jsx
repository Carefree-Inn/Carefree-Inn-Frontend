import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Input, Image } from '@tarojs/components'
import loginImg from '../../Images/loginImg.png'
import './index.less'


const Login=()=>{

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [attention,setAttention] = useState(false)


  async function login(){

    console.log(username,password)

    if(username === ''|| password === '' || username.length !== 10){
      setAttention(true)
      return
    }

    const data = {
      'account': username,
      'password': password
    }

    Taro.request({
      url: 'http://139.196.30.123:8080/inn/api/v1/user/login',
      data,
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        const resData = res.data.data
        // console.log(res)
        // console.log(resData)
        Taro.setStorageSync('token',resData.token)

        if(resData.is_first){
          Taro.navigateTo({
            url: '/moduleB/pages/InitUserInfo/index'
          })
        } else {
          Taro.reLaunch({
            url: '/pages/Topic/index'
          })
        }
      }
    })

  }

  return (
    <View className='login-wrapper'>
      <View className='login-title'>
        <Text>欢迎来到逍遥客栈！</Text>
        <Text>请使用一站式账号密码登陆</Text>
      </View>
      <View className='login-form'>
        <View className='username'>
          <Text>学号：</Text>
          <Input 
            type='text' 
            onInput={(e) => {setAttention(false);setUsername(e.detail.value)}}
            value={username} 
            placeholder='请输入学号' 
          />
        </View>
        <View className='password'>
          <Text>密码：</Text>
          <Input 
            type='password' 
            onInput={(e) => {setAttention(false);setPassword(e.detail.value)}}
            value={password} 
            placeholder='请输入密码' 
          />
        </View>
      </View>
      <View className='login-submit' onClick={login}>
        <Image src={loginImg} />
      </View>
      <View className={`portal ${attention? 'active':''}`}>
        <Text>学号或密码错误!</Text>
      </View>
    </View>
  )
}
export default Login;
