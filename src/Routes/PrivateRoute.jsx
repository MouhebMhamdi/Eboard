import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
           
                <Component {...props} />
            
                
            
        }
    ></Route>
);

export default PrivateRoute;