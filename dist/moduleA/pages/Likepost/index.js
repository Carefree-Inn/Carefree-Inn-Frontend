(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["moduleA/pages/Likepost/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/moduleA/pages/Likepost/index.jsx":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/moduleA/pages/Likepost/index.jsx ***!
  \******************************************************************************/
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
/* harmony import */ var _Service_fet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Service/fet */ "./src/Service/fet.jsx");
/* harmony import */ var _Components_MyPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Components/MyPost */ "./src/Components/MyPost/index.jsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./src/moduleA/pages/Likepost/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);


/* import {  useState , useEffect} from 'react' */



/* import { getJson } from '../../../Service/fet' */

/* import Fetch from '../../../Service/fetch' */




var Likepost = function Likepost() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
    _useState2 = Object(_Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
    page = _useState2[0],
    setPage = _useState2[1];
  var limit = 10;
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
    _useState4 = Object(_Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
    posts = _useState4[0],
    setPosts = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
    _useState6 = Object(_Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
    fresh = _useState6[0],
    setFresh = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
    _useState8 = Object(_Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState7, 2),
    bottom = _useState8[0],
    setBottom = _useState8[1];
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_Service_fet__WEBPACK_IMPORTED_MODULE_4__[/* getJson */ "b"])('/post/liked?page=' + page + 1 + '&limit=' + limit, {}).then(function (res) {
      console.log(res.data);
      if (res.data.length > 0) {
        setBottom(false);
        setPosts(posts.concat(res.data));
        setPage(page + 1);
      } else setBottom(true);
    });
  }, [fresh]);
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["useReachBottom"])(function () {
    setFresh(!fresh);
    // setPage(page+1)
  });

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
      className: "like",
      children: [posts.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
          className: "post",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_Components_MyPost__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
            id: item.post_id,
            avatar: item.user_info.avatar,
            nickname: item.user_info.nickname,
            create_time: item.create_time,
            likes: item.likes,
            liked: item.liked,
            title: item.title,
            content: item.content
          })
        }, item.post_id);
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
        className: "btm",
        children: bottom ? '已经到底啦!' : ''
      })]
    })
  });
};
/* harmony default export */ __webpack_exports__["a"] = (Likepost);

/***/ }),

/***/ "./src/moduleA/pages/Likepost/index.jsx":
/*!**********************************************!*\
  !*** ./src/moduleA/pages/Likepost/index.jsx ***!
  \**********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/moduleA/pages/Likepost/index.jsx");


var config = {"navigationBarTitleText":"我喜欢的帖子"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'moduleA/pages/Likepost/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/moduleA/pages/Likepost/index.less":
/*!***********************************************!*\
  !*** ./src/moduleA/pages/Likepost/index.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/moduleA/pages/Likepost/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map