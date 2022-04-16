"use strict";
(() => {
var exports = {};
exports.id = 86;
exports.ids = [86];
exports.modules = {

/***/ 202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ imageChange)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/imageToggle.js


const ImageToggle = ({ bwImage , colorImage  })=>{
    const imageRef = (0,external_react_.useRef)(null);
    return /*#__PURE__*/ jsx_runtime_.jsx("img", {
        onMouseOver: ()=>{
            imageRef.current.src = colorImage;
        },
        onMouseOut: ()=>{
            imageRef.current.src = bwImage;
        },
        src: bwImage,
        alt: "",
        ref: imageRef
    });
};
/* harmony default export */ const imageToggle = (ImageToggle);

;// CONCATENATED MODULE: ./pages/imageChange.js



const ImageChange = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(imageToggle, {
                bwImage: "/static/speakers/bw/Speaker-187.jpg",
                colorImage: "/static/speakers/Spearker-187.jpg",
                alt: ""
            }),
            "\xa0 \xa0 \xa0",
            /*#__PURE__*/ jsx_runtime_.jsx(imageToggle, {
                bwImage: "/static/speakers/bw/Speaker-1124.jpg",
                colorImage: "/static/speakers/Spearker-1124.jpg",
                alt: ""
            })
        ]
    });
};
/* harmony default export */ const imageChange = (ImageChange);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(202));
module.exports = __webpack_exports__;

})();