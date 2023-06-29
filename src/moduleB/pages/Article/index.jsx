import Taro, {useRouter} from "@tarojs/taro";
import React, {useEffect, useState} from "react";
import {View, Input, Text, Button, Image, Radio, Textarea} from '@tarojs/components'
import './index.less'
import more from "../../../Images/more.png";
import like from "../../../Images/like.svg"
import likefill from "../../../Images/like-fill.svg"
import ArticleComment from "../../component/ArticleComment";
import {delData, getJson, postData} from "../../../fetch";
import send from "../../../Images/send.svg"
import close from "../../../Images/close.png";


const Article = () => {


  const router = useRouter();
  const [postId, setPostId] = useState(router.params.post_id)
  const [article, setArticle] = useState({
    "user_info": {
      "account": "",
      "nickname": "",
      "sex": 1,
      "avatar": ""
    },
    "title": "",
    "content": "",
    "category": {
      "category_id": 1,
      "title": ""
    },
    "tags": [],
    "likes": 0,
    "create_time": "",
    "post_id": 0,
    "liked": false
  })

  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [focus, setFocus] = useState(false)
  const [replyToComment, setReplyToComment] = useState({})
  const [replyToUser, setReplyToUser] = useState({})
  const [sender, setSender] = useState({})

  const [liked, setLiked] = useState(article.liked)
  const [likes, setLikes] = useState(article.likes)
  const [user, setUser] = useState([])

  const [feedback, setFeedback] = useState('')//反馈类型
  const [modal, setModal] = useState(false)
  const [reportvalue, setReportvalue] = useState('')//反馈内容
  const [show, setShow] = useState(false)

  useEffect(() => {
    getJson(`/post/info?post_id=${postId}`).then((r) => {
      setArticle(r.data)
    })
    getJson(`/post/info?post_id=${postId}`).then((r) => {
      setLikes(r.data.likes)
      setLiked(r.data.liked)
    })
    getJson(`/comment/post?post_id=${postId}&page=1&limit=100`).then((r) => {
      setComments(r.data)
    })
    getJson('/user/profile').then(r => {
      setUser(r.data)
      setSender(r.data)
    })
  }, [])

  const Like = () => {
    postData('/like', {
      "post_id": article.post_id,
      "to_user_account": article.user_info.account,
      "from_user_account": user.account
    }).then(() => {
      setLiked(!liked)
      setLikes(likes + 1)
    })
  }
  const DelLike = () => {
    delData(`/like?post_id=${article.post_id}`).then(() => {
      setLiked(!liked)
      setLikes(likes - 1)
    })
  }

  const makeComment = () => {

    if (comment === '') {
      Taro.showToast({
        title: '内容不能为空',
        icon: 'none',
        duration: 2000
      })
      return
    }

    let comment_info = {}

    if (!replyToUser.account) {
      comment_info = {
        is_top: true,
        to_user_account: '',
        top_comment_id: 0,
        from_user_nickname: sender.nickname,
        from_user_avatar: sender.avatar,
        post_id: article.post_id,
        content: comment
      }
    } else {
      comment_info = {
        is_top: false,
        to_user_account: replyToUser.account,
        top_comment_id: replyToComment.comment_id,
        from_user_nickname: sender.nickname,
        from_user_avatar: sender.avatar,
        post_id: article.post_id,
        content: comment
      }
    }

    postData('/comment', comment_info).then(
      data => {
        setComment('')
        getJson(`/comment/post?post_id=${article.post_id}&page=${1}&limit=${10}`).then(
          r => {
            Taro.showToast({
              title: data.data,
              icon: 'success',
              duration: 2000
            })
            setComments(r.data)
          }
        )
      }
    )
  }

  const reply = (commentItem) => {
    setFocus(true)
    setReplyToComment(commentItem)
    setReplyToUser(commentItem.from_user_account)
  }

  const clearReply = () => {
    if (replyToComment.comment_id && comment) {
      setFocus(false)
    } else {
      setFocus(false)
      setReplyToComment({})
      setReplyToUser({})
    }
  }

  const onDelete = (comment_id) => {
    Taro.showModal({
      content: '删除评论后不可恢复，是否确认删除？',
      success: function (res) {
        if (res.confirm) {
          delData(`/comment?comment_id=${comment_id}`).then(
            data => {
              getJson(`/comment/post?post_id=${article.post_id}&page=${1}&limit=${10}`).then(
                r => {
                  setComments(r.data)
                  Taro.showToast({
                    title: data.data,
                    icon: 'success',
                    duration: 2000
                  })
                }
              )
            }
          )
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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
      post_id: postId,
      feedback_type: feedback
    }

    postData('/user/feedback', data)
      .then(res => {
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
    <View className='Article'>
      <View className='ArticleBox'>
        <View className='card'>
          <View className='cardInfo'>
            <View className='cardUser'>
              <Image className='cardUserImg' src={article.user_info.avatar} />
              <Text className='cardUserName'>{article.user_info.nickname}</Text>
            </View>
            <View className='cardMore'>
              <View className='more'>
                <Image className='cardMoreInfo' src={more} onClick={showReport} />
                <View className={show ? 'report' : 'none'} onClick={report}>举报</View>
              </View>
              <View><Text className='cardTime'>{article.create_time}</Text></View>
            </View>
          </View>
          <View className='cardContent'>
            <View className='c_tags'>
              {article.tags.map((item) => {
                return (
                  <View className='c_tag'>#{item.title}</View>
                )
              })}
            </View>
            <View dangerouslySetInnerHTML={{__html: `${article.content}`}}></View>
          </View>
        </View>
        <View className='articleComments'>
          {comments.map(commentItem =>
            <>
              <View key={commentItem.comment_id} onClick={() => reply(commentItem)}>
                <ArticleComment
                  key={commentItem.comment_id}
                  comment_info={commentItem}
                  onDelete={onDelete}
                  current_account={sender.account}
                  author_account={user.account}
                />
              </View>
              {
                commentItem.child_comment && commentItem.child_comment.map(item =>
                  <View key={item.comment_id} onClick={() => reply(item)}>
                    <ArticleComment
                      key={item.comment_id}
                      comment_info={item}
                      onDelete={onDelete}
                      current_account={sender.account}
                      author_account={user.account}
                    />
                  </View>
                )
              }
            </>
          )}
        </View>
      </View>
      <View className='articlePostComment'>
        <Input
          type='text'
          value={comment}
          focus={focus}
          placeholder={replyToUser.nickname ? `回复${replyToUser.nickname}` : ''}
          onInput={(e) => setComment(e.detail.value)}
          className='articlePostCommentInput'
          onBlur={clearReply}
        >
        </Input>
        <Image className='articleLike' onClick={makeComment} src={send}></Image>
        <View className='articleLikeBox'>
          <Image className='articleLike' src={liked ? likefill : like} onClick={liked ? DelLike : Like} />
          <Text>{likes}</Text>
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

export default Article;
