import React from 'react';
import Avatar from '../Avatar/Avatar';

const Attendees = (props) => {
    const { name = "jolly", image, className } = props;
    return <div>
            <div className={`row align-items-center ${className}`}>
                <div className="col small"><Avatar userImg={image}/></div>
                <div className="col small">{name}</div>
                <div className="col small">email@email.com</div>
                <div className="col small text-center">4</div>
                <div className="col small text-muted text-end">23 Sep 2019</div>
            </div>
    </div>
}

export default Attendees;