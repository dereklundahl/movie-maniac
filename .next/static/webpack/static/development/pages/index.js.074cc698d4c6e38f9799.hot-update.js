webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/BigMomma.js":
/*!*************************!*\
  !*** ./src/BigMomma.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PopularMovie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PopularMovie */ "./src/components/PopularMovie.js");
var _jsxFileName = "C:\\Users\\derek\\nonBlocProjects\\churchCommunityBuilder\\movie-maniac\\src\\BigMomma.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .container {\n      display: flex;\n      border: 10px solid goldenrod;\n      height: 100vh;\n      flex-wrap: wrap;\n  };\n\n  .box {\n    width: 33.3333333%;\n  }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 //import './assets/css/App.css';
//import NowPlaying from './components/NowPlaying';
//import PopularComponent from './components/PopularComponent';
//import TopRated from './components/TopRated';




var StyledBody = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].body(_templateObject());

var BigMomma =
/*#__PURE__*/
function (_Component) {
  _inherits(BigMomma, _Component);

  function BigMomma(props) {
    var _this;

    _classCallCheck(this, BigMomma);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BigMomma).call(this, props));
    _this.state = {
      popular: [],
      nowPlaying: [],
      topRated: [],
      loading: false
    };
    return _this;
  }

  _createClass(BigMomma, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      //Show that the data is loading
      this.setState({
        loading: true
      }); //Use fetch api to get data to load into state for popular

      isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()('https://api.themoviedb.org/3/movie/popular?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        _this2.setState({
          popular: json.results
        });
      }); // Use fetch api to get now playing data and load in state

      isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()("https://api.themoviedb.org/3/movie/now_playing?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1", {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        _this2.setState({
          nowPlaying: json.results
        });
      }); // Use fetch to get top rated data to load in state

      isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()("https://api.themoviedb.org/3/movie/top_rated?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1", {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        _this2.setState({
          topRated: json.results
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, Object.keys(this.state.popular).map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PopularMovie__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: key,
          movieDetails: _this3.state.popular[key],
          className: "box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        });
      })));
    }
  }]);

  return BigMomma;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BigMomma);

/***/ })

})
//# sourceMappingURL=index.js.074cc698d4c6e38f9799.hot-update.js.map