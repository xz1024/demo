import React from 'react'

import { Button } from 'antd';
import { Link } from 'react-router-dom';
class Layout extends React.Component {
    render () {
        console.log('this.props', this.props)
        return (
            <div className='layout-c'>
                <div className="nav">
                    path:
                    <Link to='/app/home'>/app/home</Link>
                    <Link to='/app'>/app</Link>
                    <Link to='/app/car?kkk=10'>/app/car</Link>
                    <Link to='/app/car/bwm'>/app/car/bwm</Link>
                    <Link to='/user/login'>/user/login</Link>
                    <Link to='/dog'>dog</Link>
                    <br />
                    <br />
                    aliasPath:
                    <Link to='/home'>/home</Link>
                    <br />

                    <button onClick={() => { this.props.history.push('/') }}>   /   </button>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <button onClick={() => { this.props.history.push('/app?aaaa=1') }}>/app</button>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Layout