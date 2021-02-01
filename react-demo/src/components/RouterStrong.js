import React from 'react'
import PropTypes from 'prop-types'
import { Prompt } from 'react-router'
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
const preHistory = 'rs__unique__pre_History_____'
const curHistory = 'rs__unique__cur_History_____'
const AllRoutes = 'rs__unique__AllRoutes___'
let __init__ = false
let utils = {};
Object.defineProperty(utils, 'history', {
    get () {
        return window[curHistory]
    }
})
Object.defineProperty(utils, 'route', {
    get () {
        return window[curHistory] ? window[curHistory].route : null
    }
})

export const getHistory = () => window[curHistory];
export let rsUtils = utils;
function isPromise (obj) {
    return !!obj  //有实际含义的变量才执行方法，变量null，undefined和''空串都为false
        && (typeof obj === 'object' || typeof obj === 'function') // 初始promise 或 promise.then返回的
        && typeof obj.then === 'function';
}
function wrapParent (r, comp = null, props) {
    let target = r.component ? <r.component  {...props}> {r.children ? comp : null}</r.component> : null;
    if (r.__parent && r.__parent.component) {
        return wrapParent(r.__parent, target, props)
    }
    return target
}
class AsyncRoute extends React.Component {
    constructor(props) {
        super();
        this.state = {
            finished: false
        }
    }
    componentDidMount () {
        const { beforeEach } = this.props;
        function getRoute (pathname) {
            return window[AllRoutes].find(d => d.props.__r.path === pathname).props.__r;
        }
        beforeEach && beforeEach(
            window[curHistory].route,
            window[preHistory].route,
            (params) => {
                if (params && params.path) {
                    let r = getRoute(params.path)
                    if (r.redirect) {
                        window[curHistory].push(r.redirect);
                        return
                    }
                    window[curHistory].push(params.path);
                    return
                }
                __init__ = true
                this.setState({
                    finished: true
                })
            }
        );
    }
    render () {
        const { wp } = this.props
        return this.state.finished ? wp : null
    }
}
class RouterStrong extends React.Component {
    constructor(props) {
        super();
        this.pendding = true
        this.state = {
            init: !props.beforeEach
        }
    }
    static propsTypes = {
        routes: PropTypes.array.isRequired,
        mode: PropTypes.string,
        beforeEach: PropTypes.func,
        isSwitch: PropTypes.bool,
    }
    __beforeEach (location, action) {
        // console.log("location:", location, "\n", "action:", action)
        const { pathname } = location
        const { beforeEach } = this.props
        function getRoute (pathname) {
            return window[AllRoutes].find(d => d.props.__r.path === pathname).props.__r;
        }
        this.pendding = true;
        let to = getRoute(pathname);
        beforeEach && beforeEach(
            to,
            window[preHistory].route,
            (params) => {
                this.pendding = false
                if (to.redirect) {
                    window[curHistory].push(to.redirect);
                    return
                }
                if (params && params.path) {
                    let r = getRoute(params.path)
                    if (r.redirect) {
                        window[curHistory].push(r.redirect);
                        return
                    }
                    window[curHistory].push(params.path);
                    return
                }
                if (action === 'POP') {
                    //回退
                    console.log("Backing up...")
                    window[curHistory].goBack()
                } else {
                    //跳转
                    console.log(`window[curHistory].push(${pathname})`)
                    window[curHistory].push(pathname)
                }
            }
        );
        return !beforeEach
    }
    __Prompt () {
        return (
            <Prompt
                message={(location, action) => {
                    // if (action === 'POP') {
                    //     console.log("Backing up...")
                    // }
                    if (!this.pendding) {
                        return true
                    }
                    return this.__beforeEach(location, action);
                }}
            />
        )
    }
    render () {
        const {
            routes = [],
            mode,
            isSwitch = true,
            indexPath = '/',
            noFoundPath = '/404',
            beforeEach
        } = this.props;
        if (!beforeEach) {
            __init__ = true
        } else {
            if (typeof beforeEach !== 'function') {
                throw new Error('beforeEach must be a function')
            }
        }
        const Router = mode === 'history' ? BrowserRouter : HashRouter;

        let AllRoutes = routes.map((r) => {
            const route = (r) => {
                const routeParams = (r) => ({
                    key: r.path,
                    exact: true,
                    path: r.path,
                    __r: r,
                    __parent: r.__parent,
                    __redirect: r.redirect,
                    render: (props) => {
                        props.history = { ...props.history, route: r };
                        window[preHistory] = window[curHistory] || {};
                        window[curHistory] = props.history;
                        console.log('render-props', props);
                        this.pendding = true
                        const merge = {
                            ...props,
                            route: r
                        };
                        if (r.redirect) {
                            return <Redirect {...merge} to={r.redirect} />
                        }
                        let wp = wrapParent(r, null, merge)
                        return __init__ ? wp : <AsyncRoute wp={wp} beforeEach={beforeEach} />
                    },
                });

                return <Route {...routeParams(r)} />
            };
            let res = [];
            function inorder (r) {
                if (r.path && (r.component || r.redirect)) {
                    res.push(route(r))
                }
                if (Array.isArray(r.children) && r.children.length) {
                    for (let x of r.children) {
                        x['__parent'] = r;
                        inorder(x)
                    }
                }
                if (Array.isArray(r.aliasPath) && r.aliasPath.length) {
                    r.aliasPath.forEach((path) => {
                        if (!/^\//.test(path)) { path = '/' + path }
                        res.push(route(Object.assign({}, r, { path, aliasPath: null })))
                    })
                }
                return res
            }
            return inorder(r)
        }).flat().filter(Boolean);
        AllRoutes = AllRoutes.concat([
            <Route key={indexPath} exact path="/" render={() => <Redirect to={indexPath} push />} />,
            <Route key={noFoundPath} render={() => <Redirect to={noFoundPath} />} />
        ]);
        console.log('AllRoutes', AllRoutes)
        window[AllRoutes] = AllRoutes
        return (
            <Router>
                {this.props.children}
                {this.__Prompt()}
                {
                    isSwitch ? <Switch>  {AllRoutes}  </Switch> : AllRoutes
                }
            </Router>
        )
    }
}

export default RouterStrong
