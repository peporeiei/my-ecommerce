import * as React from 'react';
import { Router, Route, RouteProps, Redirect } from 'react-router';

//export const PrivateRoute = ({ component: Component, ...rest }: any) => (
//    <Route {...rest} render={props => (
//        localStorage.getItem('WF_APPLICATION')
//            ? <Component {...props} />
//            : <Redirect to={{ pathname: '/auth/signin', state: { from: props.location } }} />
//    )} />
//)

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('MY_ECOMMERCE')
            ? <Component {...props} />
            : window.open('google.com', '_self')
    )} />
)
