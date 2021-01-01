import React, { useState } from 'react';
import { Spin, Alert } from 'antd';
//import RouterStrong, { rsUtils } from './components/RouterStrong'
import RouterStrong, { rsUtils } from 'react-router-strong'
import LazyLoad from './LazyLoad'
import './styles/App.scss'
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
    const [spinning, setSpinning] = useState(false)
    return (
        <div className="app">
            <Spin spinning={spinning}>
                <RouterStrong
                    indexPath='/app/home'
                    noFoundPath='/404'
                    mode={'history'}
                    isSwitch={true}
                    routes={routes}
                    beforeEach={
                        async (to, from, next) => {
                            console.log("to:", to, "\n", "from:", from)
                            await sleep(1000)
                            next()
                            // if (to.path === '/app/car') {
                            //     next({ path: '/app/car/bwm' })
                            //     //return <Redirect to={'/dog'} />
                            // } else {
                            //     //await sleep(10)
                            //     next()

                            // }
                        }}
                >
                </RouterStrong>

                <div>
                    <br />
                    <br />
                    <br />
                    <button onClick={() => rsUtils.history.push('/home')}>go home</button>
                </div>
            </Spin>
        </div>
    )
};
