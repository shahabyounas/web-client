import React from 'react';

const EmptyState = (props) => {
    const { image, description, title, width = 300, height= 300, className, children} = props;
    return <div className={`d-flex flex-column align-items-center align-self-start ${className}`}>
        <img src={image} alt="no events" height={height} width={width} className="mt-5" />
        {title && <div className="bold capitalize">{title}</div>}
        {description && <div className="my-2">{description}</div>}
        {children}
    </div>
}

export default EmptyState;