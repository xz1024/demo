import React from 'react'
import ReactDOM from 'react-dom';
import './style/search.less'
import logo from './assets/img/1.jpg'
class Search extends React.Component {
    render () {
        return (
            <>
                <div className="search-c">
                    <div className='title'>你好</div>
                    <div className="content">
                        <img src={logo} alt="" />
                        <p>this is p</p>
                    </div>
                </div>
            </>
        )
    }
}
ReactDOM.render(<Search />, document.getElementById('root'))
