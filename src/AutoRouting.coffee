import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

AutoRouting = ({ routes }) ->
    <>
        <Router>
            {routes.map ({ path, title, Component, sectionClass }) ->
                <Route exact
                path={path} 
                key={path} >
                    <section className={sectionClass}>
                        <Component title={title}/>
                    </section>
                </Route>
            }
        </Router>
    </>

export default AutoRouting;