(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["moduleA/pages/EditInfo/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/moduleA/pages/EditInfo/index.jsx":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/moduleA/pages/EditInfo/index.jsx ***!
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
/* harmony import */ var _Service_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Service/fetch */ "./src/Service/fetch.jsx");
/* harmony import */ var _Images_confirm_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Images/confirm.png */ "./src/Images/confirm.png");
/* harmony import */ var _Images_confirm_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Images_confirm_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./src/moduleA/pages/EditInfo/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










var Edit = function Edit() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
    _useState2 = Object(_Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
    username = _useState2[0],
    setUsername = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
    _useState4 = Object(_Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
    sex = _useState4[0],
    setSex = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
    _useState6 = Object(_Users_apple_Desktop_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
    avatar = _useState6[0],
    setAvatar = _useState6[1];
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_Service_fetch__WEBPACK_IMPORTED_MODULE_4__[/* getJson */ "b"])('/user/profile', {}).then(function (res) {
      setUsername(res.data.nickname);
      setAvatar(res.data.avatar);
      setSex(res.data.sex);
      console.log(res.data);
    });
  }, []);
  function changeName(e) {
    console.log(e.detail.value);
    setUsername(e.detail.value);
  }
  function handleconfirm() {
    //提交昵称
    var data = {
      nickname: username,
      sex: sex,
      avatar: avatar
    };
    Object(_Service_fetch__WEBPACK_IMPORTED_MODULE_4__[/* putData */ "d"])('/user/profile', data).then(function (res) {
      console.log(res);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.showToast({
        title: '修改成功！',
        icon: 'success'
      });
    }).catch(function (error) {
      console.log(error);
    });
  }

  //上传头像
  function changeAvatar() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.chooseImage({
      count: 1,
      // 默认9
      sizeType: ['original', 'compressed'],
      // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'],
      // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
      success: function success(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var path = res.tempFilePaths[0];
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.uploadFile({
          url: 'http://139.196.30.123:8080/inn/api/v1/upload/file',
          filePath: path,
          name: 'image',
          success: function success(ress) {
            var resData = JSON.parse(ress.data);
            setAvatar(resData.data);
            console.log(resData);
          }
        });
        // console.log(tempFilePaths)
      }
    });
  }

  //七牛云

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
      className: "Edit",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
        className: "Avatar",
        onClick: changeAvatar,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
          src: avatar
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
        className: "user-sex",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
          className: "sex",
          children: "\u6027\u522B"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
          className: "sex-radio",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Radio */ "d"], {
            value: "\u7537",
            onClick: function onClick() {
              return setSex(0);
            },
            color: "#E4ACAC",
            checked: sex === 0 ? true : false,
            children: "\u7537"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Radio */ "d"], {
            value: "\u5973",
            onClick: function onClick() {
              return setSex(1);
            },
            color: "#E4ACAC",
            checked: sex === 1 ? true : false,
            children: "\u5973"
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
        className: "uid",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "e"], {
          children: "\u6635\u79F0"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "c"], {
          value: username,
          placeholder: username,
          onInput: changeName
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
        className: "submit",
        src: _Images_confirm_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        onClick: handleconfirm,
        children: "\u63D0\u4EA4"
      })]
    })
  });
};
/* harmony default export */ __webpack_exports__["a"] = (Edit);

/***/ }),

/***/ "./src/Images/confirm.png":
/*!********************************!*\
  !*** ./src/Images/confirm.png ***!
  \********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Images/confirm.png";

/***/ }),

/***/ "./src/moduleA/pages/EditInfo/index.jsx":
/*!**********************************************!*\
  !*** ./src/moduleA/pages/EditInfo/index.jsx ***!
  \**********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/moduleA/pages/EditInfo/index.jsx");


var config = {"navigationBarTitleText":"信息编辑"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'moduleA/pages/EditInfo/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/moduleA/pages/EditInfo/index.less":
/*!***********************************************!*\
  !*** ./src/moduleA/pages/EditInfo/index.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/moduleA/pages/EditInfo/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map