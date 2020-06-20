module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "undefined";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_actions_userActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/actions/userActions */ \"./src/redux/actions/userActions.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/shamim/Practice/NextJS/nextjs-redux-boilerplate/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import React from 'react';\n\n\nlet userData = {\n  name: 'Muhammad Anas Habib',\n  mobile: '0123456789',\n  address: 'Dhaka, Bangladesh'\n};\n\n\nclass index extends react__WEBPACK_IMPORTED_MODULE_2__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"handleCreateUser\", () => {\n      console.log('object');\n      this.props.createUser(userData);\n    });\n  }\n\n  render() {\n    console.log(this.props.userData.peoples);\n    return __jsx(\"div\", {\n      className: \"dataBox\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 7\n      }\n    }, __jsx(\"h2\", {\n      className: \"register\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }\n    }, \"Register a user\"), __jsx(\"h2\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }\n    }, __jsx(\"button\", {\n      onClick: this.handleCreateUser,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }\n    }, \"Click\")), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }\n    }, __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 11\n      }\n    }, \"Name:\", ' ', this.props.userData.peoples ? this.props.userData.peoples.name : ''), __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }\n    }, \"Mobile:\", ' ', this.props.userData.peoples ? this.props.userData.peoples.mobile : ''), __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }\n    }, \"Address:\", ' ', this.props.userData.peoples ? this.props.userData.peoples.address : '')));\n  }\n\n}\n\nconst mapStateToProps = state => {\n  return {\n    userData: state.user\n  };\n};\n\nconst mapDispatchToProps = dispatch => ({\n  createUser: userData => {\n    console.log(userData);\n    dispatch(Object(redux_actions_userActions__WEBPACK_IMPORTED_MODULE_1__[\"createUserAction\"])(userData));\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(index));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVzZXJEYXRhIiwibmFtZSIsIm1vYmlsZSIsImFkZHJlc3MiLCJpbmRleCIsIkNvbXBvbmVudCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImNyZWF0ZVVzZXIiLCJyZW5kZXIiLCJwZW9wbGVzIiwiaGFuZGxlQ3JlYXRlVXNlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY3JlYXRlVXNlckFjdGlvbiIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsUUFBUSxHQUFHO0FBQ2JDLE1BQUksRUFBRSxxQkFETztBQUViQyxRQUFNLEVBQUUsWUFGSztBQUdiQyxTQUFPLEVBQUU7QUFISSxDQUFmO0FBTUE7O0FBRUEsTUFBTUMsS0FBTixTQUFvQkMsK0NBQXBCLENBQThCO0FBQUE7QUFBQTs7QUFBQSw4Q0FDVCxNQUFNO0FBQ3ZCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsV0FBS0MsS0FBTCxDQUFXQyxVQUFYLENBQXNCVCxRQUF0QjtBQUNELEtBSjJCO0FBQUE7O0FBTTVCVSxRQUFNLEdBQUc7QUFDUEosV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsS0FBTCxDQUFXUixRQUFYLENBQW9CVyxPQUFoQztBQUVBLFdBQ0U7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQVEsYUFBTyxFQUFFLEtBQUtDLGdCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FGRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUNRLEdBRFIsRUFFRyxLQUFLSixLQUFMLENBQVdSLFFBQVgsQ0FBb0JXLE9BQXBCLEdBQ0csS0FBS0gsS0FBTCxDQUFXUixRQUFYLENBQW9CVyxPQUFwQixDQUE0QlYsSUFEL0IsR0FFRyxFQUpOLENBREYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNVLEdBRFYsRUFFRyxLQUFLTyxLQUFMLENBQVdSLFFBQVgsQ0FBb0JXLE9BQXBCLEdBQ0csS0FBS0gsS0FBTCxDQUFXUixRQUFYLENBQW9CVyxPQUFwQixDQUE0QlQsTUFEL0IsR0FFRyxFQUpOLENBUEYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNXLEdBRFgsRUFFRyxLQUFLTSxLQUFMLENBQVdSLFFBQVgsQ0FBb0JXLE9BQXBCLEdBQ0csS0FBS0gsS0FBTCxDQUFXUixRQUFYLENBQW9CVyxPQUFwQixDQUE0QlIsT0FEL0IsR0FFRyxFQUpOLENBYkYsQ0FMRixDQURGO0FBNEJEOztBQXJDMkI7O0FBd0M5QixNQUFNVSxlQUFlLEdBQUlDLEtBQUQsSUFBVztBQUNqQyxTQUFPO0FBQ0xkLFlBQVEsRUFBRWMsS0FBSyxDQUFDQztBQURYLEdBQVA7QUFHRCxDQUpEOztBQU1BLE1BQU1DLGtCQUFrQixHQUFJQyxRQUFELEtBQWU7QUFDeENSLFlBQVUsRUFBR1QsUUFBRCxJQUFjO0FBQ3hCTSxXQUFPLENBQUNDLEdBQVIsQ0FBWVAsUUFBWjtBQUNBaUIsWUFBUSxDQUFDQyxrRkFBZ0IsQ0FBQ2xCLFFBQUQsQ0FBakIsQ0FBUjtBQUNEO0FBSnVDLENBQWYsQ0FBM0I7O0FBT2VtQiwwSEFBTyxDQUFDTixlQUFELEVBQWtCRyxrQkFBbEIsQ0FBUCxDQUE2Q1osS0FBN0MsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtjcmVhdGVVc2VyQWN0aW9ufSBmcm9tICdyZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zJztcbmxldCB1c2VyRGF0YSA9IHtcbiAgbmFtZTogJ011aGFtbWFkIEFuYXMgSGFiaWInLFxuICBtb2JpbGU6ICcwMTIzNDU2Nzg5JyxcbiAgYWRkcmVzczogJ0RoYWthLCBCYW5nbGFkZXNoJyxcbn07XG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBpbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGhhbmRsZUNyZWF0ZVVzZXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ29iamVjdCcpO1xuICAgIHRoaXMucHJvcHMuY3JlYXRlVXNlcih1c2VyRGF0YSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMudXNlckRhdGEucGVvcGxlcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhQm94XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJyZWdpc3RlclwiPlJlZ2lzdGVyIGEgdXNlcjwvaDI+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ3JlYXRlVXNlcn0+Q2xpY2s8L2J1dHRvbj5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIE5hbWU6eycgJ31cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXJEYXRhLnBlb3BsZXNcbiAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLnVzZXJEYXRhLnBlb3BsZXMubmFtZVxuICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIE1vYmlsZTp7JyAnfVxuICAgICAgICAgICAge3RoaXMucHJvcHMudXNlckRhdGEucGVvcGxlc1xuICAgICAgICAgICAgICA/IHRoaXMucHJvcHMudXNlckRhdGEucGVvcGxlcy5tb2JpbGVcbiAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBBZGRyZXNzOnsnICd9XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy51c2VyRGF0YS5wZW9wbGVzXG4gICAgICAgICAgICAgID8gdGhpcy5wcm9wcy51c2VyRGF0YS5wZW9wbGVzLmFkZHJlc3NcbiAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyRGF0YTogc3RhdGUudXNlcixcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgY3JlYXRlVXNlcjogKHVzZXJEYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuICAgIGRpc3BhdGNoKGNyZWF0ZVVzZXJBY3Rpb24odXNlckRhdGEpKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShpbmRleCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./src/redux/actions/actionTypes.js":
/*!******************************************!*\
  !*** ./src/redux/actions/actionTypes.js ***!
  \******************************************/
