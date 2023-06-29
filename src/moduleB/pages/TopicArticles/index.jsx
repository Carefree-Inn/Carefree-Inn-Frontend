import Taro from '@tarojs/taro'
import { useEffect, useState } from 'react';
import {View, Image} from '@tarojs/components'
import './index.less'
import edit from '../../../Images/edit.svg'
import TopicArticle from "../../../components/TopicArticle";
import { deleteData, getJson, postData } from '../../../Service/fetch';


export default function TopicArticles() {

    const [topic,setTopic] = useState('')
    const [articles,setArticles] = useState([])

    useEffect(() => {
        const params = Taro.getCurrentInstance().router.params
        setTopic(params.topic)
        getJson(`/post/tag?tag=${params.topic}`).then(
            data => {
                console.log(data.data)
                setArticles(data.data)
            }
        )
    }, [])
    

    const goPostArticle = () => {
        Taro.navigateTo({
            url: '/moduleB/pages/PostArticle/index',
        })
    }

    const onLikeClick = (query) => {
        postData('/like',query).then(
            data => {
                console.log(data)
                getJson(`/post/tag?tag=${topic}`).then(
                    r => {
                        console.log(r.data)
                        setArticles(r.data)
                    }
                )
            }
        )
    }

    const cancelLikeClick = (post_id) => {
        deleteData(`/like?post_id=${post_id}`).then(
            data => {
                console.log(data)
                getJson(`/post/tag?tag=${topic}`).then(
                    r => {
                        console.log(r.data)
                        setArticles(r.data)
                    }
                )
            }
        )
    }

    return (
        <View className='topic-articles'>
            <View className='topic-articles-box'>
                <View className='topic-name'>
                    {`# ${topic}`}
                </View>
                <View className='cards'>
                    {
                        articles.map(article => 
                            <TopicArticle key={article.create_time} article_info={article} onLikeClick={onLikeClick}  cancelLikeClick={cancelLikeClick} />
                        )
                    }
                </View>
            </View>
            <View className='post-article' onClick={goPostArticle}>
                <Image className='post-article-img' src={edit} />
            </View>
        </View>
    )
}
