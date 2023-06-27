import Taro from "@tarojs/taro";

const preUrl = "http://139.196.30.123:8080/inn/api/v1";
const Fetch = (url, data = {}, method) => {
    const header = {
        "content-type": "application/json",
        Authorization: Taro.getStorageSync("token"),
    };

    return Taro.request({
        url: url,
        data,
        method,
        header,
    })
        .then((res) => {
            switch (res.statusCode) {
                case 200: {
                    if (res.data) {
                        return res.data;
                    } else {
                        return res.errMsg;
                    }
                }
                case 400:
                    throw new Error("没有权限访问");
                case 401:
                    return res.data;
                case 404:
                    throw new Error("not found");
                case 500:
                    throw new Error("服务器错误");
                default:
                    throw new Error(res.errMsg);
            }
        })
        .catch((e) => {
            console.log(e);
        });
};

export async function postData(url = "", data = {}) {
    return await Fetch(preUrl + url, JSON.stringify(data), "POST");
}

export async function getJson(url = "", data = {}) {
    return await Fetch(preUrl + url, JSON.stringify(data), "GET");
}

export async function putData(url = "", data = {}) {
    return await Fetch(preUrl + url, JSON.stringify(data), "PUT");
}
