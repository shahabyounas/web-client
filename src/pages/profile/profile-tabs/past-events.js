import React from 'react';
import EmptyState from '../../../components/EmptyState';
import EmptyStateEventImage from '../../../assets/images/empty-state-events.png'

export const PastEvents = () => {

    const isEmpty = true;

    return (
        <div className="container">

            {isEmpty ? (<div>
                <EmptyState  image={EmptyStateEventImage} description="You don’t have any past events" />
            </div>) :
                (<div> Hello </div>)}

        </div>
    )
}