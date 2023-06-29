import Taro from "@tarojs/taro";
import {Button, Image, Radio, Text, Textarea, View} from "@tarojs/components";
import React, {useState} from "react";
import more from "../../Images/more.svg";
import like from "../../Images/like.svg"
import likefill from "../../Images/like-fill.svg"
import close from '../../Images/close.png'
import message from "../../Images/message.svg"
import "./index.less"
import {delData, postData} from "../../fetch";


const GroundArticle = (props) => {

  const [liked, setLiked] = useState(props.liked)
  const [likes, setLikes] = useState(props.likes)

  const [feedback, setFeedback] = useState('')//反馈类型
  const [modal, setModal] = useState(false)
  const [reportvalue, setReportvalue] = useState('')//反馈内容
  const [show, setShow] = useState(false)

  const goArticle = () => {
    Taro.navigateTo({url: `/moduleB/pages/Article/index?post_id=${props.post_id}`})
  }


  const Like = () => {
    postData('/like', {
      "post_id": props.post_id,
      "to_user_account": props.account,
      "from_user_account": props.useraccount
    }).then(() => {
      setLiked(!liked)
      setLikes(likes + 1)
    })
  }
  const DelLike = () => {
    delData(`/like?post_id=${props.post_id}`).then(() => {
      setLiked(!liked)
      setLikes(likes - 1)
    })
  }

  //显示举报
  function showReport() {
    setShow(!show)
  }

  function report() {
    //showmodal
    setModal(true)
  }

  function closeModal() {
    setModal(false)
    setShow(!show)
  }

  function handleInput(e) {
    setReportvalue(e.detail.value)
  }

//提交反馈举报
  function handleSubmit() {
    if (feedback === '') {
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
    if (reportvalue === '') {
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
    const data = {
      content: reportvalue,
      post_id: props.post_id,
      feedback_type: feedback
    }

    postData('/user/feedback', data)
      .then(res => {
        console.log(res)
        Taro.showToast({
          title: '举报成功',
          icon: 'success',
          duration: 1000
        })
        setModal(false)
        setShow(false)
      }).catch((error) => {
      console.log(error)
      Taro.showToast({
        title: '举报失败,请稍后再试',
        icon: 'error',
        duration: 2000
      })
    })


  }


  return (
    <View className='card'>
      <View className='cardInfo'>
        <View className='cardUser'>
          <Image className='cardUserImg' src={props.avatar} />
          <Text className='cardUserName'>{props.nickname}</Text>
        </View>
        <View className='cardMore'>
          <View className='more'>
            <Image className='cardMoreInfo' src={more} onClick={showReport} />
            <View className={show ? 'report' : 'none'} onClick={report}>举报</View>
          </View>
          <View><Text className='cardTime'>{props.create_time}</Text></View>
        </View>
      </View>
      <View className='cardContent' onClick={goArticle}>
        <View className='c_tags'>
          {props.tags.map((item) => {
            return (
              <View key={item.tag_id} className='c_tag'>#{item.title}</View>
            )
          })}
        </View>
        <View dangerouslySetInnerHTML={{__html: `${props.content}`}}></View>
      </View>
      <View className='cardLikeBox'>
        <View className='category'>{props.category.title}</View>{/* 分区 */}
        <View className='cardLikeBox2'>
          <View className='box3'>
            <Image className='cardLike' src={liked ? likefill : like} onClick={liked ? DelLike : Like} />
            <View className='num'>{likes}</View>
          </View>
          <View className='box3'>
            <Image className='cardLike' src={message} />
            <View className='num'>{props.comments}</View>
          </View>
        </View>
      </View>
      <View className='m_box' style={{display: modal ? 'block' : 'none'}}>
        <View className='modal'>
          <View className='close' onClick={closeModal}>
            <Image src={close} />
          </View>
          <View className='choose'>
            <Radio className='radio' value='言语辱骂' onClick={() => setFeedback('言语辱骂')} color='#E4ACAC'
              checked={feedback === '言语辱骂'}
            >言语辱骂</Radio>
            <Radio className='radio' value='人身攻击' onClick={() => setFeedback('人身攻击')} color='#E4ACAC'
              checked={feedback === '人身攻击'}
            >人身攻击</Radio>
            <Radio className='radio' value='色情暴力' onClick={() => setFeedback('色情暴力')} color='#E4ACAC'
              checked={feedback === '色情暴力'}
            >色情暴力</Radio>
            <Radio className='radio' value='虚假广告' onClick={() => setFeedback('虚假广告')} color='#E4ACAC'
              checked={feedback === '虚假广告'}
            >虚假广告</Radio>
            <Radio className='radio' value='都不是' onClick={() => setFeedback('都不是')} color='#E4ACAC'
              checked={feedback === '都不是'}
            >都不是</Radio>
          </View>
          <View className='input'>
            <Textarea placeholder='请说明举报理由' value={reportvalue} onInput={(e) => handleInput(e)}></Textarea>
          </View>
          <Button className='submit' onClick={() => handleSubmit()}>提交</Button>
        </View>
      </View>
    </View>
  )
}

export default GroundArticle;
