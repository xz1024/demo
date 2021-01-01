import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { RouterView } from '../../components/RouterStrong'
class Home extends React.Component {
    constructor(props) {
        super()
        this.state = {
            count: 0
        }
    }
    render () {
        return (
            <div>
                <p><a href="">home</a></p>
                <p><a href="">home</a></p>
                <p><a href="">home</a></p>
                <p><a href="">home</a></p>
                <p><a href="">home</a></p>
                <p>count:{this.state.count}</p>
                <button onClick={() => this.setState({
                    count: this.state.count + 1
                })}>add</button>
            </div>
        )
    }
}

export default Home