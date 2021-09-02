import React from 'react';
import Avatar from '../Avatar/Avatar';

const FeaturedUser = (props) => {
    const { name = "jolly", image } = props;
    return <div className="featureduser">
        <div className="d-flex flex-column align-items-center">
            <Avatar userImg={image} />
            <div>{name}</div>
        </div>
    </div>
}

export default FeaturedUser;