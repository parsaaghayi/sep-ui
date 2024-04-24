import React from 'react';
const Button = (props) => {
    const { children, backgroundColor, color, style } = props;
    let _style = style || {};
    /** Override Defaults */
    if (backgroundColor)
        _style.backgroundColor = backgroundColor;
    if (color)
        _style.color = color;
    return (React.createElement("button", Object.assign({ style: _style }, props), children));
};
export default Button;
//# sourceMappingURL=Button.js.map