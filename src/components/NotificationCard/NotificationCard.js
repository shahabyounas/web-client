import React from 'react';

const NotificationCard = (props) => {
  const { notificationStatus, data} = props;


  return (
    <div className="notification-card">

      <div className="notification-name">
        <div className="notification-card-circle">
          <span className={`${notificationStatus !== 'READ' && 'notification-card-red-dot'}`}> </span>
    
        </div>
      </div>


      <div className="notification-card-name">
        {"title"}
      </div>


      <div className="notification-card-time">
          time
      </div>

    </div>
  );
};


export default NotificationCard;