/*! exports provided: POST_USER, CREATE_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POST_USER\", function() { return POST_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CREATE_USER\", function() { return CREATE_USER; });\nconst POST_USER = 'POST_USER';\nconst CREATE_USER = 'CREATE_USER';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25UeXBlcy5qcz9hZTcxIl0sIm5hbWVzIjpbIlBPU1RfVVNFUiIsIkNSRUFURV9VU0VSIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxTQUFTLEdBQUcsV0FBbEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEIiLCJmaWxlIjoiLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25UeXBlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBQT1NUX1VTRVIgPSAnUE9TVF9VU0VSJ1xuZXhwb3J0IGNvbnN0IENSRUFURV9VU0VSID0gJ0NSRUFURV9VU0VSJ1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/actions/actionTypes.js\n");

/***/ }),

/***/ "./src/redux/actions/userActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/userActions.js ***!
  \******************************************/
/*! exports provided: createUserAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUserAction\", function() { return createUserAction; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/actions/actionTypes */ \"./src/redux/actions/actionTypes.js\");\n\n\n\n\nconst createUserAction = user => {\n  console.log(user);\n  return {\n    type: redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__[\"CREATE_USER\"],\n    payload: user\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcz9lN2RlIl0sIm5hbWVzIjpbImNyZWF0ZVVzZXJBY3Rpb24iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJhY3Rpb25UeXBlcyIsInBheWxvYWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR08sTUFBTUEsZ0JBQWdCLEdBQUlDLElBQUQsSUFBVTtBQUN4Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQSxTQUFPO0FBQ0xHLFFBQUksRUFBRUMscUVBREQ7QUFFTEMsV0FBTyxFQUFFTDtBQUZKLEdBQVA7QUFJRCxDQU5NIiwiZmlsZSI6Ii4vc3JjL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tICdyZWR1eC9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlckFjdGlvbiA9ICh1c2VyKSA9PiB7XG4gIGNvbnNvbGUubG9nKHVzZXIpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLkNSRUFURV9VU0VSLFxuICAgIHBheWxvYWQ6IHVzZXIsXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/actions/userActions.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shamim/Practice/NextJS/nextjs-redux-boilerplate/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ })

/******/ });