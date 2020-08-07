var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
export function Content() {
    return React.createElement(React.Fragment, null);
}
export function AutoRouting(_a) {
    var routes = _a.routes, children = _a.children;
    return React.createElement(Router, null, routes.map(function (_a) {
        var args = __rest(_a, []);
        var path = args.path;
        var Component = args.Component;
        return React.createElement(Route, { exact: true, path: path, key: path }, React.Children.map(children, function (child) {
            var baseChild = child;
            var res = null;
            function render(child) {
                if (typeof child.type === "function" && child.type.name === "Content") {
                    res = React.createElement(Component, __assign({}, args));
                }
                if (res === null) {
                    if (child.props.children !== undefined) {
                        var oldChild = child;
                        child = child.props.children;
                        return React.createElement(oldChild.type, __assign({}, oldChild.props), React.Children.map(child, function (childToRender) {
                            return render(childToRender);
                        }));
                    }
                    else {
                        child = baseChild;
                        return child;
                    }
                }
                else {
                    return res;
                }
            }
            return render(child);
        }));
    }));
}
