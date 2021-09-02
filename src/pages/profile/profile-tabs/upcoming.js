import React from 'react';
import EmptyState from '../../../components/EmptyState';
import EmptyStateEventImage from '../../../assets/images/empty-state-events.png'



export const UpcomingEvents = () => {

    const isEmpty = true;

    return (
        <div className="container">

            {isEmpty ? (<div>
                <EmptyState image={EmptyStateEventImage} description="You don’t have any upcoming events" />
            </div>) :
                (<div> Hello </div>)}

        </div>
    )
}