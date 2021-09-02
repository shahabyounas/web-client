import React, { useState } from 'react';
import emptyStateEventImage from '../../../assets/images/event.png';
import Button from '../../../components/button';
import Avatar from '../../../components/Avatar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { CalendarIcon, EventIcon, ExploreIcon, ProfileIcon } from '../../../components/Svgs';
import { selectedStyle, defaultTabStyle } from '../../commons';

const TabNames = {
    description: 'description',
    host: 'host'
}


const EventDetail = (props) => {
    const {
        image = '',
    } = props;

    const history = [];

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const EventDetailEmptyState = () => {
        return <div className="d-flex flex-column align-items-center align-self-start mt-5 mr-5">
            <img src="" alt="no events" width="250" className="mt-5" />
            <Button className="px-4 py-2"> Create an event </Button>
        </div>
    }

    const [selectedTab, setSelectedTab] = useState('description');


    const handleTabAction = (tab) => {
        setSelectedTab(tab);
    }



    return <>
        <div className="d-flex justify-content-center p-4">
            <div className="event-detail__bloc col-md-5">
                <h5 className="mx-1 bold"> Beginners Yoga</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <span> <CalendarIcon /> </span>
                        <span className="mx-2"> Fri April 10, 4:00 PM - 4:45 PM  </span>
                    </div>
                    <div className="mx-5">
                        <span> <ProfileIcon /> </span>
                        <span className="mx-1"> 20 Attending </span>
                    </div>
                </div>
                <div className="mt-4">
                    {emptyStateEventImage && <img src={emptyStateEventImage} alt="Event" width="650" height="300" className="event-card__img" />}
                </div>

                <div className="mt-3">
                    <Tabs
                        // variant="fullWidth"
                        value={value}
                        onChange={handleChange}
                    >
                        <TabList>
                            <Tab style={TabNames.description === selectedTab ? selectedStyle : defaultTabStyle} onClick={(e) => handleTabAction(TabNames.description)} name="description"> Description</Tab>
                            <Tab style={TabNames.host === selectedTab ? selectedStyle : defaultTabStyle} onClick={(e) => handleTabAction(TabNames.host)} name="host"> host</Tab>
                        </TabList>

                        <TabPanel value={value}>
                            <div>
                                <div className="bold my-3"> About this event </div>
                                <p className="bold"> Join this 45 min practice to reconnect with your body, mind and soul. </p>
                                <p className="text-muted small text-justify">
                                    HIIT (High-Intensity Interval Training is perfect if you want to burn a lot of calories
                                    in a short amount of time. Increase your metabolic rate for hours after this high-energy
                                    workout that will pump you up for the day ahead! HIIT is also grat if you want to shed
                                    some unwanted fat or regulate your blood pressure. Perfect for beginners who want to take
                                    it to the next level and really feel the burn! No equipment required, this is body weight
                                    workout.
                                </p>

                                <div>
                                    <span className="my-3 small bold"> Your Host </span>

                                    <div className="d-flex mt-3">
                                        <div className="col-md-2">
                                            <Avatar />
                                        </div>

                                        <div className="col-md-10">
                                            <div> Roberta Dunn </div>
                                            <div className="small text-muted text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </TabPanel>

                        <TabPanel value={value}>
                            Page Two
                        </TabPanel>

                    </Tabs>
                </div>
            </div>

            <div className="col-md-4 mx-3 mt-5">
                <div className="event-detail__tickets px-2 py-3">
                    <div className="d-flex mx-3">
                        <div>
                            <ExploreIcon />
                        </div>
                        <div className="text-muted bold small mx-1">
                            Tickets
                        </div>
                    </div>

                    <div className="mx-2">
                        {Array(1).fill().map((_, idx) => {

                            return <div className="d-flex justify-content-between align-items-center py-3 px-3 my-2 event-detail__ticket" key={idx.toString()}>
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" />
                                    <div className="mx-3 small">
                                        <div>Beginner Toga</div>
                                        <div>Fri April 10, 4:00 PM</div>
                                    </div>
                                </div>

                                <div className="bold"> $30 </div>
                            </div>
                        })}
                    </div>

                    <div className="my-4 mx-4">
                        <Button className="w-100 text-center"> Use this Template </Button>
                    </div>
                </div>
            </div>

        </div>
    </>
}


export default EventDetail;