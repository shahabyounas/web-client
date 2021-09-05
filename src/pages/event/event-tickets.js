import React, { useState } from 'react';
import EmptyState from '../../components/EmptyState/EmptyState';
import EmptyStateImage from '../../assets/images/empty-state-ticket.png';
import Button from '../../components/Button';
import FilterSlide from '../../components/FilterSlide';

const EventTicket = (props) => {

    const [isOpen, setIsOpen] = useState(true);
    const isEmpty = true

    return <div>
        {
            isEmpty ? (
                <>
                    <EmptyState
                        width={200}
                        height={200}
                        image={EmptyStateImage}
                        title="Ticket"
                        description="Add a price tag to your event. Offer it for free or set a fair price"
                    >
                        <Button onClick={() => setIsOpen(isOpen => !isOpen)}> Ticket </Button>
                    </EmptyState>
                </>
            ) :
                (
                    <div> Hello </div>
                )
        }

        {isOpen && (
            <FilterSlide trigger={isOpen} setTrigger={setIsOpen} >
                Please implement a ticket form here.
            </FilterSlide>
        )}

    </div>
}

export default EventTicket;