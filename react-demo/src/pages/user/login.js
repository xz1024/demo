import React from 'react'
import { rsUtils } from 'react-router-strong'
import { Button } from 'antd';

export default () => {
    return (
        <div style={{ padding: '30px', textAlign: 'center' }}>
            <div style={{ fontSize: "40px" }}>这是登录页面login</div>
            <br />
            <Button onClick={() => {
                rsUtils.push('/animal/cat')
            }}>去  "/animal/cat"  页</Button>
        </div>
    )
}