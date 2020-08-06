import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
function AutoRouting(_a) {
    var routes = _a.routes, Encompass = _a.Encompass, children = _a.children;
    return (React.createElement(Router, null, routes.map(function (_a) {
        var path = _a.path, title = _a.title, Component = _a.Component;
        return (React.createElement(Route, { exact: true, path: path, key: path },
            children,
            Encompass === undefined
                ?
                    React.createElement(Component, { title: title })
                :
                    React.createElement(Encompass, null,
                        React.createElement(Component, { title: title }))));
    })));
}
export default AutoRouting;
