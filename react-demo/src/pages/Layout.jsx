import React from 'react'
import { Button, Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { rsUtils } from 'react-router-strong'
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

class LayoutComp extends React.Component {
    render() {
        return (
            <Layout style={{ height: "100%" }}>
                <Sider>
                    <Menu
                        style={{ width: "100%" }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode={"inline"}
                        theme={"light"}
                    >
                        <Menu.Item key="1" onClick={() => this.props.history.push('/login')}> Login  </Menu.Item>
                        <Menu.Item key="2" onClick={() => rsUtils.push('/regist')}> Regist  </Menu.Item>
                        <SubMenu key="sub1" title="Animal">
                            <Menu.Item key="3"><Link to='/animal/cat'>cat</Link></Menu.Item>
                            <Menu.Item key="4"><Link to='/animal/pig'>pig</Link></Menu.Item>
                            <SubMenu key="sub1-2" title="dog">
                                <Menu.Item key="5"><Link to='/animal/dog/keji'>keji</Link></Menu.Item>
                                <Menu.Item key="6"><Link to='/animal/dog/fadou'>fadou</Link></Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Content> {this.props.children}</Content>
                </Layout>
            </Layout>
        )
    }
}

export default LayoutComp