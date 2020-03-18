import React from 'react';
import './Button.css'
const Button = (props) => {
    return (
        <button className="buttonWrapper">
            {props.children}
        </button>
    );
}

export default Button;