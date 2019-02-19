webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/TopRatedComponent.js":
/*!*********************************************!*\
  !*** ./src/components/TopRatedComponent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopRatedMovie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopRatedMovie */ "./src/components/TopRatedMovie.js");
var _jsxFileName = "C:\\Users\\derek\\nonBlocProjects\\churchCommunityBuilder\\movie-maniac\\src\\components\\TopRatedComponent.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TopRatedComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TopRatedComponent, _React$Component);

  function TopRatedComponent() {
    _classCallCheck(this, TopRatedComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TopRatedComponent).apply(this, arguments));
  }

  _createClass(TopRatedComponent, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, Object.keys(this.props.movieDetails).map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TopRatedMovie__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: key,
          movieDetails: _this.props.movieDetails[key],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        });
      }));
    }
  }]);

  return TopRatedComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TopRatedComponent);

/***/ })

})
//# sourceMappingURL=index.js.88059fb3dfb4aa95bbf9.hot-update.js.map