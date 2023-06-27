import Taro from '@tarojs/taro'
import { View, Image,Text, Input, Radio, Button} from '@tarojs/components'
import { useState,useEffect } from 'react'
import { getJson,putData } from '../../../Service/fet'
import confirm from '../../../Images/confirm.png'
import './index.less'

const Edit=()=>{

    const [username,setUsername] = useState('')
    const [sex,setSex] = useState(0)
    const [avatar,setAvatar] = useState('')

    useEffect(()=>
  {
    getJson('/user/profile',{})
    .then(res=>{
        setUsername(res.data.nickname)
        setAvatar(res.data.avatar) 
        setSex(res.data.sex)
        console.log(res.data)
  })},[])

    function changeName(e){
        console.log(e.detail.value)
        setUsername(e.detail.value)
    }

    function handleconfirm (){
        //提交昵称
        const data = {
            nickname:username,
            sex,
            avatar
        }

        putData('/user/profile',data)
        .then(res=>{
            console.log(res)
            Taro.showToast({
                title:'修改成功！',
                icon:'success'
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

//上传头像
    function changeAvatar(){
        Taro.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
            success: function (res) {
              // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
              var path = res.tempFilePaths[0]
              Taro.uploadFile({
                url: 'http://139.196.30.123:8080/inn/api/v1/upload/file',
                filePath: path,
                name: 'image',
                success(ress){
                    const resData = JSON.parse(ress.data)
                    setAvatar(resData.data)
                    console.log(resData)
                }
            })
             // console.log(tempFilePaths)
            }
    })}

    //七牛云


    return(
    <>
        <View className='Edit'>
            <View className='Avatar' onClick={changeAvatar}>
                <Image src={avatar}></Image>
            </View>
            <View className='user-sex'>
                <View className='sex' >性别</View>
                <View className='sex-radio'>
                    <Radio value='男' onClick={() => setSex(0)} color='#E4ACAC' checked={sex === 0?true:false}>男</Radio>
                    <Radio value='女' onClick={() => setSex(1)} color='#E4ACAC' checked={sex === 1?true:false}>女</Radio>
                </View>
            </View>
            <View className='uid'>
                <Text >昵称</Text>
                <Input value={username} placeholder={username} onInput={changeName}  />
            </View>
            <Button className='submit' src={confirm} onClick={handleconfirm}>提交</Button>
        </View>
    </>   
    )
    
}

export default Edit;