import React from 'react';

const Button = (props) => {
    const { children, onClick, className, bgColor = '', color = '' } = props;
    return (<div 
                role="button"
                tabIndex="0"
                onClick={onClick}
                className={`px-4 py-2 button ${className}`}
                style={{ backgroundColor: `${bgColor || 'var(--primary)'}` , color: `${color || 'var(--white)'}` }}
        >
        {children}
    </div>)
}

export default Button;