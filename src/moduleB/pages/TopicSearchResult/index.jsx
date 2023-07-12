import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import { View, Image, Input, Text } from "@tarojs/components";
import "./index.less";
import edit from "../../../Images/edit.svg";
import search from '../../../Images/search.png';
import TopicArticle from "../../../components/TopicArticle";
import { deleteData, postData, getJson } from "../../../Service/fetch";

export default function GroundSearchResult() {
    const [keyword, setKeyword] = useState('');
    const [articles, setArticles] = useState([]);
    const [none,setNone] = useState(false)

    useEffect(() => {
        const params = Taro.getCurrentInstance().router.params;
        console.log(params.keyword);
        setKeyword(params.keyword);
        getJson(`/post/tag?tag=${params.keyword}`).then(
            data => {
                if(data.data.length){
                    setArticles(data.data)
                    setNone(false)
                } else {
                    setArticles([])
                    setNone(true)
                }

            }
        )
    }, []);

    const goPostArticle = () => {
        Taro.navigateTo({
            url: "/moduleB/pages/PostArticle/index",
        });
    };

    const searchArticles = () => {
        console.log(keyword)
        getJson(`/post/tag?tag=${keyword}`).then(
            data => {
                if(data.data.length){
                    setArticles(data.data)
                    setNone(false)
                } else {
                    setArticles([])
                    setNone(true)
                }
            }
        )
    }

    const onLikeClick = (query) => {
        postData('/like',query).then(
            data => {
                console.log(data)
                getJson(`/post/tag?tag=${keyword}`).then(
                    r => {
                        if(r.data.length){
                            setArticles(r.data)
                            setNone(false)
                        } else {
                            setArticles([])
                            setNone(true)
                        }
                    }
                )
            }
        )
    }

    const cancelLikeClick = (post_id) => {
        deleteData(`/like?post_id=${post_id}`).then(
            data => {
                console.log(data)
                getJson(`/post/tag?tag=${keyword}`).then(
                    r => {
                        if(r.data.length){
                            setArticles(r.data)
                            setNone(false)
                        } else {
                            setArticles([])
                            setNone(true)
                        }
                    }
                )
            }
        )
    }

    return (
        <View className='topic-search-articles'>
            <View className='topic-articles-box'>
                <View className='search-box'>
                    <Input className='search-input' type='text' value={keyword}  onInput={(e) => setKeyword(e.detail.value)} />
                    <View className='search-icon-box' onClick={searchArticles}>
                        <Image className='search-icon' src={search} />
                    </View>
                </View>
                {!none?<View className='cards'>
                    {articles.map((article) => (
                        <TopicArticle key={article.create_time} article_info={article} onLikeClick={onLikeClick}  cancelLikeClick={cancelLikeClick} />
                    ))}
                </View>:
                <View  className="none" >空空如也~~~</View>
                }
            </View>
            <View className='post-article' onClick={goPostArticle}>
                <Image className='post-article-img' src={edit} />
            </View>
        </View>
    );
}
