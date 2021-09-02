import React from 'react';
import Button from '../../components/Button';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Earnings from './incomeTabs/earnings';
import Withdraw from './incomeTabs/withdraw';
import { useState } from 'react';
import { selectedStyle, defaultTabStyle } from '../commons';


const TabNames = {
    earnings: 'Earnings',
    withdraw: 'Withdraw',
}

const Home = () => {

    const [selectedTab, setSelectedTab] = useState('Earnings');


    const handleTabAction = (tab) => {
        setSelectedTab(tab);
    }


    return <div>
            <div className="d-flex flex-column align-items-center">

                <div className="mt-5" style={{ width: '98%' }}>

                    <div className="container" style={{ marginLeft: '0px' }}>

                        <div className="row">
                            <div className="col">
                                <h4 className="bold"> Income  </h4>
                            </div>
                            <div className="col-md-auto">
                                <Button className="small align-item-right"> Download monthly CSV  </Button>
                            </div>
                            <div className="col-md-auto">
                                <Button className="small align-item-right"> Download detail CSV  </Button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <Tabs>
                            <TabList>
                                <Tab style={TabNames.earnings === selectedTab ? selectedStyle : defaultTabStyle} onClick={(e) => handleTabAction(TabNames.earnings)} name="earnings" >Earnings</Tab>
                                <Tab style={TabNames.withdraw === selectedTab ? selectedStyle : defaultTabStyle} onClick={() => handleTabAction(TabNames.withdraw)} name="withdraw">Withdraw</Tab>
                            </TabList>

                            <TabPanel className="mt-5">
                                <Earnings />
                            </TabPanel>
                            <TabPanel className="mt-5">
                                <Withdraw />
                            </TabPanel>
                        </Tabs>
                    </div>

                </div>
            </div>
    </div>
}

export default Home;