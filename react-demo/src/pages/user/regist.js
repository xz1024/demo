import React from 'react'
import { rsUtils } from 'react-router-strong'
import { Button } from 'antd';

export default () => {
    return (
        <div style={{ padding: '30px', textAlign: 'center' }}>
            <div style={{ fontSize: "40px" }}>这是注册页</div>
            <br />
            <Button onClick={() => {
                rsUtils.push('/login')
            }}>去 "login"  页</Button>
        </div>
    )
}