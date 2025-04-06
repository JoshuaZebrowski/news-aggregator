"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_newsSources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/newsSources */ \"(app-pages-browser)/./src/data/newsSources.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst newsCategories = [\n    {\n        id: 1,\n        name: \"World News\",\n        icon: \"\\uD83C\\uDF0D\"\n    },\n    {\n        id: 2,\n        name: \"Technology\",\n        icon: \"\\uD83D\\uDCBB\"\n    },\n    {\n        id: 3,\n        name: \"Business\",\n        icon: \"\\uD83D\\uDCBC\"\n    },\n    {\n        id: 4,\n        name: \"Sports\",\n        icon: \"⚽\"\n    },\n    {\n        id: 5,\n        name: \"Entertainment\",\n        icon: \"\\uD83C\\uDFAC\"\n    },\n    {\n        id: 6,\n        name: \"Science\",\n        icon: \"\\uD83D\\uDD2C\"\n    },\n    {\n        id: 7,\n        name: \"Health\",\n        icon: \"\\uD83C\\uDFE5\"\n    },\n    {\n        id: 8,\n        name: \"Politics\",\n        icon: \"\\uD83C\\uDFDB️\"\n    },\n    {\n        id: 9,\n        name: \"Environment\",\n        icon: \"\\uD83C\\uDF31\"\n    }\n];\nfunction Home() {\n    _s();\n    const [selectedTopics, setSelectedTopics] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [aggregatedNews, setAggregatedNews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleTopicClick = (topicId)=>{\n        setSelectedTopics((prev)=>{\n            if (prev.includes(topicId)) {\n                return prev.filter((id)=>id !== topicId);\n            } else {\n                return [\n                    ...prev,\n                    topicId\n                ];\n            }\n        });\n    };\n    const handleAggregate = async ()=>{\n        setIsLoading(true);\n        setError(null);\n        try {\n            const selectedCategories = newsCategories.filter((category)=>selectedTopics.includes(category.id)).map((category)=>category.name);\n            const response = await fetch(\"/api/aggregate\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    selectedTopics: selectedCategories\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to aggregate news\");\n            }\n            const data = await response.json();\n            setAggregatedNews(data.news);\n        } catch (err) {\n            setError(\"Failed to fetch news. Please try again later.\");\n            console.error(\"Error:\", err);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const getSourcesForCategory = (categoryName)=>{\n        return _data_newsSources__WEBPACK_IMPORTED_MODULE_2__.newsSources.filter((source)=>source.category.toLowerCase() === categoryName.toLowerCase());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4 py-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl font-bold text-center mb-8\",\n                    children: \"News Aggregator\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8\",\n                    children: newsCategories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>handleTopicClick(category.id),\n                            className: \"bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 cursor-pointer \".concat(selectedTopics.includes(category.id) ? \"ring-2 ring-blue-500\" : \"\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center space-x-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-3xl\",\n                                            children: category.icon\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl font-semibold\",\n                                            children: category.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this),\n                                selectedTopics.includes(category.id) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-sm font-semibold text-gray-600 mb-2\",\n                                            children: \"Reputable Sources:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                            className: \"space-y-2\",\n                                            children: getSourcesForCategory(category.name).map((source)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"text-sm\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: source.url,\n                                                            target: \"_blank\",\n                                                            rel: \"noopener noreferrer\",\n                                                            className: \"text-blue-600 hover:underline\",\n                                                            children: source.name\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                                                            lineNumber: 103,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"text-gray-500 text-xs\",\n                                                            children: source.description\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                                                            lineNumber: 111,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, source.id, true, {\n                                                    fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 23\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, category.id, true, {\n                            fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center mb-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleAggregate,\n                        disabled: selectedTopics.length === 0 || isLoading,\n                        className: \"px-6 py-3 rounded-lg text-white font-semibold \".concat(selectedTopics.length === 0 || isLoading ? \"bg-gray-400 cursor-not-allowed\" : \"bg-blue-500 hover:bg-blue-600\"),\n                        children: isLoading ? \"Aggregating...\" : \"Aggregate News (\".concat(selectedTopics.length, \" selected)\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, this),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4\",\n                    children: error\n                }, void 0, false, {\n                    fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 138,\n                    columnNumber: 11\n                }, this),\n                aggregatedNews.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white rounded-lg shadow-md p-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-bold mb-4\",\n                            children: \"Aggregated News\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 146,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-6\",\n                            children: aggregatedNews.map((newsItem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border-b pb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-lg font-semibold mb-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: newsItem.url,\n                                                    target: \"_blank\",\n                                                    rel: \"noopener noreferrer\",\n                                                    className: \"text-blue-600 hover:underline\",\n                                                    children: newsItem.source\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                                                    lineNumber: 151,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-sm text-gray-500 ml-2\",\n                                                    children: [\n                                                        \"(\",\n                                                        newsItem.category,\n                                                        \")\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                                                    lineNumber: 154,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 150,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                            className: \"list-disc list-inside space-y-1\",\n                                            children: newsItem.headlines.map((headline, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"text-gray-700\",\n                                                    children: headline\n                                                }, idx, false, {\n                                                    fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                                                    lineNumber: 158,\n                                                    columnNumber: 23\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 156,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 149,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 147,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 145,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\newsAggregator\\\\news-aggregator\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"rqF/3hf/Q/r620zf9juhD4moN/o=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV3QztBQUNVO0FBU2xELE1BQU1HLGlCQUFpQjtJQUNyQjtRQUFFQyxJQUFJO1FBQUdDLE1BQU07UUFBY0MsTUFBTTtJQUFLO0lBQ3hDO1FBQUVGLElBQUk7UUFBR0MsTUFBTTtRQUFjQyxNQUFNO0lBQUs7SUFDeEM7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQVlDLE1BQU07SUFBSztJQUN0QztRQUFFRixJQUFJO1FBQUdDLE1BQU07UUFBVUMsTUFBTTtJQUFJO0lBQ25DO1FBQUVGLElBQUk7UUFBR0MsTUFBTTtRQUFpQkMsTUFBTTtJQUFLO0lBQzNDO1FBQUVGLElBQUk7UUFBR0MsTUFBTTtRQUFXQyxNQUFNO0lBQUs7SUFDckM7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQVVDLE1BQU07SUFBSztJQUNwQztRQUFFRixJQUFJO1FBQUdDLE1BQU07UUFBWUMsTUFBTTtJQUFNO0lBQ3ZDO1FBQUVGLElBQUk7UUFBR0MsTUFBTTtRQUFlQyxNQUFNO0lBQUs7Q0FDMUM7QUFFYyxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHUiwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ2pFLE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNXLGdCQUFnQkMsa0JBQWtCLEdBQUdaLCtDQUFRQSxDQUFhLEVBQUU7SUFDbkUsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFnQjtJQUVsRCxNQUFNZSxtQkFBbUIsQ0FBQ0M7UUFDeEJSLGtCQUFrQlMsQ0FBQUE7WUFDaEIsSUFBSUEsS0FBS0MsUUFBUSxDQUFDRixVQUFVO2dCQUMxQixPQUFPQyxLQUFLRSxNQUFNLENBQUNoQixDQUFBQSxLQUFNQSxPQUFPYTtZQUNsQyxPQUFPO2dCQUNMLE9BQU87dUJBQUlDO29CQUFNRDtpQkFBUTtZQUMzQjtRQUNGO0lBQ0Y7SUFFQSxNQUFNSSxrQkFBa0I7UUFDdEJWLGFBQWE7UUFDYkksU0FBUztRQUVULElBQUk7WUFDRixNQUFNTyxxQkFBcUJuQixlQUN4QmlCLE1BQU0sQ0FBQ0csQ0FBQUEsV0FBWWYsZUFBZVcsUUFBUSxDQUFDSSxTQUFTbkIsRUFBRSxHQUN0RG9CLEdBQUcsQ0FBQ0QsQ0FBQUEsV0FBWUEsU0FBU2xCLElBQUk7WUFFaEMsTUFBTW9CLFdBQVcsTUFBTUMsTUFBTSxrQkFBa0I7Z0JBQzdDQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRXZCLGdCQUFnQmM7Z0JBQW1CO1lBQzVEO1lBRUEsSUFBSSxDQUFDRyxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUVBLE1BQU1DLE9BQU8sTUFBTVQsU0FBU1UsSUFBSTtZQUNoQ3RCLGtCQUFrQnFCLEtBQUtFLElBQUk7UUFDN0IsRUFBRSxPQUFPQyxLQUFLO1lBQ1p0QixTQUFTO1lBQ1R1QixRQUFReEIsS0FBSyxDQUFDLFVBQVV1QjtRQUMxQixTQUFVO1lBQ1IxQixhQUFhO1FBQ2Y7SUFDRjtJQUVBLE1BQU00Qix3QkFBd0IsQ0FBQ0M7UUFDN0IsT0FBT3RDLDBEQUFXQSxDQUFDa0IsTUFBTSxDQUFDcUIsQ0FBQUEsU0FDeEJBLE9BQU9sQixRQUFRLENBQUNtQixXQUFXLE9BQU9GLGFBQWFFLFdBQVc7SUFFOUQ7SUFFQSxxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNFO29CQUFHRixXQUFVOzhCQUFzQzs7Ozs7OzhCQUdwRCw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ1p6QyxlQUFlcUIsR0FBRyxDQUFDLENBQUNELHlCQUNuQiw4REFBQ3NCOzRCQUVDRSxTQUFTLElBQU0vQixpQkFBaUJPLFNBQVNuQixFQUFFOzRCQUMzQ3dDLFdBQVcsZ0dBRVYsT0FEQ3BDLGVBQWVXLFFBQVEsQ0FBQ0ksU0FBU25CLEVBQUUsSUFBSSx5QkFBeUI7OzhDQUdsRSw4REFBQ3lDO29DQUFJRCxXQUFVOztzREFDYiw4REFBQ0k7NENBQUtKLFdBQVU7c0RBQVlyQixTQUFTakIsSUFBSTs7Ozs7O3NEQUN6Qyw4REFBQzJDOzRDQUFHTCxXQUFVO3NEQUF5QnJCLFNBQVNsQixJQUFJOzs7Ozs7Ozs7Ozs7Z0NBRXJERyxlQUFlVyxRQUFRLENBQUNJLFNBQVNuQixFQUFFLG1CQUNsQyw4REFBQ3lDO29DQUFJRCxXQUFVOztzREFDYiw4REFBQ007NENBQUdOLFdBQVU7c0RBQTJDOzs7Ozs7c0RBQ3pELDhEQUFDTzs0Q0FBR1AsV0FBVTtzREFDWEwsc0JBQXNCaEIsU0FBU2xCLElBQUksRUFBRW1CLEdBQUcsQ0FBQ2lCLENBQUFBLHVCQUN4Qyw4REFBQ1c7b0RBQW1CUixXQUFVOztzRUFDNUIsOERBQUNTOzREQUNDQyxNQUFNYixPQUFPYyxHQUFHOzREQUNoQkMsUUFBTzs0REFDUEMsS0FBSTs0REFDSmIsV0FBVTtzRUFFVEgsT0FBT3BDLElBQUk7Ozs7OztzRUFFZCw4REFBQ3FEOzREQUFFZCxXQUFVO3NFQUF5QkgsT0FBT2tCLFdBQVc7Ozs7Ozs7bURBVGpEbEIsT0FBT3JDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQWZyQm1CLFNBQVNuQixFQUFFOzs7Ozs7Ozs7OzhCQW1DdEIsOERBQUN5QztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ2dCO3dCQUNDYixTQUFTMUI7d0JBQ1R3QyxVQUFVckQsZUFBZXNELE1BQU0sS0FBSyxLQUFLcEQ7d0JBQ3pDa0MsV0FBVyxpREFJVixPQUhDcEMsZUFBZXNELE1BQU0sS0FBSyxLQUFLcEQsWUFDM0IsbUNBQ0E7a0NBR0xBLFlBQVksbUJBQW1CLG1CQUF5QyxPQUF0QkYsZUFBZXNELE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Z0JBSzVFaEQsdUJBQ0MsOERBQUMrQjtvQkFBSUQsV0FBVTs4QkFDWjlCOzs7Ozs7Z0JBS0pGLGVBQWVrRCxNQUFNLEdBQUcsbUJBQ3ZCLDhEQUFDakI7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDSzs0QkFBR0wsV0FBVTtzQ0FBMEI7Ozs7OztzQ0FDeEMsOERBQUNDOzRCQUFJRCxXQUFVO3NDQUNaaEMsZUFBZVksR0FBRyxDQUFDLENBQUN1QyxVQUFVQyxzQkFDN0IsOERBQUNuQjtvQ0FBZ0JELFdBQVU7O3NEQUN6Qiw4REFBQ007NENBQUdOLFdBQVU7OzhEQUNaLDhEQUFDUztvREFBRUMsTUFBTVMsU0FBU1IsR0FBRztvREFBRUMsUUFBTztvREFBU0MsS0FBSTtvREFBc0JiLFdBQVU7OERBQ3hFbUIsU0FBU3RCLE1BQU07Ozs7Ozs4REFFbEIsOERBQUNPO29EQUFLSixXQUFVOzt3REFBNkI7d0RBQUVtQixTQUFTeEMsUUFBUTt3REFBQzs7Ozs7Ozs7Ozs7OztzREFFbkUsOERBQUM0Qjs0Q0FBR1AsV0FBVTtzREFDWG1CLFNBQVNFLFNBQVMsQ0FBQ3pDLEdBQUcsQ0FBQyxDQUFDMEMsVUFBVUMsb0JBQ2pDLDhEQUFDZjtvREFBYVIsV0FBVTs4REFBaUJzQjttREFBaENDOzs7Ozs7Ozs7OzttQ0FUTEg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CMUI7R0FoSndCekQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbmV3c1NvdXJjZXMgfSBmcm9tICcuLi9kYXRhL25ld3NTb3VyY2VzJztcclxuXHJcbmludGVyZmFjZSBOZXdzSXRlbSB7XHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgY2F0ZWdvcnk6IHN0cmluZztcclxuICBoZWFkbGluZXM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5jb25zdCBuZXdzQ2F0ZWdvcmllcyA9IFtcclxuICB7IGlkOiAxLCBuYW1lOiAnV29ybGQgTmV3cycsIGljb246ICfwn4yNJyB9LFxyXG4gIHsgaWQ6IDIsIG5hbWU6ICdUZWNobm9sb2d5JywgaWNvbjogJ/CfkrsnIH0sXHJcbiAgeyBpZDogMywgbmFtZTogJ0J1c2luZXNzJywgaWNvbjogJ/CfkrwnIH0sXHJcbiAgeyBpZDogNCwgbmFtZTogJ1Nwb3J0cycsIGljb246ICfimr0nIH0sXHJcbiAgeyBpZDogNSwgbmFtZTogJ0VudGVydGFpbm1lbnQnLCBpY29uOiAn8J+OrCcgfSxcclxuICB7IGlkOiA2LCBuYW1lOiAnU2NpZW5jZScsIGljb246ICfwn5SsJyB9LFxyXG4gIHsgaWQ6IDcsIG5hbWU6ICdIZWFsdGgnLCBpY29uOiAn8J+PpScgfSxcclxuICB7IGlkOiA4LCBuYW1lOiAnUG9saXRpY3MnLCBpY29uOiAn8J+Pm++4jycgfSxcclxuICB7IGlkOiA5LCBuYW1lOiAnRW52aXJvbm1lbnQnLCBpY29uOiAn8J+MsScgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkVG9waWNzLCBzZXRTZWxlY3RlZFRvcGljc10gPSB1c2VTdGF0ZTxudW1iZXJbXT4oW10pO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FnZ3JlZ2F0ZWROZXdzLCBzZXRBZ2dyZWdhdGVkTmV3c10gPSB1c2VTdGF0ZTxOZXdzSXRlbVtdPihbXSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9waWNDbGljayA9ICh0b3BpY0lkOiBudW1iZXIpID0+IHtcclxuICAgIHNldFNlbGVjdGVkVG9waWNzKHByZXYgPT4ge1xyXG4gICAgICBpZiAocHJldi5pbmNsdWRlcyh0b3BpY0lkKSkge1xyXG4gICAgICAgIHJldHVybiBwcmV2LmZpbHRlcihpZCA9PiBpZCAhPT0gdG9waWNJZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5wcmV2LCB0b3BpY0lkXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWdncmVnYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcmllcyA9IG5ld3NDYXRlZ29yaWVzXHJcbiAgICAgICAgLmZpbHRlcihjYXRlZ29yeSA9PiBzZWxlY3RlZFRvcGljcy5pbmNsdWRlcyhjYXRlZ29yeS5pZCkpXHJcbiAgICAgICAgLm1hcChjYXRlZ29yeSA9PiBjYXRlZ29yeS5uYW1lKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYWdncmVnYXRlJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHNlbGVjdGVkVG9waWNzOiBzZWxlY3RlZENhdGVnb3JpZXMgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGFnZ3JlZ2F0ZSBuZXdzJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldEFnZ3JlZ2F0ZWROZXdzKGRhdGEubmV3cyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBuZXdzLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnIpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRTb3VyY2VzRm9yQ2F0ZWdvcnkgPSAoY2F0ZWdvcnlOYW1lOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBuZXdzU291cmNlcy5maWx0ZXIoc291cmNlID0+IFxyXG4gICAgICBzb3VyY2UuY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA9PT0gY2F0ZWdvcnlOYW1lLnRvTG93ZXJDYXNlKClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktOFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgbWItOFwiPk5ld3MgQWdncmVnYXRvcjwvaDE+XHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIE5ld3MgQ2F0ZWdvcmllcyBHcmlkICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBnYXAtNiBtYi04XCI+XHJcbiAgICAgICAgICB7bmV3c0NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeS5pZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUb3BpY0NsaWNrKGNhdGVnb3J5LmlkKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTYgaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUb3BpY3MuaW5jbHVkZXMoY2F0ZWdvcnkuaWQpID8gJ3JpbmctMiByaW5nLWJsdWUtNTAwJyA6ICcnXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGxcIj57Y2F0ZWdvcnkuaWNvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+e2NhdGVnb3J5Lm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7c2VsZWN0ZWRUb3BpY3MuaW5jbHVkZXMoY2F0ZWdvcnkuaWQpICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS02MDAgbWItMlwiPlJlcHV0YWJsZSBTb3VyY2VzOjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0U291cmNlc0ZvckNhdGVnb3J5KGNhdGVnb3J5Lm5hbWUpLm1hcChzb3VyY2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17c291cmNlLmlkfSBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3NvdXJjZS51cmx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgaG92ZXI6dW5kZXJsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzb3VyY2UubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQteHNcIj57c291cmNlLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogQWdncmVnYXRlIEJ1dHRvbiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLThcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWdncmVnYXRlfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17c2VsZWN0ZWRUb3BpY3MubGVuZ3RoID09PSAwIHx8IGlzTG9hZGluZ31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNiBweS0zIHJvdW5kZWQtbGcgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkICR7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRUb3BpY3MubGVuZ3RoID09PSAwIHx8IGlzTG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgPyAnYmctZ3JheS00MDAgY3Vyc29yLW5vdC1hbGxvd2VkJ1xyXG4gICAgICAgICAgICAgICAgOiAnYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAnXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNMb2FkaW5nID8gJ0FnZ3JlZ2F0aW5nLi4uJyA6IGBBZ2dyZWdhdGUgTmV3cyAoJHtzZWxlY3RlZFRvcGljcy5sZW5ndGh9IHNlbGVjdGVkKWB9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIEVycm9yIE1lc3NhZ2UgKi99XHJcbiAgICAgICAge2Vycm9yICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTEwMCBib3JkZXIgYm9yZGVyLXJlZC00MDAgdGV4dC1yZWQtNzAwIHB4LTQgcHktMyByb3VuZGVkIG1iLTRcIj5cclxuICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgey8qIEFnZ3JlZ2F0ZWQgTmV3cyBSZXN1bHRzICovfVxyXG4gICAgICAgIHthZ2dyZWdhdGVkTmV3cy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWQgcC02XCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPkFnZ3JlZ2F0ZWQgTmV3czwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgICAge2FnZ3JlZ2F0ZWROZXdzLm1hcCgobmV3c0l0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJvcmRlci1iIHBiLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bmV3c0l0ZW0udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCBob3Zlcjp1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtuZXdzSXRlbS5zb3VyY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBtbC0yXCI+KHtuZXdzSXRlbS5jYXRlZ29yeX0pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGxpc3QtaW5zaWRlIHNwYWNlLXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuZXdzSXRlbS5oZWFkbGluZXMubWFwKChoZWFkbGluZSwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZHh9IGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj57aGVhZGxpbmV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn0gIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJuZXdzU291cmNlcyIsIm5ld3NDYXRlZ29yaWVzIiwiaWQiLCJuYW1lIiwiaWNvbiIsIkhvbWUiLCJzZWxlY3RlZFRvcGljcyIsInNldFNlbGVjdGVkVG9waWNzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiYWdncmVnYXRlZE5ld3MiLCJzZXRBZ2dyZWdhdGVkTmV3cyIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVUb3BpY0NsaWNrIiwidG9waWNJZCIsInByZXYiLCJpbmNsdWRlcyIsImZpbHRlciIsImhhbmRsZUFnZ3JlZ2F0ZSIsInNlbGVjdGVkQ2F0ZWdvcmllcyIsImNhdGVnb3J5IiwibWFwIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsIm5ld3MiLCJlcnIiLCJjb25zb2xlIiwiZ2V0U291cmNlc0ZvckNhdGVnb3J5IiwiY2F0ZWdvcnlOYW1lIiwic291cmNlIiwidG9Mb3dlckNhc2UiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJvbkNsaWNrIiwic3BhbiIsImgyIiwiaDMiLCJ1bCIsImxpIiwiYSIsImhyZWYiLCJ1cmwiLCJ0YXJnZXQiLCJyZWwiLCJwIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJkaXNhYmxlZCIsImxlbmd0aCIsIm5ld3NJdGVtIiwiaW5kZXgiLCJoZWFkbGluZXMiLCJoZWFkbGluZSIsImlkeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});