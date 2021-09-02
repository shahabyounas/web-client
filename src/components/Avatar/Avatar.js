import React from 'react';
import defaultImage from '../../assets/images/avatar.png'


const Avatar = (props) => {
    const { userImg = defaultImage, title = "", className, height = 50, width = 50 } = props;

    return (
        <div>
            <div className={`d-flex flex-column align-items-center justify-content-center  ${className}`}>
                {userImg && <img src={userImg} alt="avatar" width={width} height={height} />}
                {title && <div className="mt-2 small" > {title} </div>}
            </div>
        </div>)
}

export default Avatar;