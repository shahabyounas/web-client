import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button'
import { UpcomingEvents, PastEvents, EventsReviews } from './profile-tabs'
import { selectedStyle, defaultTabStyle } from '../commons';
import { Facebookicon, Linkedinicon, Snapchaticon, Tiktokicon, Twittericon, Instagramicon, Youtubeicon } from '../../components/Svgs';
import { Link } from 'react-router-dom';


const TabNames = {
    upcoming: 'upcoming',
    pastEvents: 'past-events',
    reviews: 'reviews',
}

const Profile = () => {

    const socialLinks = [
        {
            icon: <Facebookicon/>,
            url: ''
    
        },
        {
            icon: <Instagramicon/>,
            url: ''
    
        },
        {
            icon: <Twittericon/>,
            url: ''
    
        },
        {
            icon: <Linkedinicon/>,
            url: ''
    
        },
        {
            icon: <Youtubeicon/>,
            url: ''
    
        },
        {
            icon: <Snapchaticon/>,
            url: ''
    
        },
        {
            icon: <Tiktokicon/>,
            url: ''
    
        },
    ]


    const [selectedTab, setSelectedTab] = useState('upcoming');


    const handleTabAction = (tab) => {
        setSelectedTab(tab);
    }

    return <>
        <div className="container py-5 profile">
            <div className="row">
                <div className="col-4 px-5">
                    <div className="d-flex flex-column align-items-center profile__card">
                        <div>
                            <Avatar />
                        </div>
                        <div className="bold my-2"> Roberta Dunn </div>
                        <div>
                            <ReactStars
                                count={5}
                                size={24}
                                activeColor="#ffd700"
                            />
                        </div>

                        <div className="my-3">
                            <Button size="lg" className="width-15 text-center px-5">
                                Edit
                            </Button>
                        </div>
                        <div className="d-flex w-100 justify-content-between px-5">
                            <span className="mx-2"> Followers</span>
                            <span className="mx-2" > 0</span>
                        </div>

                        <div className="d-flex w-100 justify-content-between px-5 my-2">
                            <span className="mx-2"> Followers</span>
                            <span className="mx-2" > 0</span>
                        </div>

                        <div className="d-flex flex-wrap mx-1 justify-content-center">
                            {Array(5).fill().map((_, idx) => (<div className="text-muted profile__category" key={idx.toString()}> Fitness </div>))}
                        </div>

                        <div className="d-flex mx-4 my-4 align-self-start">
                            {socialLinks.map((link, idx) => ( <div className="px-1" key={idx.toString()}><Link href={link.url}><a>{link.icon}</a></Link></div> ))}
                        </div>

                        <div className="mt-auto"> Member since 2021 </div>
                    </div>
                </div>

                <div className="col-8">
                    <h5> About Roberta </h5>

                    <div className="container-fluid">
                        <div>
                            <Tabs>
                                <TabList style={{ borderColor: '#E5E3DD' }}>
                                    <Tab style={TabNames.upcoming === selectedTab ? selectedStyle : defaultTabStyle} onClick={(e) => handleTabAction(TabNames.upcoming)} name="upcoming" >Upcoming</Tab>
                                    <Tab style={TabNames.pastEvents === selectedTab ? selectedStyle : defaultTabStyle} onClick={() => handleTabAction(TabNames.pastEvents)} name="past-events">Past Events</Tab>
                                    <Tab style={TabNames.reviews === selectedTab ? selectedStyle : defaultTabStyle} onClick={() => handleTabAction(TabNames.reviews)} name="reviews">Reviews</Tab>
                                </TabList>

                                <TabPanel className="mt-5">
                                    <UpcomingEvents />
                                </TabPanel>
                                <TabPanel className="mt-5">
                                    <PastEvents />
                                </TabPanel>
                                <TabPanel className="mt-5">
                                    <EventsReviews />
                                </TabPanel>
                            </Tabs>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>

}

export default Profile;