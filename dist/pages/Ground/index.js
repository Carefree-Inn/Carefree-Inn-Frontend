(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/Ground/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/Ground/index.jsx":
/*!********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/Ground/index.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./src/pages/Ground/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Images_edit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Images/edit.svg */ "./src/Images/edit.svg");
/* harmony import */ var _Images_edit_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Images_edit_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_GroundArticle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/GroundArticle */ "./src/components/GroundArticle/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







var Ground = function Ground() {
  var goPostArticle = function goPostArticle() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.navigateTo({
      url: '/moduleB/pages/PostArticle/index',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function acceptDataFromOpenedPage(data) {
          console.log(data);
        },
        someEvent: function someEvent(data) {
          console.log(data);
        }
      },
      success: function success(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', {
          data: 'test'
        });
      }
    }).then(function (r) {});
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "e"], {
    className: "ground",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Input */ "b"], {
      type: "text",
      placeholder: "\u641C\u7D22\u5E16\u5B50",
      className: "searchBox"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "e"], {
      className: "groundBox",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "e"], {
        className: "groundAreas",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "e"], {
          className: "groundArea",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "c"], {
            children: "\u804A\u5929\u55D1\u74DC\u5B50"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "e"], {
          className: "groundArea",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "c"], {
            children: "\u4E8C\u624B\u7269\u54C1"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "e"], {
          className: "groundArea",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "c"], {
            children: "\u9009\u8BFE"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "e"], {
          className: "groundArea",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "c"], {
            children: "\u5B66\u4E60\u7EC4\u961F"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "e"], {
          className: "groundArea",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "c"], {
            children: "\u5403\u559D\u73A9\u4E50"
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "e"], {
        className: "cards",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_GroundArticle__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_GroundArticle__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {})]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "e"], {
      className: "groundPostArticle",
      onClick: goPostArticle,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "a"], {
        className: "groundPostArticleImg",
        src: _Images_edit_svg__WEBPACK_IMPORTED_MODULE_3___default.a
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["a"] = (Ground);

/***/ }),

/***/ "./src/Images/edit.svg":
/*!*****************************!*\
  !*** ./src/Images/edit.svg ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxNjczMTg4MjI3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijg5MDciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTI1Ny43IDc1MmMyIDAgNC0wLjIgNi0wLjVMNDMxLjkgNzIyYzItMC40IDMuOS0xLjMgNS4zLTIuOGw0MjMuOS00MjMuOWMzLjktMy45IDMuOS0xMC4yIDAtMTQuMUw2OTQuOSAxMTQuOWMtMS45LTEuOS00LjQtMi45LTcuMS0yLjlzLTUuMiAxLTcuMSAyLjlMMjU2LjggNTM4LjhjLTEuNSAxLjUtMi40IDMuMy0yLjggNS4zbC0yOS41IDE2OC4yYy0xLjkgMTEuMSAxLjUgMjEuOSA5LjQgMjkuOCA2LjYgNi40IDE0LjkgOS45IDIzLjggOS45eiBtNjcuNC0xNzQuNEw2ODcuOCAyMTVsNzMuMyA3My4zLTM2Mi43IDM2Mi42LTg4LjkgMTUuNyAxNS42LTg5ek04ODAgODM2SDE0NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2MzZjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTM2YzAtMTcuNy0xNC4zLTMyLTMyLTMyeiIgcC1pZD0iODkwOCI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),

/***/ "./src/Images/message.svg":
/*!********************************!*\
  !*** ./src/Images/message.svg ***!
  \********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Images/message.svg";

/***/ }),

