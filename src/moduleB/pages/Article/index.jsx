import Taro from "@tarojs/taro";
import { useEffect,useState } from "react";
import {View, Input, Text, Image } from '@tarojs/components'
import './index.less'
import send from '../../../Images/send.svg'
import more from "../../../Images/more.png";
import like from "../../../Images/like.svg"
import ArticleComment from "../../component/ArticleComment";
import { deleteData, getJson, postData } from "../../../Service/fetch";


const Article = () => {

  const [article,setArticle] = useState({})
  const [user,setUser] = useState({})
  const [comment,setComment] = useState('')
  const [comments,setComments] = useState([])
  const [focus,setFocus] = useState(false)
  const [replyToComment,setReplyToComment] = useState({})
  const [replyToUser,setReplyToUser] = useState({})
  const [sender,setSender] = useState({})

  useEffect(() => {
    // console.log(myRef.current)
    const params = Taro.getCurrentInstance().router.params
    getJson(`/post/info?post_id=${params.post_id}`).then(
      data => {
        console.log(params.post_id)
        // console.log(data.data)
        // setArticle(data.data)
        const article_info = data.data
        setArticle({
          category: article_info.category,
          content: article_info.content,
          create_time: article_info.create_time,
          liked: article_info.liked,
          likes: article_info.likes,
          post_id: article_info.post_id,
          tags: article_info.tags,
          title: article_info.title
        })
        setUser(article_info['user_info'])
      }
    )

    getJson('/user/profile').then(
      data => {
        setSender(data.data)
      }
    )

    getJson(`/comment/post?post_id=${params.post_id}&page=${1}&limit=${10}`).then(
      data => {
        console.log(data)
        setComments(data.data)
      }
    )
  },[])

  Taro.setNavigationBarTitle({
    title: ''
  })

  const makeComment = () => {

    if(comment === ''){
      Taro.showToast({
        title: '内容不能为空',
        icon: 'none',
        duration: 2000
      })
      return
    }

    let comment_info = {}

    if(!replyToUser.account) {
      comment_info = {
        is_top: true,
        to_user_account:'',
        top_comment_id: 0,
        from_user_nickname: sender.nickname,
        from_user_avatar: sender.avatar,
        post_id: article.post_id,
        content: comment
      }
      console.log(comment_info)
    } else {
      console.log(replyToUser)
      comment_info = {
        is_top: false,
        to_user_account: replyToUser.account,
        top_comment_id: replyToComment.comment_id,
        from_user_nickname: sender.nickname,
        from_user_avatar: sender.avatar,
        post_id: article.post_id,
        content: comment
      }
      console.log(comment_info)
    }

    postData('/comment',comment_info).then(
      data => {
        setComment('')
        getJson(`/comment/post?post_id=${article.post_id}&page=${1}&limit=${10}`).then(
          r => {
            Taro.showToast({
              title: data.data,
              icon: 'success',
              duration: 2000
            })
            console.log(r)
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
    if(replyToComment.comment_id && comment){
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
          deleteData(`/comment?comment_id=${comment_id}`).then(
            data => {
              getJson(`/comment/post?post_id=${article.post_id}&page=${1}&limit=${10}`).then(
                r => {
                  console.log(r)
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

  return (
    <View className='Article'>
      <View className='ArticleBox'>
        <View className='card'>
          <View className='cardInfo'>
            <View className='cardUser'>
              <Image className='cardUserImg' src={user.avatar} />
              <Text className='cardUserName'>{user.nickname}</Text>
            </View>
            <View className='cardMore'>
              <View><Image className='cardMoreInfo' src={more} /></View>
              <View><Text className='cardTime'>{article.create_time}</Text></View>
            </View>
          </View>
          <View className='cardContent'>
            <Text className='cardContentText'>{article.content}</Text>
            <Image className='cardContentImage' src='' />
            <Image className='cardContentImage' src='' />
            <Image className='cardContentImage' src='' />
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
          placeholder={replyToUser.nickname?`回复${replyToUser.nickname}`:''}
          onInput={(e) => setComment(e.detail.value)} 
          className='articlePostCommentInput'
          onBlur={clearReply}
        >
        </Input>
        <Image className='articleLike' onClick={makeComment} src={send}></Image>
        <Image className='articleLike' src={like} />
      </View>
    </View>
  )
}

export default Article;
