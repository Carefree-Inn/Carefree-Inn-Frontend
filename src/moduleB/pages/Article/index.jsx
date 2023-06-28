import Taro, {useRouter} from "@tarojs/taro";
import {useEffect, useState} from "react";
import {View, Input, Text, Button, Image, Icon} from '@tarojs/components'
import './index.less'
import topic from "../../../Images/topic.png";
import more from "../../../Images/more.png";
import like from "../../../Images/like.svg"
import heart from "../../../Images/heart.svg"
import ArticleComment from "../../component/ArticleComment";
import {delData, getJson, postData} from "../../../fetch";
import likefill from "../../../Images/like-fill.svg";


const Article = () => {

  Taro.setNavigationBarTitle({
    title: ''
  })

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
  const [comment, setComment] = useState([])
  const [liked, setLiked] = useState(article.liked)
  const [likes, setLikes] = useState(article.likes)
  const [user, setUser] = useState([])

  useEffect(() => {
    getJson(`/post/info?post_id=${postId}`).then((r) => {
      setArticle(r.data)
    })
    getJson(`/comment/post?post_id=${postId}&page=1&limit=100`).then((r) => {
      setComment(r.data)
    })
    getJson('/user/profile').then(r => {
      setUser(r.data)
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

  return (
    <View className='Article'>
      <View className='ArticleBox'>
        <View className='card'>
          <View className='cardInfo'>
            <View className='cardUser'>
              <Image className='cardUserImg' src='' />
              <Text className='cardUserName'>{article.user_info.nickname}</Text>
            </View>
            <View className='cardMore'>
              <View><Image className='cardMoreInfo' src={more} /></View>
              <View><Text className='cardTime'>{article.create_time}</Text></View>
            </View>
          </View>
          <View className='cardContent'>
            {article.content}
            {/*<Text className='cardContentText'>{article.content}</Text>*/}
            {/*<Image className='cardContentImage' src='' />*/}
          </View>
        </View>
        <View className='articleComments'>
          {comment.map((comm) => {
            return (
              <ArticleComment from_user_nickname={comm.from_user_nickname} from_user_avatar={comm.from_user_avatar}
                content={comm.content}
              ></ArticleComment>
            )
          })}
        </View>
      </View>
      <View className='articlePostComment'>
        <Input type='text' className='articlePostCommentInput'></Input>
        {/*<Image className='articleLike' src={heart} />*/}
        <View className='articleLikeBox'>
          <Image className='articleLike' src={liked ? likefill : like} onClick={liked ? DelLike : Like} />
          <Text>{likes}</Text>
        </View>
      </View>
    </View>
  )
}

export default Article;
