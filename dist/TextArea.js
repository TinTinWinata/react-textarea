"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const TextArea = (0, react_1.forwardRef)((_a, ref) => {
    var { initialSize = 100, onChangeText, onChange, style } = _a, props = __rest(_a, ["initialSize", "onChangeText", "onChange", "style"]);
    const innerRef = (0, react_1.useRef)(null);
    const baseStyle = {
        width: "100%",
        resize: "none",
        padding: "12px",
        border: "1.5px solid #ccc",
        borderRadius: "5px",
        minHeight: `${initialSize}px`,
        fontFamily: "inherit",
        fontSize: "1rem",
        lineHeight: "1.5",
    };
    function checkSize() {
        const element = innerRef.current;
        if (element) {
            element.style.height = "inherit";
            element.style.height = `${Math.max(element.scrollHeight, initialSize)}px`;
        }
    }
    (0, react_1.useEffect)(() => {
        if (innerRef.current) {
            checkSize();
        }
    }, [innerRef.current]);
    (0, react_1.useImperativeHandle)(ref, () => innerRef.current);
    return ((0, jsx_runtime_1.jsx)("textarea", Object.assign({}, props, { ref: innerRef, style: Object.assign(Object.assign({}, baseStyle), style), onChange: (e) => {
            checkSize();
            onChange && onChange(e);
            onChangeText && onChangeText(e.currentTarget.value);
        } })));
});
exports.default = TextArea;
