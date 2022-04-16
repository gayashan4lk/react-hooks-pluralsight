"use strict";
(() => {
var exports = {};
exports.id = 897;
exports.ids = [897];
exports.modules = {

/***/ 736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ imageChangeOnScroll)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/imageToggleOnScroll.js


const ImageToggleOnScroll = ({ bwImage , colorImage  })=>{
    const imageRef = useRef(null);
    const isInView = ()=>{
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };
    const [inView, setInView] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", scrollHandler);
        return ()=>{
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    const scrollHandler = ()=>{
        setInView(isInView());
    };
    return /*#__PURE__*/ _jsx("img", {
        src: inView ? colorImage : bwImage,
        alt: "",
        ref: imageRef
    });
};
/* harmony default export */ const imageToggleOnScroll = ((/* unused pure expression or super */ null && (ImageToggleOnScroll)));

;// CONCATENATED MODULE: ./pages/imageChangeOnScroll.js


const ImageChangeOnScroll = ()=>{
    return {
    };
};
/* harmony default export */ const imageChangeOnScroll = (ImageChangeOnScroll);


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
var __webpack_exports__ = (__webpack_exec__(736));
module.exports = __webpack_exports__;

})();