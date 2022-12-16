(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("squishMenu", [], factory);
	else if(typeof exports === 'object')
		exports["squishMenu"] = factory();
	else
		root["squishMenu"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/squishMenu.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/getItemsWidth.js":
/*!******************************!*\
  !*** ./src/getItemsWidth.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Add up the widths of all the .menu-items
// We only do it once in the default state
// because they're apt to change width when the container is .too-small
var getItemsWidth = function getItemsWidth(container, callback) {
  var sum = 0;
  var items = container.querySelectorAll(".menu-item");

  if (items.length > 0) {
    items.forEach(function (item) {
      sum += item.offsetWidth;
    });
  } else {
    console.log("No .menu-items found in the container");
  }

  if (typeof callback === "function") callback();
  return sum;
};

var _default = getItemsWidth;
exports.default = _default;

/***/ }),

/***/ "./src/squishMenu.js":
/*!***************************!*\
  !*** ./src/squishMenu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getItemsWidth = _interopRequireDefault(__webpack_require__(/*! ./getItemsWidth */ "./src/getItemsWidth.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// squishMenu
var squishMenu = function squishMenu(options) {
  var container = document.getElementById(options.containerId);

  if (container === undefined) {
    console.log("containerId is undefined");
  } else if (container === null) {
    console.log("containerId is not available");
  } else {
    var itemsWidth = (0, _getItemsWidth.default)(container, function () {
      // After we've calculated the width of all the .menu-items
      // add class .squish-ready to the container
      container.classList.add("squish-ready");
    }); // Set appropriate classes

    var setStates = function setStates() {
      var containerWidth = container.offsetWidth;

      if (itemsWidth <= containerWidth) {
        container.classList.remove("too-small");
        container.classList.remove("is-open");
      }

      if (itemsWidth > containerWidth) {
        container.classList.add("too-small");
      }
    };

    setStates();
    window.addEventListener("resize", setStates);
    var toggles = document.getElementsByClassName(options.toggleClass);

    if (toggles.length > 0) {
      // Click the .menu-toggle to open the menu. Obvs.
      document.querySelectorAll(".".concat(options.toggleClass)).forEach(function (item) {
        return item.addEventListener("click", function () {
          container.classList.toggle("is-open");
        });
      });
    } else {
      console.log("No toggleClass found or toggleClass is undefined");
    }
  }
};

var _default = squishMenu;
exports.default = _default;

/***/ })

/******/ });
});
//# sourceMappingURL=squishMenu.js.map