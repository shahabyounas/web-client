import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import { selectedStyle, defaultTabStyle } from '../commons';

const TabNames = {
    basic: 'basic',
    schedule: 'schedule',
    tickets: 'tickets',
    advance: 'advance'
}

const Event = () => {

    const [selectedTab, setSelectedTab] = useState('basic');


    const handleTabAction = (tab) => {
        setSelectedTab(tab);
    }

    return (
        <>
            <div className="container-fluid">
                <h3 className="bold py-4 mx-4" style={{ fontWeight: 'bold' }}> Create an event </h3>
                <div>
                    <Tabs>
                        <TabList  style={{ borderColor: '#E5E3DD' }}>
                            <Tab style={ TabNames.basic === selectedTab ? selectedStyle : defaultTabStyle }  onClick={(e) => handleTabAction(TabNames.basic)} name="basic" >Basics</Tab>
                            <Tab style={ TabNames.schedule === selectedTab ? selectedStyle : defaultTabStyle} onClick={() => handleTabAction(TabNames.schedule) } name="schedule">Schedule</Tab>
                            <Tab style={ TabNames.tickets === selectedTab ? selectedStyle : defaultTabStyle} onClick={() => handleTabAction(TabNames.tickets) } name="tickets">Tickets</Tab>
                            <Tab style={ TabNames.advance === selectedTab ? selectedStyle : defaultTabStyle} onClick={() => handleTabAction(TabNames.advance) } name="advance" >Advance</Tab>
                        </TabList>
                    </Tabs>

                </div>
            </div>
        </>
    )
};

export default Event;