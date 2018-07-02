/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var calc = document.querySelector(".time");

var inputs = document.querySelectorAll("input[type=radio]");
var prices = {
    day: 3,
    three: 2,
    week: 1
};
// const rates = {
//     fast: {
//         price: 3,
//         term: "В течении дня"
//     },
//     standart: {
//         price: 2,
//         term: "От 3 до 4 дней"
//     },
//     econom: {
//         price: 1,
//         term: "Неделя"
//     }
// };
var rates = {
    day: {
        price: 3,
        term: "В течении дня"
    },
    three: {
        price: 2,
        term: "От 3 до 4 дней"
    },
    week: {
        price: 1,
        term: "Неделя"
    }
};
function showPrice(id) {
    var price = rates[id].price;
    priceCont.innerHTML = price + " BYN";
    term.innerHTML = rates[id].term;
}
var term = document.querySelector("#term");
var priceCont = document.querySelector("#price");
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", function (e) {
        var id = e.target.id;
        showPrice(id);
    });
}
showPrice("three");

// accroditon

var Accord = function () {
    function Accord() {
        _classCallCheck(this, Accord);

        this.container = document.querySelector(".accordion");
        this.items = this.container.querySelectorAll(".accordion_item");
        this._init();
    }

    _createClass(Accord, [{
        key: "check",
        value: function check(item, index) {
            this._hideOther(index);
            item.classList.toggle("open");
        }
    }, {
        key: "_init",
        value: function _init() {
            var _this = this;

            var _loop = function _loop(_i) {
                _this.items[_i].addEventListener("click", function (e) {
                    _this.check(_this.items[_i], _i);
                });
            };

            for (var _i = 0; _i < this.items.length; _i++) {
                _loop(_i);
            }
        }
    }, {
        key: "_hideOther",
        value: function _hideOther(index) {
            for (var _i2 = 0; _i2 < this.items.length; _i2++) {
                if (index === _i2) continue;
                var item = this.items[_i2];
                item.classList.toggle("open", false);
                // const content = item.querySelector(".item_content");
                // content.classList.toggle("open", false);
            }
        }
    }]);

    return Accord;
}();

var accord = new Accord();
// accord.check(document.querySelectorAll(".accordion_item")[0],0)


/// header 
function getPosition(element) {
    var rect = element.getBoundingClientRect();
    // console.log(rect.top, rect.right, rect.bottom, rect.left);
    return { top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left };
}
var header = document.querySelector("#main_menu");
header.addEventListener("click", function (e) {
    console.log(e);
});

window.addEventListener("hashchange", function (e) {
    // console.log(document.location.hash);
    e.preventDefault();
    var hash = document.location.hash.replace("#", "");
    console.log(hash);
    var pos = getPosition(document.querySelector("." + hash));
    console.log(pos.top);
    window.scrollTo(0, pos.top);
});

/***/ })
/******/ ]);