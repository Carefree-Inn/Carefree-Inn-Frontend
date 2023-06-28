(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/Mine/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/Mine/index.jsx":
/*!******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/Mine/index.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _Service_fet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Service/fet */ "./src/Service/fet.jsx");
/* harmony import */ var _Images_avatar_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Images/avatar.png */ "./src/Images/avatar.png");
/* harmony import */ var _Images_avatar_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Images_avatar_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Images_home_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Images/home.png */ "./src/Images/home.png");
/* harmony import */ var _Images_home_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Images_home_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Images_like_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Images/like.png */ "./src/Images/like.png");
/* harmony import */ var _Images_like_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Images_like_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Images_notif_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Images/notif.png */ "./src/Images/notif.png");
/* harmony import */ var _Images_notif_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Images_notif_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.less */ "./src/pages/Mine/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);









/* import zan from '../../Images/zan.png'
import reply from '../../Images/reply.png' */




var Mine = function Mine() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
    _useState2 = Object(_Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
    _useState4 = Object(_Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
    avatar = _useState4[0],
    setAvatar = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
    _useState6 = Object(_Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
    days = _useState6[0],
    setDays = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
    _useState8 = Object(_Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState7, 2),
    socketOpen = _useState8[0],
    setSocketOpen = _useState8[1];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
    _useState10 = Object(_Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState9, 2),
    message = _useState10[0],
    setMessage = _useState10[1];
  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
    _useState12 = Object(_Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState11, 2),
    read = _useState12[0],
    setRead = _useState12[1]; //通知是否查看

  '"{"comment_id":77,"post_id":4,"to_user_account":"2021213975","comment_time":"2023-06-28 15:54-48","content":"我再回复一次你的评论","from_user_account":"2021214115","from_user_avatar":"http://qny.yyj-freshman-blog.xyz/FnSELjfIpMKxAiBFTJEG-lQdh4Yi","from_user_nick_name":"hello"}"';
  '"{"comment_id":7,"post_id":7,"to_user_account":"2021213975","comment_time":"2023-06-27 15:03-17","content":"真的很不错啊","from_user_account":"2021213975","from_user_avatar":"http://dummyimage.com/100x100","from_user_nick_name":"2021213940"}"';
  '"{"post_id":15,"to_user_account":"2021213975","create_time":"2023-06-27 15:05:59","like_type":"make","from_user_account":"2021213975","from_user_avatar":"http://dummyimage.com/100x100","from_user_nickname":"2021213940"}"';
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(function () {
    console.log('231');
    getWebsocket();
  }, []);

  //连接websocket
  function getWebsocket() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.connectSocket({
      url: 'ws://139.196.30.123:8080/inn/api/v1/notification',
      header: {
        'content-type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBY2NvdW50IjoiMjAyMTIxMzk3NSIsImV4cCI6MTY4ODQzMzMyMiwiaXNzIjoiQ0NOVS1Jbm4ifQ.HauJKVJhCLA0ha_yRvFyRxTSdQxU3QI36ew-ye7eQCA'
      },
      // protocols:["protocal1"],
      success: function success() {
        console.log('connect success');
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.onSocketOpen(function () {
          console.log('打开了');
          setSocketOpen(true);
          //Taro.onSocketMessage((msg)=>console.log(msg))
        });
      }
    }).then(function (task) {
      task.onOpen(function () {
        console.log('onOpen');
      });
      task.onMessage(function (msg) {
        //接受服务器消息
        console.log('onMessage: ', msg);
        var data = JSON.parse(msg.data);
        console.log(data);
        setMessage(message.concat(data));
        //task.close()
      });

      task.onError(function () {
        console.log('onError');
        setSocketOpen(false);
        reconnect();
      });
      task.onClose(function (e) {
        console.log('onClose: ', e);
        setSocketOpen(false);
        reconnect();
      });
    });
  }
  function reconnect() {
    if (!socketOpen) setSocketOpen(true);
    setTimeout(function () {
      getWebsocket();
    }, 2000);
  }
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_Service_fet__WEBPACK_IMPORTED_MODULE_4__[/* getJson */ "b"])('/user/profile', {}).then(function (res) {
      setName(res.data.nickname);
      setAvatar(res.data.avatar);
      setDays(res.data.days);
      console.log(res);
    });
  }, []);
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["usePullDownRefresh"])(function () {
    Object(_Service_fet__WEBPACK_IMPORTED_MODULE_4__[/* getJson */ "b"])('/user/profile', {}).then(function (res) {
      setName(res.data.nickname);
      setAvatar(res.data.avatar);
      setDays(res.data.days);
      //console.log(res)
    });
  });

  var toMylike = function toMylike() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.navigateTo({
      url: '/moduleA/pages/Likepost/index'
    });
  };
  var toHome = function toHome() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.navigateTo({
      url: "/moduleA/pages/Homepage/index?avatar=".concat(avatar, "&name=").concat(name)
    });
  };
  var toReply = function toReply() {
    setRead(true);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.navigateTo({
      url: "/moduleA/pages/MyReply/index?message=".concat(JSON.stringify({
        data: message
      }))
    });
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "g"], {
      className: "Mine",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "g"], {
        className: "user",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "g"], {
          className: "left",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "g"], {
            className: "u_name",
            children: name
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "g"], {
            className: "join_time",
            children: ["\u5DF2\u52A0\u5165", days, "\u5929"]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "g"], {
          className: "right",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
            src: _Images_avatar_png__WEBPACK_IMPORTED_MODULE_5___default.a
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "g"], {
        className: "Mine_box",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "g"], {
          className: "item",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
            src: _Images_home_png__WEBPACK_IMPORTED_MODULE_6___default.a
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "e"], {
            onClick: toHome,
            children: "\u6211\u7684\u4E3B\u9875 "
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "g"], {
          className: "item",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
            src: _Images_like_png__WEBPACK_IMPORTED_MODULE_7___default.a
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "e"], {
            onClick: toMylike,
            children: "\u6211\u559C\u6B22\u7684\u5E16\u5B50"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "g"], {
          className: "item",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
            src: _Images_notif_png__WEBPACK_IMPORTED_MODULE_8___default.a
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "e"], {
            onClick: toReply,
            children: "\u901A\u77E5"
          }), message.length == 0 || read ? '' : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "g"], {
            className: "circle",
            children: message.length
          })]
        })]
      })]
    })
  });
};
/* harmony default export */ __webpack_exports__["a"] = (Mine);

/***/ }),

/***/ "./src/Images/avatar.png":
/*!*******************************!*\
  !*** ./src/Images/avatar.png ***!
  \*******************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Images/avatar.png";

/***/ }),

/***/ "./src/Images/home.png":
/*!*****************************!*\
  !*** ./src/Images/home.png ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Images/home.png";

/***/ }),

/***/ "./src/Images/like.png":
/*!*****************************!*\
  !*** ./src/Images/like.png ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Images/like.png";

/***/ }),

/***/ "./src/Images/notif.png":
/*!******************************!*\
  !*** ./src/Images/notif.png ***!
  \******************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Images/notif.png";

/***/ }),

/***/ "./src/pages/Mine/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/Mine/index.jsx ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/Mine/index.jsx");


var config = {"navigationBarTitleText":"个人"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/Mine/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/Mine/index.less":
/*!***********************************!*\
  !*** ./src/pages/Mine/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/Mine/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map