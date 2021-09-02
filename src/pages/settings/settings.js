import React from 'react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { General } from './settings-tabs/general';
import { selectedStyle, defaultTabStyle } from '../commons';


const TabNames = {
    general: 'general',
}

const Settings = () => {

    const [selectedTab, setSelectedTab] = useState('general');


    const handleTabAction = (tab) => {
        setSelectedTab(tab);
    }


    return <div>
            <div> Account Settings </div>
            <div className="d-flex flex-column">
                <div>
                    <Tabs>
                        <TabList>
                            <Tab style={TabNames.general === selectedTab ? selectedStyle : defaultTabStyle} onClick={(e) => handleTabAction(TabNames.general)} name="general"> General</Tab>
                        </TabList>

                        <TabPanel className="mt-5">
                            <General />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
    </div>
}

export default Settings;