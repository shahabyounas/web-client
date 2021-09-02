import React from 'react';
import locale from '../../locales/en.json'
import groupEventImg from '../../assets/images/group-event.png';
import oneToOneEventImg from '../../assets/images/one-to-one-event.png';


export const EventType = ({ image, title, desc, type, state, setState }) => (
    <>
        <div className="d-flex flex-column">
            <div 
                className={`d-flex justify-content-center align-items-center typeCard typeCard--${ type === state.type ? 'selected' : '' }`}
                onClick={(e) => setState({ target: { name: "type" , value: type } })}
                >
                <img src={image} alt="event type" className="image-transition" width={100} height={100} />
            </div>

            <div className="mt-3" style={{ textAlign: 'center' }}>
                <div>{title}</div>
                <div className="desc text-muted">{desc}</div>
            </div>
        </div>
    </>
)

const StepOne = (props) => {

    const { state, setState } = props;

    const eventTypes = [
        {
            image: oneToOneEventImg,
            title: 'One-on-One',
            desc: 'Let an attendee pick a time to meet with you',
            type: 'one-one',
        },
        {
            image: groupEventImg,
            title: 'Group Event',
            desc: 'Let multiple attendees join at a specified time',
            type: 'group',
        }
    ]


    if (state.currentStep !== 1) {
        return null;
    }

    return (
        <div className="d-flex flex-column">
            <div>
                <label htmlFor="eventName" className="form-label"> Name your event </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="eventName" 
                    placeholder="E.g Beginner Yoga"
                    name="name"
                    value={state.name}
                    onChange={(e) => setState(e)}
                />
            </div>

            <div className="my-4">
                <div> Event Type </div>
                <div className="d-flex justify-content-between mt-2">
                    {eventTypes.map((etype, idx) => <EventType {...etype} state={state} setState={setState} key={idx.toString()} />)}
                </div>
            </div>

            <div className="">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Event Summary</label>
                <textarea 
                    name="summary" 
                    placeholder={locale["event-summary-placeholder"]}
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="6"
                    value={state.summary}
                    onChange={(e) => setState(e)}
                />
            </div>
        </div>
    )
}

export default React.memo(StepOne);