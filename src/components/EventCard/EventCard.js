
import React from 'react';
import { Link } from 'react-router-dom';
import groupAttendees from '../../assets/images/group-attendees.png'
import Button from '../Button';
import { format } from 'date-fns';
import { dateFormats } from '../../pages/commons';


const EventCard = (props) => {

    const { event } = props;

    if(!event) {
        return null;
    }


    return <div className="d-flex flex-column card">
            <div className="align-self-center"> 
                {event.bannerImageUrl && <img src={event.bannerImageUrl}  alt="food" width={300} height={200} /> }  
            </div>
            <div className="h5 mt-3">{event.name}</div>

            <div className="align-self-end my-1" style={{ marginRight: '-1rem'}}>
               {event.isSold && <Button> Sold Out </Button> } 
            </div>

            <div className="mt-3 small text-muted"> {format(new Date(event.createdAt), dateFormats.formatX)} </div>

            <div className="d-flex justify-content-between my-3"> 
                <span> By <Link href={`/profile/${event.host.id}`}><a className="text-decoration-underline link-primary">{`${event.host.firstName} ${event.host.lastName}`}</a></Link> </span>
                <span className="strong text-end"> {event.price} </span>
            </div>

            <div> {event.attendees &&  <img src={groupAttendees}  alt="group attendees" /> } </div>

         </div>
}

export default EventCard;