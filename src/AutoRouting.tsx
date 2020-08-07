import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

/**
 * react-auto-routing v.1.0.10
 * 
 * React-auto-routing is a React component to automatic and easily create multiple routes.
 * 
 * @author Lucas Estrade 
 * @github author => https://github.com/lucasestrade
 * @github repository => https://github.com/lucasestrade/react-auto-routing
 * 
 * Copyright 2020, Lucas Estrade
 * Released under the MIT license
 * 
 */

export interface Routes{
    routes: Array<Object>
    children: any
}

export function Content(): JSX.Element {
    return <></>
}

export function AutoRouting({ routes, children }: Routes): JSX.Element {
    return <Router>
        {routes.map(function ({...args}: Object) {
            let path: string = args.path; 
            let Component: Function = args.Component;
            return <Route exact={true}
                path={path}
                key={path}>
                {React.Children.map(children, (child: Object) => {
                    let baseChild: Object = child;
                    let res: Object | null = null;
                    function render(child: Object): Object {
                        if (typeof child.type === "function" && child.type.name === "Content") {
                            res = <Component {...args} />;
                        }
                        if(res === null){
                            if(child.props.children !== undefined){
                                let oldChild: Object = child;
                                child = child.props.children;
                                return React.createElement(oldChild.type, {...oldChild.props}, React.Children.map(child, function(childToRender){
                                    return render(childToRender);
                                }));
                            }else{
                                child = baseChild;
                                return child;
                            }
                        }else{
                            return res;
                        }
                    }
                    return render(child);
                })
            }
            </Route>
        })}
    </Router>
}