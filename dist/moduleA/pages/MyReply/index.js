(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["moduleA/pages/MyReply/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/moduleA/pages/MyReply/index.jsx":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/moduleA/pages/MyReply/index.jsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Components/Notification */ "./src/Components/Notification/index.jsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ "./src/moduleA/pages/MyReply/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Service_fet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Service/fet */ "./src/Service/fet.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);





/* import Fetch from '../../../Service/fetch' */





var MyReply = function MyReply() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
    _useState2 = Object(_Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
    msg = _useState2[0],
    setMsg = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
    _useState4 = Object(_Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
    his = _useState4[0],
    setHis = _useState4[1]; //历史通知
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
    _useState6 = Object(_Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
    page = _useState6[0],
    setPage = _useState6[1];
  var limit = 10;
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["useReady"])(function () {
    // console.log('Ready')
    var params = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["getCurrentInstance"])();
    var param = params.router.params;
    var data = JSON.parse(param.message);
    console.log(JSON.parse(param.message));
    setMsg(data.data);
    //const data = JSON.parse(param.message)
    // setMsg(data.data)
  });

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["useReachBottom"])(function () {
    setPage(page + 1);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_Service_fet__WEBPACK_IMPORTED_MODULE_6__[/* getJson */ "a"])('/notification/history?page=' + page + '&limit=' + limit).then(function (res) {
      console.log(res);
      setHis(res.data);
    });
  }, [page]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
      className: "reply",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
        className: "lastest",
        children: "\u6700\u65B0"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
        className: "l_box",
        children: msg.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_Components_Notification__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
            id: item.post_id,
            comment_name: item.from_user_nick_name,
            like_name: item.from_user_nickname,
            create_time: item.create_time,
            like_type: item.like_type,
            content: item.content,
            comment_time: item.comment_time,
            avatar: item.from_user_avatar
          }, item.create_time);
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
        className: "history",
        children: "\u5386\u53F2"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
        className: "h_box",
        children: his.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_Components_Notification__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
            type: item.action_type,
            id: item.post_id,
            comment_name: item.from_user_nickname,
            like_name: item.from_user_nickname,
            create_time: item.action_time,
            content: item.comment_content,
            comment_time: item.action_time,
            avatar: item.from_user_avatar
          }, item.action_time);
        })
      })]
    })
  });
};
/* harmony default export */ __webpack_exports__["a"] = (MyReply);

/***/ }),

/***/ "./src/Components/Notification/index.jsx":
/*!***********************************************!*\
  !*** ./src/Components/Notification/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./src/Components/Notification/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Service_fet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Service/fet */ "./src/Service/fet.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);



//import mine from '../../Images/avatar.png'





var Notification = function Notification(props) {
  var comment_name = props.comment_name,
    like_name = props.like_name,
    create_time = props.create_time,
    comment_time = props.comment_time,
    avatar = props.avatar,
    id = props.id,
    content = props.content;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
    _useState2 = Object(_Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
    type = _useState2[0],
    setType = _useState2[1]; //0:点赞 1:评论
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
    _useState4 = Object(_Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
    post = _useState4[0],
    setPost = _useState4[1];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (props.like_type || props.type == 'like') {
      console.log('like');
      setType(0);
    } else setType(1);
    Object(_Service_fet__WEBPACK_IMPORTED_MODULE_4__[/* getJson */ "a"])('/post/info?post_id=' + id).then(function (res) {
      console.log(res);
      setPost(res.data.content);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "g"], {
      className: "notif",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "g"], {
        className: "avatar",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "b"], {
          className: "img",
          src: avatar
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "g"], {
        className: "text",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "g"], {
          className: "top",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "e"], {
            className: "name",
            children: comment_name ? comment_name : like_name
          }), "\xA0\xA0", type ? '评论' : '点赞', "\u4E86\u6211\u7684\u5E16\u5B50  "]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "g"], {
          className: "comment",
          children: content
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "e"], {
          className: "time",
          children: create_time ? create_time : comment_time
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "g"], {
        className: "post",
        children: post
      })]
    })
  });
};
/* harmony default export */ __webpack_exports__["a"] = (Notification);

/***/ }),

/***/ "./src/Components/Notification/index.less":
/*!************************************************!*\
  !*** ./src/Components/Notification/index.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/moduleA/pages/MyReply/index.jsx":
/*!*********************************************!*\
  !*** ./src/moduleA/pages/MyReply/index.jsx ***!
  \*********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/moduleA/pages/MyReply/index.jsx");


var config = {"navigationBarTitleText":"收到的回复"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'moduleA/pages/MyReply/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/moduleA/pages/MyReply/index.less":
/*!**********************************************!*\
  !*** ./src/moduleA/pages/MyReply/index.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/moduleA/pages/MyReply/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map