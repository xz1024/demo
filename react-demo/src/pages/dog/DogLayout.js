import React from 'react'
export default (props) => {
    const style = {
        height: "100px",
        textAlign: 'center',
        fontSize: '50px',
        background: "#fff",
        marginBottom: '20px'
    }
    return (
        <div>
            <div style={style}>this is dog</div>
            {props.children}
        </div>
    )
}