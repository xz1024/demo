import React, { useState } from 'react';
import { Spin, Alert } from 'antd';
//import RouterStrong, { rsUtils } from './components/RouterStrong'
import RouterStrong, { rsUtils } from 'react-router-strong'
import LazyLoad from './LazyLoad'
import './styles/App.scss'
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from './pages/Layout'
// import Car from './pages/Car'
import { Steps, Modal, Button, message, Row, Col, Radio, Input, Card } from 'antd';
import { CalculatorFilled, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { render } from 'react-dom';
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

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            spinning: false,
            current: 0,
            url: ""
        }
    }
    render() {

        // const [spinning, setSpinning] = useState(false);
        const { spinning, current, url } = this.state
        const steps = [
            {
                title: '设定样本',
                content: 'First-content',
            },
            {
                title: '标注网页',
                content: 'Second-content',
            },
            // {
            //   title: '后台解析',
            //   content: 'Last-content',
            // },
            {
                title: '审核发布',
                content: 'Last-content',
            },
        ];
        //   const [current, setCurrent] = React.useState(0); 
        const { Step } = Steps;
        const show_info_mark_XPath = [
            { type: "his_normal", sa: "h_1", q: "清除python3缓存" },
            { type: "his_normal", sa: "h_1", q: "清除python3缓存" },

            { type: "his_normal", sa: "h_2", q: "清楚python3 install安装包所有缓存" },

            { type: "his_normal", sa: "h_3", q: "清楚python3 install安装包缓存" },
        ]
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
                <Modal
                    // title="Modal 1000px width"
                    centered
                    visible={true}
                    // onOk={() => {}}
                    // onCancel={() => {}}
                    width={1800}
                    //style={{height:'800px'}}
                    footer={null}
                    closable={false}
                    className='pattern-modal-99'
                >
                    <div className='pattern-modal-c'>
                        <div className='top-div'>
                            <Button type="primary" icon={<LeftOutlined />}>
                                返回任务列表
                            </Button>
                            <div className='step-div'>
                                <Steps current={current}>
                                    {steps.map(item => (
                                        <Step key={item.title} title={item.title} />
                                    ))}
                                </Steps>
                            </div>
                            <div className='right'>
                                <Button type="primary"
                                    icon={<LeftOutlined />}
                                    disabled={current <= 0}
                                    onClick={() => {
                                        this.setState({
                                            current: this.state.current - 1
                                        })
                                    }}
                                >  上一步 </Button>
                                <Button
                                    type="primary"
                                    disabled={current >= 2}
                                    onClick={() => {
                                        this.setState({
                                            current: this.state.current + 1
                                        })
                                    }}
                                    icon={<RightOutlined />}
                                >下一步</Button>
                            </div>
                        </div>
                        <Row gutter={5}>
                            <div className='content-div'>
                                {
                                    current === 0 ?
                                        <section className='inner-sec'>
                                            <h4 style={{ color: "#dd4b39" }}>即将从这些样本开始标注，完成对同类网页的结构化设定</h4>
                                            <div className='tit-1'>1.选择网页类型</div>
                                            <div>
                                                <Radio.Group onChange={() => { }} value={1} style={{ "lineHeight": "30px", padding: "0px 10px" }}>
                                                    <Radio value={1}>JSON</Radio>
                                                    <Radio value={2}>HTML</Radio>
                                                    <Radio value={3}>XML</Radio>
                                                    <Radio value={4}>TEXT</Radio>
                                                    <Radio value={5}>BINARY</Radio>
                                                </Radio.Group>
                                            </div>
                                            <div className='tit-1'>2.添加标注样本</div>
                                            <Input.TextArea style={{ minHeight: '140px' }}
                                                value={url}
                                                defaultValue={'23232323232323'}
                                                onChange={(e) => this.setState({ url: e.target.value })}
                                                placeholder="每行一个URL"  > </Input.TextArea>
                                            <div className='tit-1'>3.设置PATTERN规则</div>
                                            <Input placeholder="input search text" value='2' addonAfter={<div>自动生成</div>} />
                                            {Array(3).fill('https:www.baidu.com/').map((item, index) => {
                                                return (
                                                    <Row key={index}>
                                                        <Col>{item}</Col>
                                                    </Row>
                                                )
                                            })
                                            }
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <Button size="big">开始标注</Button>
                                        </section>
                                        : null
                                }
                                {
                                    current === 1 ?
                                        <section className='sec-div-2'>
                                            <Row>

                                                <Col span={18}>
                                                    <iframe style={{ width: '100%', height: 'calc(100vh - 100px)' }} src="https://www.baidu.com/"></iframe>

                                                </Col>
                                                <Col span={6} style={{ padding: "10px" }}>

                                                    <Card
                                                        title={<a href={"https://www.baidu.com/"} target="_blank">{"https://www.baidu.com/"}</a>}
                                                        style={{ width: "100%" }}
                                                    >
                                                        <div style={{ "color": "orange", "fontSize": "15px" }}>Key_XPath：{"Key_XPath："}</div>
                                                    </Card>
                                                    <br></br>
                                                    <Card
                                                        title={"标注结果"}
                                                        style={{ width: "100%", height: '400px' }}
                                                    >
                                                        <pre className='pre' contenteditable="true">{JSON.stringify(show_info_mark_XPath)}</pre>
                                                    </Card>
                                                    <Card
                                                        title={"标注结果"}
                                                        style={{ width: "100%", height: '400px' }}
                                                    >
                                                        <pre className='pre' contentEditable="true" >{JSON.stringify(show_info_mark_XPath)}</pre>
                                                    </Card>
                                                </Col>
                                            </Row>

                                        </section>
                                        : null
                                }
                                {
                                    current === 2 ?
                                        <section className='sec-div-3'>

                                            <Button className='publish-btn' danger>确认发布</Button>
                                        </section>
                                        : null
                                }
                            </div>
                        </Row>
                    </div>
                </Modal>
            </div>
        )
    }

};
export default App