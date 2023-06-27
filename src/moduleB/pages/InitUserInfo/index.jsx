import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Input, Radio} from '@tarojs/components'
import './index.less'
import add from '../../../Images/add.png'
import { putData } from '../../../Service/fetch'


export default function InitUserInfo() {
    
    const [name,setName] = useState('')
    const [sex,setSex] = useState(0)
    const [avatar,setAvatar] = useState(add)

    const chooseAvatar = () => {
        Taro.chooseImage({
            count: 1,
            success(res){
                // console.log(res)
                let path = res.tempFilePaths[0]
                // console.log(path)
                setAvatar(path)
                Taro.uploadFile({
                    url: 'http://139.196.30.123:8080/inn/api/v1/upload/file',
                    filePath: path,
                    name: 'image',
                    success(res){
                        const resData = JSON.parse(res.data)
                        setAvatar(resData.data)
                    }
                })
            }
        })  
    }

    const submit = () => {
        putData('/user/profile',{
            avatar: avatar,
            nickname: name,
            sex: sex
        }).then(
            data => {
                console.log(data)
            }
        )
    }

    return (
        <View className='init-user-info'>
            <View className='init-box'>
                <View className='init-box-title'>个人信息填写</View>
                <View className='avatar-box'>
                    <View className='avatar' onClick={chooseAvatar}>
                        <Image className={avatar===add?'':'chosen'} src={avatar} />
                    </View>
                </View>
                <View className='user-info-box'>
                    <View className='user-name'>
                        <View className='name'>昵&nbsp;&nbsp;称</View>
                        <Input type='text' value={name} onInput={(e) => setName(e.detail.value)} placeholder='想一个昵称！' />
                    </View>
                    <View className='user-sex'>
                        <View className='sex' >性&nbsp;&nbsp;别</View>
                        <View className='sex-radio'>
                            <Radio value='男' color='#E4ACAC' onClick={() => setSex(0)} checked={sex === 0?true:false}>男</Radio>
                            <Radio value='女' color='#E4ACAC' onClick={() => setSex(1)} checked={sex === 1?true:false}>女</Radio>
                        </View>
                    </View>
                </View>
                <View className='submit' onClick={submit}>提交</View>
            </View>
        </View>
    )
}
