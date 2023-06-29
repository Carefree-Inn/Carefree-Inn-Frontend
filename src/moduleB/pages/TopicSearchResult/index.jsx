import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import { View, Image, Input } from "@tarojs/components";
import "./index.less";
import edit from "../../../Images/edit.svg";
import search from '../../../Images/search.png';
import TopicArticle from "../../../components/TopicArticle";
import { postData } from "../../../Service/fetch";

export default function TopicSearchResult() {
    const [keyword, setKeyword] = useState("");
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const params = Taro.getCurrentInstance().router.params;
        console.log(params.keyword);
        setKeyword(params.keyword);
        postData("/post/search", {
            data: params.keyword,
            search_type: "all",
        }).then((data) => {
            setArticles(data.data);
            console.log(data.data);
        });
    }, []);

    const goPostArticle = () => {
        Taro.navigateTo({
            url: "/moduleB/pages/PostArticle/index",
        });
    };

    const searchArticles = () => {
        postData("/post/search", {
            data: keyword,
            search_type: "all",
        }).then((data) => {
            setArticles(data.data);
            console.log(data.data);
        });
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
                <View className='cards'>
                    {articles.map((article) => (
                        <TopicArticle key={article.create_time} article_info={article} />
                    ))}
                </View>
            </View>
            <View className='post-article' onClick={goPostArticle}>
                <Image className='post-article-img' src={edit} />
            </View>
        </View>
    );
}
