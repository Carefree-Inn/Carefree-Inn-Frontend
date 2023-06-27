import Taro from '@tarojs/taro'
import { useEffect, useState } from 'react';
import {View, Image} from '@tarojs/components'
import './index.less'
import edit from '../../../Images/edit.svg'
import GroundArticle from "../../../components/GroundArticle";
import { getJson } from '../../../service/fetch';


export default function TopicArticle() {

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

    return (
        <View className='topic-articles'>
            <View className='topic-articles-box'>
                <View className='topic-name'>
                    {`# ${topic}`}
                </View>
                <View className='cards'>
                    {
                        articles.map(article => 
                            <GroundArticle key={article.create_time} article_info={article} />
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
