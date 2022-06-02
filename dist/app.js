/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/omdbApi.ts":
/*!****************************!*\
  !*** ./src/api/omdbApi.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"omdbApi\": () => (/* binding */ omdbApi)\n/* harmony export */ });\n/* harmony import */ var _enum_httpMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum/httpMethods */ \"./src/enum/httpMethods.ts\");\n/* harmony import */ var _enum_restEndpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enum/restEndpoints */ \"./src/enum/restEndpoints.ts\");\n/* harmony import */ var _models_movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/movie */ \"./src/models/movie.ts\");\n/* harmony import */ var _models_movieList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/movieList */ \"./src/models/movieList.ts\");\n\r\n\r\n\r\n\r\nvar omdbApi = /** @class */ (function () {\r\n    function omdbApi() {\r\n    }\r\n    omdbApi.getMovies = function () {\r\n        return new Promise(function (resolve, reject) {\r\n            var xhr = new XMLHttpRequest();\r\n            xhr.open(_enum_httpMethods__WEBPACK_IMPORTED_MODULE_0__.httpMethods.get, _enum_restEndpoints__WEBPACK_IMPORTED_MODULE_1__.endpoints.omdb, true);\r\n            xhr.onload = function () {\r\n                try {\r\n                    var data = JSON.parse(xhr.response);\r\n                    var movies_1 = new _models_movieList__WEBPACK_IMPORTED_MODULE_3__.MovieList();\r\n                    data.forEach(function (raw_movie) {\r\n                        var movie = new _models_movie__WEBPACK_IMPORTED_MODULE_2__.Movie();\r\n                        movie.load(raw_movie, movie);\r\n                        movies_1.push(movie);\r\n                    });\r\n                    resolve(movies_1);\r\n                }\r\n                catch (ex) {\r\n                    console.log(ex);\r\n                    reject();\r\n                }\r\n            };\r\n            xhr.send();\r\n        });\r\n    };\r\n    return omdbApi;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/api/omdbApi.ts?");

/***/ }),

/***/ "./src/enum/httpMethods.ts":
/*!*********************************!*\
  !*** ./src/enum/httpMethods.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"httpMethods\": () => (/* binding */ httpMethods)\n/* harmony export */ });\nvar httpMethods;\r\n(function (httpMethods) {\r\n    httpMethods[\"get\"] = \"GET\";\r\n    httpMethods[\"post\"] = \"POST\";\r\n    httpMethods[\"put\"] = \"PUT\";\r\n    httpMethods[\"delete\"] = \"DELETE\";\r\n})(httpMethods || (httpMethods = {}));\r\n;\r\n\n\n//# sourceURL=webpack:///./src/enum/httpMethods.ts?");

/***/ }),

/***/ "./src/enum/restEndpoints.ts":
/*!***********************************!*\
  !*** ./src/enum/restEndpoints.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"endpoints\": () => (/* binding */ endpoints)\n/* harmony export */ });\nvar endpoints;\r\n(function (endpoints) {\r\n    endpoints[\"omdb\"] = \"http://localhost:3000/movies\";\r\n})(endpoints || (endpoints = {}));\r\n\n\n//# sourceURL=webpack:///./src/enum/restEndpoints.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_omdbApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/omdbApi */ \"./src/api/omdbApi.ts\");\n\r\nfunction fetchMoviesFromOMDB() {\r\n    var promise = _api_omdbApi__WEBPACK_IMPORTED_MODULE_0__.omdbApi.getMovies();\r\n    promise.then(function (movies) {\r\n        console.log(movies);\r\n    }, function () {\r\n        console.log(\"error\");\r\n    });\r\n}\r\nfetchMoviesFromOMDB();\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/models/baseModel.ts":
/*!*********************************!*\
  !*** ./src/models/baseModel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseModel\": () => (/* binding */ BaseModel)\n/* harmony export */ });\nvar BaseModel = /** @class */ (function () {\r\n    function BaseModel() {\r\n        this.id = 0;\r\n    }\r\n    BaseModel.prototype.load = function (rawData, target) {\r\n        for (var prop in rawData) {\r\n            target[prop] = rawData[prop];\r\n        }\r\n    };\r\n    return BaseModel;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/models/baseModel.ts?");

/***/ }),

/***/ "./src/models/movie.ts":
/*!*****************************!*\
  !*** ./src/models/movie.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Movie\": () => (/* binding */ Movie)\n/* harmony export */ });\n/* harmony import */ var _baseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseModel */ \"./src/models/baseModel.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Movie = /** @class */ (function (_super) {\r\n    __extends(Movie, _super);\r\n    function Movie(name, producer, rating) {\r\n        if (name === void 0) { name = \"\"; }\r\n        if (producer === void 0) { producer = \"\"; }\r\n        if (rating === void 0) { rating = 0; }\r\n        var _this = _super.call(this) || this;\r\n        _this.name = name;\r\n        _this.rating = rating;\r\n        _this.producer = producer;\r\n        return _this;\r\n    }\r\n    return Movie;\r\n}(_baseModel__WEBPACK_IMPORTED_MODULE_0__.BaseModel));\r\n\r\n\n\n//# sourceURL=webpack:///./src/models/movie.ts?");

/***/ }),

/***/ "./src/models/movieList.ts":
/*!*********************************!*\
  !*** ./src/models/movieList.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieList\": () => (/* binding */ MovieList)\n/* harmony export */ });\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar MovieList = /** @class */ (function (_super) {\r\n    __extends(MovieList, _super);\r\n    function MovieList() {\r\n        return _super.call(this) || this;\r\n    }\r\n    MovieList.prototype.sortByRating = function () {\r\n        var movies = this;\r\n        movies = movies.sort(function (a, b) {\r\n            return b.rating - a.rating;\r\n        });\r\n        return movies;\r\n    };\r\n    MovieList.prototype.filterByRating = function (rating) {\r\n        if (rating === void 0) { rating = 1; }\r\n        var movies = this.map(function (item) { return item; });\r\n        movies = movies.filter(function (movie) {\r\n            return movie.rating >= rating;\r\n        });\r\n        return movies;\r\n    };\r\n    return MovieList;\r\n}(Array));\r\n\r\n\n\n//# sourceURL=webpack:///./src/models/movieList.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;