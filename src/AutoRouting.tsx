import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

/**
 * react-auto-routing v.1.0.4
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
    Encompass: Function
}

export interface RouteParameters{
    path: string
    title: string
    Component: Function
}

function AutoRouting({ routes, Encompass, children }: Routes) {
    return (
        <Router>
            {routes.map(({ path, title, Component }: RouteParameters) => (
                <Route exact
                    path={path} 
                    key={path} >
                        {children}
                        {Encompass === undefined 
                            ?
                                <Component title={title}/>
                            : 
                                <Encompass>
                                    <Component title={title}/>
                                </Encompass>
                        }
                </Route>
            ))}
        </Router>
    );
}

export default AutoRouting;