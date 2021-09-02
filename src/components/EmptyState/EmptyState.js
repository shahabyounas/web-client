import React from 'react';

const EmptyState = (props) => {
    const { image, description } = props;
    return <div className="d-flex flex-column align-items-center align-self-start">
        <img src={image} alt="no events" height="300" width="300" className="mt-5" />
        {description && <div className="my-3">{description}</div>}

    </div>
}

export default EmptyState;