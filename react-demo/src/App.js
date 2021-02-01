import React, { useState } from 'react';
import { Spin, Alert } from 'antd';

import LazyLoad from './LazyLoad'
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from './pages/Layout'
// import Car from './pages/Car'

const Home = LazyLoad(React.lazy(() => import(/* webpackChunkName: "Home" */ './pages/app/Home')));
const Login = LazyLoad(React.lazy(() => import(/* webpackChunkName: "Login" */ './pages/user/Login')));
const Car = LazyLoad(React.lazy(() => import(/* webpackChunkName: "Car" */ './pages/app/Car')));
const BWM = LazyLoad(React.lazy(() => import(/* webpackChunkName: "Car" */ './pages/app/Bwm')));
const Dog = LazyLoad(React.lazy(() => import(/* webpackChunkName: "Dog" */ './pages/Dog')));

const routes = [
    {
        path: "/",
        redirect: '/app/home',
    },
    {
        path: "/app",
        component: Layout,
        redirect: '/app/home',
        children: [
            {
                path: '/app/home', aliasPath: ['/home'], component: Home
            },
            {
                path: '/app/car',
                component: Car,
                children: [
                    {
                        path: '/app/car/bwm', component: BWM
                    }
                ]
            },
        ]
    },
    {
        path: "/user",
        children: [
            {
                path: '/user/login', component: Login
            },

        ]
    },
    {
        path: "/404", component: () => <div>this is 404</div>
    }
    // {
    //     path: "/dog", component: Dog
    // }
]
const sleep = (time) => new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, time)
})

export default () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    <Route path='/app' component={Layout} routes={
                        [
                            {
                                path: '/app/home', aliasPath: ['/home'], component: Home
                            },
                            {
                                path: '/app/car',
                                component: Car,
                                children: [
                                    {
                                        path: '/app/car/bwm', component: BWM
                                    }
                                ]
                            },
                        ]
                    }>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
};
