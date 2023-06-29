import {Image, Text, View} from "@tarojs/components";
import {useState, useEffect} from "react";
import del from '../../../Images/delete.svg'
import "./index.less"


const ArticleComment = ({comment_info, onDelete, current_account, author_account}) => {

  const [comment, setComment] = useState({})
  const [toUser, setToUser] = useState({})
  const [fromUser, setFromUser] = useState({})

  useEffect(() => {
    console.log(current_account,'current')
    console.log(author_account,'author')
    console.log(comment_info.from_user_account,'from')
    setComment(comment_info)
    setFromUser(comment_info.from_user_account)
    if (comment_info.to_user_account) {
      setToUser(comment_info.to_user_account)
    }
  }, [])

  const deleteComment = () => {
    onDelete(comment.comment_id)
  }

  return (
    <View className='articleComment'>
      <View className='cardUser'>
        <Image className='cardUserImg' src={fromUser.avatar} />
      </View>
      <View className='articleCommentContent'>
        <Text className='articleCommentUserName'>
          {toUser.nickname ? `${fromUser.nickname}回复${toUser.nickname}: ` : `${fromUser.nickname}: `}
        </Text>
        <Text>{comment.content}</Text>
      </View>
      <View className='articleCommentLike'>
        <Text>{comment.create_time}</Text>
      </View>
      <View className='articleCommentDelete'>
        {(current_account === fromUser.account || current_account === author_account)
          && <Image src={del} onClick={deleteComment} />}
      </View>
    </View>
  )
}

export default ArticleComment;
