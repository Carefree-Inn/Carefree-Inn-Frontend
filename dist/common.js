(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/Images/heart.svg":
/*!******************************!*\
  !*** ./src/Images/heart.svg ***!
  \******************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Images/heart.svg";

/***/ }),

/***/ "./src/Images/like.svg":
/*!*****************************!*\
  !*** ./src/Images/like.svg ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Images/like.svg";

/***/ }),

/***/ "./src/Images/topic.png":
/*!******************************!*\
  !*** ./src/Images/topic.png ***!
  \******************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Images/topic.png";

/***/ }),

/***/ "./src/service/fetch.js":
/*!******************************!*\
  !*** ./src/service/fetch.js ***!
  \******************************/
/*! exports provided: postData, getJson, putData */
/*! exports used: getJson, postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getJson; });
/* unused harmony export putData */
/* harmony import */ var D_web_Project_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_web_Project_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);



var preUrl = "http://139.196.30.123:8080/inn/api/v1";
var Fetch = function Fetch(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = arguments.length > 2 ? arguments[2] : undefined;
  var header = {
    "content-type": "application/json",
    Authorization: _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getStorageSync("token")
  };
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.request({
    url: url,
    data: data,
    method: method,
    header: header
  }).then(function (res) {
    switch (res.statusCode) {
      case 200:
        {
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
  }).catch(function (e) {
    console.log(e);
  });
};
function postData() {
  return _postData.apply(this, arguments);
}
function _postData() {
  _postData = Object(D_web_Project_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(D_web_Project_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee() {
    var url,
      data,
      _args = arguments;
    return Object(D_web_Project_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = _args.length > 0 && _args[0] !== undefined ? _args[0] : "";
          data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          _context.next = 4;
          return Fetch(preUrl + url, JSON.stringify(data), "POST");
        case 4:
          return _context.abrupt("return", _context.sent);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _postData.apply(this, arguments);
}
function getJson() {
  return _getJson.apply(this, arguments);
}
function _getJson() {
  _getJson = Object(D_web_Project_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(D_web_Project_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2() {
    var url,
      data,
      _args2 = arguments;
    return Object(D_web_Project_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          url = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : "";
          data = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
          _context2.next = 4;
          return Fetch(preUrl + url, JSON.stringify(data), "GET");
        case 4:
          return _context2.abrupt("return", _context2.sent);
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getJson.apply(this, arguments);
}
function putData() {
  return _putData.apply(this, arguments);
}
function _putData() {
  _putData = Object(D_web_Project_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(D_web_Project_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3() {
    var url,
      data,
      _args3 = arguments;
    return Object(D_web_Project_Carefree_Inn_Fronted_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          url = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : "";
          data = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
          _context3.next = 4;
          return Fetch(preUrl + url, JSON.stringify(data), "PUT");
        case 4:
          return _context3.abrupt("return", _context3.sent);
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _putData.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=common.js.map