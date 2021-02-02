import React, { useState } from 'react';
import { Spin, Alert } from 'antd';
import LazyLoad from './LazyLoad'
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import RouterStrong from 'react-router-strong'

import Layout from './pages/Layout'

const Login = LazyLoad(React.lazy(() => import(/* webpackChunkName: "login" */ './pages/user/login')));
const Regist = LazyLoad(React.lazy(() => import(/* webpackChunkName: "regist" */ './pages/user/regist')));

const Cat = LazyLoad(React.lazy(() => import(/* webpackChunkName: "cat" */ './pages/cat/cat')));
const Pig = LazyLoad(React.lazy(() => import(/* webpackChunkName: "pig" */ './pages/pig/pig')));

const DogLayout = LazyLoad(React.lazy(() => import(/* webpackChunkName: "Dog" */ './pages/dog/DogLayout')));
const KeJi = LazyLoad(React.lazy(() => import(/* webpackChunkName: "Dog" */ './pages/dog/keji')));
const FaDou = LazyLoad(React.lazy(() => import(/* webpackChunkName: "Dog" */ './pages/dog/fadou')));

const config = [
    { path: '/login', component: Login },
    { path: '/regist', component: Regist },
    // { path: '/404', component: () => <div>404</div> },
    {
        path: "/animal",
        component: Layout,
        redirect: '/animal/cat',
        children: [
            { path: '/animal/cat', aliasPath: ['/cat'], component: Cat },
            { path: '/animal/pig', component: Pig },
            {
                path: '/animal/dog', component: DogLayout,
                children: [
                    { path: '/animal/dog/keji', component: KeJi },
                    { path: '/animal/dog/fadou', component: FaDou }
                ]
            },
        ]
    }
]
const sleep = (time) => new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, time)
})

export default () => {
    return (
        <RouterStrong
            indexPath='/animal/cat'
            noFoundPath='/404'
            mode={'history'}
            isSwitch={true}
            config={config}
            beforeEach={async (to, from, next) => {
                await sleep(2000)
                next()
            }}
            afterEach={() => {
                console.log('afterEach')
            }}
        >
        </RouterStrong>
    )
};