/***/ "./src/Images/more.svg":
/*!*****************************!*\
  !*** ./src/Images/more.svg ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxNDA2MjgwNjEzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2MjYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTI0My4yIDUxMm0tODMuMiAwYTEuMyAxLjMgMCAxIDAgMTY2LjQgMCAxLjMgMS4zIDAgMSAwLTE2Ni40IDBaIiBwLWlkPSIyNjI3Ij48L3BhdGg+PHBhdGggZD0iTTUxMiA1MTJtLTgzLjIgMGExLjMgMS4zIDAgMSAwIDE2Ni40IDAgMS4zIDEuMyAwIDEgMC0xNjYuNCAwWiIgcC1pZD0iMjYyOCI+PC9wYXRoPjxwYXRoIGQ9Ik03ODAuOCA1MTJtLTgzLjIgMGExLjMgMS4zIDAgMSAwIDE2Ni40IDAgMS4zIDEuMyAwIDEgMC0xNjYuNCAwWiIgcC1pZD0iMjYyOSI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),

/***/ "./src/components/GroundArticle/index.jsx":
/*!************************************************!*\
  !*** ./src/components/GroundArticle/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _Images_topic_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Images/topic.png */ "./src/Images/topic.png");
/* harmony import */ var _Images_topic_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Images_topic_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Images_more_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Images/more.svg */ "./src/Images/more.svg");
/* harmony import */ var _Images_more_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Images_more_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Images_like_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Images/like.svg */ "./src/Images/like.svg");
/* harmony import */ var _Images_like_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Images_like_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Images_message_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Images/message.svg */ "./src/Images/message.svg");
/* harmony import */ var _Images_message_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Images_message_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Images_heart_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Images/heart.svg */ "./src/Images/heart.svg");
/* harmony import */ var _Images_heart_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Images_heart_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./src/components/GroundArticle/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










var GroundArticle = function GroundArticle() {
  var goArticle = function goArticle() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.navigateTo({
      url: '/moduleB/pages/Article/index',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function acceptDataFromOpenedPage(data) {
          console.log(data);
        },
        someEvent: function someEvent(data) {
          console.log(data);
        }
      },
      success: function success(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', {
          data: 'test'
        });
      }
    }).then(function (r) {});
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "e"], {
    className: "card",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "e"], {
      className: "cardInfo",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "e"], {
        className: "cardUser",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Image */ "a"], {
          className: "cardUserImg",
          src: _Images_topic_png__WEBPACK_IMPORTED_MODULE_1___default.a
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Text */ "c"], {
          className: "cardUserName",
          children: "\u7528\u6237\u540D"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "e"], {
        className: "cardMore",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "e"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Image */ "a"], {
            className: "cardMoreInfo",
            src: _Images_more_svg__WEBPACK_IMPORTED_MODULE_2___default.a
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "e"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Text */ "c"], {
            className: "cardTime",
            children: "2023-3-13 14:30"
          })
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "e"], {
      className: "cardContent",
      onClick: goArticle,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Text */ "c"], {
        className: "cardContentText",
        children: "123455555555555556666666666666666666666666666666666666666666666666666666"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Image */ "a"], {
        className: "cardContentImage",
        src: ""
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Image */ "a"], {
        className: "cardContentImage",
        src: ""
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Image */ "a"], {
        className: "cardContentImage",
        src: ""
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Image */ "a"], {
        className: "cardContentImage",
        src: ""
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "e"], {
      className: "cardLikeBox",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "e"], {
        className: "cardLikeBox2",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Image */ "a"], {
          className: "cardLike",
          src: _Images_heart_svg__WEBPACK_IMPORTED_MODULE_5___default.a
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Image */ "a"], {
          className: "cardLike",
          src: _Images_like_svg__WEBPACK_IMPORTED_MODULE_3___default.a
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* Image */ "a"], {
          className: "cardLike",
          src: _Images_message_svg__WEBPACK_IMPORTED_MODULE_4___default.a
        })]
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["a"] = (GroundArticle);

/***/ }),

/***/ "./src/components/GroundArticle/index.less":
/*!*************************************************!*\
  !*** ./src/components/GroundArticle/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/Ground/index.jsx":
/*!************************************!*\
  !*** ./src/pages/Ground/index.jsx ***!
  \************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/Ground/index.jsx");


var config = {"navigationBarTitleText":"广场"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/Ground/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/Ground/index.less":
/*!*************************************!*\
  !*** ./src/pages/Ground/index.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/Ground/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map