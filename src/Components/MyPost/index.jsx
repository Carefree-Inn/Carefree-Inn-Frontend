import Taro from "@tarojs/taro";
import {Image, Radio, Text, View,Textarea, Button} from "@tarojs/components";
import { useState } from "react";
import { postData } from "../../Service/fet";
import more from "../../Images/more.svg";
import like from "../../Images/like.svg";
import likefill from "../../Images/like-fill.svg";
import close from '../../Images/close.png'
import message from "../../Images/message.svg";
import "./index.less";

const Mypost = (props) => {

    const [show,setShow] = useState(false)
    const {nickname, avatar, content,liked, create_time, likes, comments, id} = props
    
    const [feedback,setFeedback] = useState('')//反馈类型
    const [modal,setModal] = useState(false)
    const [reportvalue,setReportvalue] = useState('')//反馈内容

  const goArticle = () => {
    Taro.navigateTo({
      url: `/moduleB/pages/Article/index?post_id=${id}`,
      
    })
  }

//显示举报
  function showReport(){
    setShow(!show)
  }

  function report(){
    //showmodal
    setModal(true)
  }

  function closeModal(){
    setModal(false)
    setShow(!show)
  }

function handleInput(e){
    console.log(e.detail.value)
    setReportvalue(e.detail.value)
}

//提交反馈举报
  function handleSubmit(){
    if(feedback == '')
    {
        Taro.showModal({
            title: '提示',
            content: '请选择举报类型!!',
            success: function (res) {
                if (res.confirm) {
                console.log('用户点击确定')
                } else if (res.cancel) {
                console.log('用户点击取消')
                }
            }
        })
        return
    }
    if(reportvalue=='')
    {
        Taro.showModal({
            title: '提示',
            content: '请输入详细举报理由!',
            success: function (res) {
                if (res.confirm) {
                console.log('用户点击确定')
                } else if (res.cancel) {
                console.log('用户点击取消')
                }
            }
        })
        return
    }
    console.log('submit')
    const data = {
        content:reportvalue,
        post_id:id,
        feedback_type:feedback
    }

    postData('/user/feedback',data)
    .then(res=>{
        console.log(res)
        Taro.showToast({
            title: '举报成功',
            icon: 'success',
            duration: 1000
        })
        setModal(false)
        setShow(false)
    }).catch((error)=>{
        console.log(error)
        Taro.showToast({
            title: '举报失败,请稍后再试',
            icon: 'error',
            duration: 2000
        })
    })


  }

  return (
<>
    <View className='card'>
      <View className='cardInfo'>
        <View className='cardUser'>
          <Image className='cardUserImg' src={avatar} />
          <Text className='cardUserName'>{nickname}</Text>
        </View>
        <View className='cardMore'>
            <View className='more'>
                <Image className='cardMoreInfo' src={more}  onClick={showReport} />
                <View className={show?'report':'none'} onClick={report}>举报</View>
            </View>
          <View><Text className='cardTime'>{create_time}</Text></View>
        </View>
      </View>
      <View className='cardContent' onClick={goArticle}>
        <Text className='cardContentText'>{content}</Text>
        <Image className='cardContentImage' src='' />
        <Image className='cardContentImage' src='' />
        <Image className='cardContentImage' src='' />
        <Image className='cardContentImage' src='' />
      </View>
      <View className='cardLikeBox'>
        <View className='cardLikeBox2'>
            <View className='box3'>
                <Image className='cardLike' src={liked ? likefill : like} />
                <View className='num'>{likes}</View>
            </View>
            <View className='box3'>
                <Image className='cardLike' src={message} />
                <View className='num'>{comments}</View>
            </View>
        </View>
      </View>
    </View>
    <View className='m_box' style={{display: modal?'block':'none'}}>
        <View className='modal' >
            <View className='close' onClick={closeModal}>
                <Image src={close} />
            </View>
            <View className='choose'>
                <Radio className='radio' value='言语辱骂' onClick={()=>setFeedback('言语辱骂')} color='#E4ACAC' checked={feedback==='言语辱骂'?true:false}>言语辱骂</Radio>
                <Radio className='radio' value='人身攻击' onClick={() => setFeedback('人身攻击')} color='#E4ACAC' checked={feedback==='人身攻击'?true:false}>人身攻击</Radio>
                <Radio className='radio'value='色情暴力' onClick={() => setFeedback('色情暴力')} color='#E4ACAC' checked={feedback==='色情暴力'?true:false}>色情暴力</Radio>
                <Radio className='radio' value='虚假广告' onClick={() => setFeedback('虚假广告')} color='#E4ACAC' checked={feedback==='虚假广告'?true:false}>虚假广告</Radio>
                <Radio className='radio' value='都不是' onClick={() => setFeedback('都不是')} color='#E4ACAC' checked={feedback==='都不是'?true:false}>都不是</Radio>
            </View>
            <View className='input'>
                <Textarea placeholder='请说明举报理由'  value={reportvalue} onInput={(e)=>handleInput(e)}></Textarea>
            </View>
            <Button className='submit' onClick={()=>handleSubmit()}>提交</Button>
        </View>
    </View>
</>
  )
}

export default Mypost;