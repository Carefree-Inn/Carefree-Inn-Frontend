(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["moduleB/pages/InitUserInfo/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/moduleB/pages/InitUserInfo/index.jsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/moduleB/pages/InitUserInfo/index.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitUserInfo; });
/* harmony import */ var D_web_work_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "./src/moduleB/pages/InitUserInfo/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Images_add_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Images/add.png */ "./src/Images/add.png");
/* harmony import */ var _Images_add_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Images_add_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








function InitUserInfo() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
    _useState2 = Object(D_web_work_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
    _useState4 = Object(D_web_work_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
    sex = _useState4[0],
    setSex = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_Images_add_png__WEBPACK_IMPORTED_MODULE_5___default.a),
    _useState6 = Object(D_web_work_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
    avatar = _useState6[0],
    setAvatar = _useState6[1];
  var chooseAvatar = function chooseAvatar() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.chooseImage({
      count: 1,
      success: function success(res) {
        // console.log(res)
        var path = res.tempFilePaths[0];
        // console.log(path)
        setAvatar(path);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.uploadFile({
          url: 'http://139.196.30.123:8080/inn/api/v1/upload/file',
          filePath: path,
          name: 'image',
          success: function success(res) {
            console.log(res.data);
          }
        });
      }
    });
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
    className: "init-user-info",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
      className: "init-box",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "init-box-title",
        children: "\u4E2A\u4EBA\u4FE1\u606F\u586B\u5199"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "avatar-box",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
          className: "avatar",
          onClick: chooseAvatar,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "a"], {
            className: avatar === _Images_add_png__WEBPACK_IMPORTED_MODULE_5___default.a ? '' : 'chosen',
            src: avatar
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "user-info-box",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
          className: "user-name",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
            className: "name",
            children: "\u6635\xA0\xA0\u79F0"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Input */ "b"], {
            type: "text",
            value: name,
            onInput: function onInput(e) {
              return setName(e.detail.value);
            },
            placeholder: "\u60F3\u4E00\u4E2A\u6635\u79F0\uFF01"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
          className: "user-sex",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
            className: "sex",
            children: "\u6027\xA0\xA0\u522B"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
            className: "sex-radio",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Radio */ "c"], {
              value: "\u7537",
              color: "#E4ACAC",
              onClick: function onClick() {
                return setSex('男');
              },
              checked: sex === '男' ? true : false,
              children: "\u7537"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Radio */ "c"], {
              value: "\u5973",
              color: "#E4ACAC",
              onClick: function onClick() {
                return setSex('女');
              },
              checked: sex === '女' ? true : false,
              children: "\u5973"
            })]
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "f"], {
        className: "submit",
        children: "\u63D0\u4EA4"
      })]
    })
  });
}

/***/ }),

/***/ "./src/Images/add.png":
/*!****************************!*\
  !*** ./src/Images/add.png ***!
  \****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABEBAMAAADKPY6BAAAAFVBMVEUAAADeho/fh4/dhY/fh4/fhY/eho+M3KW+AAAAB3RSTlMA/0CAIGDfT9ZN5AAAAJJJREFUeJztlUEKgCAQACXtAUvkOYru0Qsi+kD9/zGppQm5bkeDnVs5h1UZFD9n6yhDgp4IZQdoCAUAdN5QRoH8NBUrrJSjqN4zWOUIn0GW9n+S0JRpB8M3hRu+qTqj3KO7XWAsT4EY9Ljt901HRzfahfl9dEXdNCusJHDBXO2gRO1gmKZ8OximKeoRFiv5lBfOCeK2KYvjcNXpAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/moduleB/pages/InitUserInfo/index.jsx":
/*!**************************************************!*\
  !*** ./src/moduleB/pages/InitUserInfo/index.jsx ***!
  \**************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/moduleB/pages/InitUserInfo/index.jsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'moduleB/pages/InitUserInfo/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/moduleB/pages/InitUserInfo/index.less":
/*!***************************************************!*\
  !*** ./src/moduleB/pages/InitUserInfo/index.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/moduleB/pages/InitUserInfo/index.jsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map