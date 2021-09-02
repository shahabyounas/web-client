import React from 'react';
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import EmptyState from '../../components/EmptyState';
import NotificationEmptyState from '../../assets/images/notification-empty-state.png'

const Notifications = () => {

    const notifications = [];

    return <>
        <div> Notification </div>
        <div className="notifications">
            <div>
                {notifications.length === 0 ? 
                (<EmptyState image={NotificationEmptyState} description="You don’t have any new notifcation" /> ) 
                : ( notifications.map(((data) => {
                    return <NotificationCard announcement={data} key={data.id} />
                })))}

            </div>
        </div>
    </>
}

export default Notifications;