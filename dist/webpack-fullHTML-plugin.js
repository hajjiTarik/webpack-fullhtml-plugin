(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("path"));
	else if(typeof define === 'function' && define.amd)
		define(["path"], factory);
	else if(typeof exports === 'object')
		exports["WebpackFullHTMLPlugin"] = factory(require("path"));
	else
		root["WebpackFullHTMLPlugin"] = factory(root["path"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _path = __webpack_require__(1);

	var _path2 = _interopRequireDefault(_path);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
	  function _class(options) {
	    _classCallCheck(this, _class);

	    this.jsHandler = function (js) {
	      var _js = js instanceof Array ? js : [js];
	      var tmp = "";
	      if (_js.length === 0) return html;
	      for (var i = 0; i < _js.length; i++) {
	        tmp += '<script type="text/javascript" src="' + _js[i] + '"></script>\n';
	      }
	      return tmp;
	    };

	    this.cssHandler = function (css, html) {
	      var _css = css instanceof Array ? css : [css];
	      var tmp = "";
	      if (_css.length === 0) return html;
	      for (var i = 0; i < _css.length; i++) {
	        tmp += '<link rel="stylesheet" type="text/css" href="' + _css[i] + '"/>\n';
	      }
	      return tmp;
	    };

	    this.initialTemplate = function (_ref, cssHandler, jsHandler) {
	      var title = _ref.title,
	          classname = _ref.classname,
	          css = _ref.css,
	          js = _ref.js;

	      var html = '<!DOCTYPE html>\n';
	      html += '<html>\n';
	      html += '<head>\n';
	      html += '<meta charset="UTF-8">\n';
	      html += '<title>' + title + '</title>\n';

	      html += cssHandler(css);

	      html += '</head>\n';
	      html += '<body>\n';
	      html += '<div class="' + classname + '"></div>\n';

	      html += jsHandler(js);

	      html += '</body>\n';
	      html += '</html>';

	      return html;
	    };

	    if (arguments.length > 1) {
	      throw new Error("Please check you options and be sure to pass the correct params");
	    }

	    this.options = _extends({}, options);
	  }

	  _createClass(_class, [{
	    key: "apply",
	    value: function apply(compiler) {
	      var _this = this;

	      var options = this.options,
	          cssHandler = this.cssHandler,
	          jsHandler = this.jsHandler;

	      var filename = options.filename;
	      var file = null;
	      if (_path2.default.resolve(filename) === _path2.default.normalize(filename)) {
	        options.filename = _path2.default.relative(compiler.options.output.path, filename);
	      }

	      compiler.plugin("emit", function (compilation, callback) {

	        file = _this.initialTemplate(options, cssHandler, jsHandler);
	        compilation.assets[_this.options.filename] = {
	          source: function source() {
	            return file;
	          },
	          size: function size() {
	            return file.length;
	          }
	        };

	        callback();
	      });
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ })
/******/ ])
});
;