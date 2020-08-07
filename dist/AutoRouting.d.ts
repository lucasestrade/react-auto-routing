/// <reference types="react" />
/**
 * react-auto-routing v.1.0.8
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
export interface Routes {
    routes: Array<Object>;
    children: any;
}
export interface RouteParameters {
    path: string;
    title: string;
    Component: Function;
}
export declare function Content(): JSX.Element;
export declare function AutoRouting({ routes, children }: Routes): JSX.Element;
