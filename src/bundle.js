/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var on_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! on-change */ \"./node_modules/on-change/index.js\");\n/* harmony import */ var on_change__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(on_change__WEBPACK_IMPORTED_MODULE_0__);\n/**\r\n * \r\n */\r\n\r\n\r\n\r\nfunction save(foo){\r\n\talert(\"ss\")\r\n}\r\n\r\nconst foo = Object(on_change__WEBPACK_IMPORTED_MODULE_0__[\"onChange\"])({\r\n\ta: 0,\r\n\tb: 0\r\n}, () => save(foo))\r\n\r\n\r\nfoo.a = 3\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./node_modules/on-change/index.js":
/*!*****************************************!*\
  !*** ./node_modules/on-change/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst isPrimitive = value => value === null || (typeof value !== 'object' && typeof value !== 'function');\n\nconst concatPath = (path, property) => {\n\tif (property && property.toString) {\n\t\tif (path) {\n\t\t\tpath += '.';\n\t\t}\n\n\t\tpath += property.toString();\n\t}\n\n\treturn path;\n};\n\nconst proxyTarget = Symbol('ProxyTarget');\n\nconst onChange = (object, onChange) => {\n\tlet inApply = false;\n\tlet changed = false;\n\tconst propCache = new WeakMap();\n\tconst pathCache = new WeakMap();\n\n\tconst handleChange = (path, property, previous, value) => {\n\t\tif (!inApply) {\n\t\t\tonChange.call(proxy, concatPath(path, property), value, previous);\n\t\t} else if (!changed) {\n\t\t\tchanged = true;\n\t\t}\n\t};\n\n\tconst getOwnPropertyDescriptor = (target, property) => {\n\t\tlet props = propCache.get(target);\n\n\t\tif (props) {\n\t\t\treturn props;\n\t\t}\n\n\t\tprops = new Map();\n\t\tpropCache.set(target, props);\n\n\t\tlet prop = props.get(property);\n\t\tif (!prop) {\n\t\t\tprop = Reflect.getOwnPropertyDescriptor(target, property);\n\t\t\tprops.set(property, prop);\n\t\t}\n\n\t\treturn prop;\n\t};\n\n\tconst invalidateCachedDescriptor = (target, property) => {\n\t\tconst props = propCache.get(target);\n\n\t\tif (props) {\n\t\t\tprops.delete(property);\n\t\t}\n\t};\n\n\tconst handler = {\n\t\tget(target, property, receiver) {\n\t\t\tif (property === proxyTarget) {\n\t\t\t\treturn target;\n\t\t\t}\n\n\t\t\tconst value = Reflect.get(target, property, receiver);\n\t\t\tif (isPrimitive(value) || property === 'constructor') {\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\t// Preserve invariants\n\t\t\tconst descriptor = getOwnPropertyDescriptor(target, property);\n\t\t\tif (descriptor && !descriptor.configurable) {\n\t\t\t\tif (descriptor.set && !descriptor.get) {\n\t\t\t\t\treturn undefined;\n\t\t\t\t}\n\n\t\t\t\tif (descriptor.writable === false) {\n\t\t\t\t\treturn value;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tpathCache.set(value, concatPath(pathCache.get(target), property));\n\t\t\treturn new Proxy(value, handler);\n\t\t},\n\n\t\tset(target, property, value, receiver) {\n\t\t\tif (value && value[proxyTarget] !== undefined) {\n\t\t\t\tvalue = value[proxyTarget];\n\t\t\t}\n\n\t\t\tconst previous = Reflect.get(target, property, receiver);\n\t\t\tconst result = Reflect.set(target, property, value);\n\n\t\t\tif (previous !== value) {\n\t\t\t\thandleChange(pathCache.get(target), property, previous, value);\n\t\t\t}\n\n\t\t\treturn result;\n\t\t},\n\n\t\tdefineProperty(target, property, descriptor) {\n\t\t\tconst result = Reflect.defineProperty(target, property, descriptor);\n\t\t\tinvalidateCachedDescriptor(target, property);\n\n\t\t\thandleChange(pathCache.get(target), property, undefined, descriptor.value);\n\n\t\t\treturn result;\n\t\t},\n\n\t\tdeleteProperty(target, property) {\n\t\t\tconst previous = Reflect.get(target, property);\n\t\t\tconst result = Reflect.deleteProperty(target, property);\n\t\t\tinvalidateCachedDescriptor(target, property);\n\n\t\t\thandleChange(pathCache.get(target), property, previous);\n\n\t\t\treturn result;\n\t\t},\n\n\t\tapply(target, thisArg, argumentsList) {\n\t\t\tif (!inApply) {\n\t\t\t\tinApply = true;\n\n\t\t\t\tconst result = Reflect.apply(target, thisArg, argumentsList);\n\n\t\t\t\tif (changed) {\n\t\t\t\t\tonChange();\n\t\t\t\t}\n\n\t\t\t\tinApply = false;\n\t\t\t\tchanged = false;\n\n\t\t\t\treturn result;\n\t\t\t}\n\n\t\t\treturn Reflect.apply(target, thisArg, argumentsList);\n\t\t}\n\t};\n\n\tpathCache.set(object, '');\n\tconst proxy = new Proxy(object, handler);\n\n\treturn proxy;\n};\n\nmodule.exports = onChange;\n// TODO: Remove this for the next major release\nmodule.exports.default = onChange;\n\n\n//# sourceURL=webpack:///./node_modules/on-change/index.js?");

/***/ })

/******/ });