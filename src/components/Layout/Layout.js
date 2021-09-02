import React from 'react';
import homeLogo from '../../assets/images/home-logo.png'
import {
    HomeIcon, ProfileIcon, IncomeIcon, AudienceIcon,
    InsightsIcon, EventIcon, AnnouncementIcon, BellIcon, EventTwoIcon,
    ExploreIcon, SettingsIcon, InfoIcon, LogoutIcon
} from '../Svgs'
import Avatar from '../Avatar/Avatar';
import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { getHomePath } from '../../router-paths';

const Layout = (props) => {
    const { children, title = "" } = props;

    return (<div>

        <div className="d-flex">

            <div className="layout__navbar">

                <div>
                    <ul className="d-flex flex-column" style={{ height: '100vh' }}>
                        <li className="homeLogo">
                            <NavLink
                               exact
                               to={getHomePath()}
                            >       
                                <img src={homeLogo} alt="Home page logo" />
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                exact 
                                to={getHomePath()}
                            >
                                <HomeIcon />
                                <span>Home</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/profile">
                                    <ProfileIcon />
                                    <span>Profile</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/event">
                                    <EventIcon />
                                    <span>Events</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/income">
                                    <IncomeIcon />
                                    <span>Income</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/audience">
                                    <AudienceIcon />
                                    <span> Audience </span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/insights">
                                    <InsightsIcon />
                                    <span> Insights </span>
                            </NavLink>
                        </li>

                        <li className="mt-auto my-5">
                            <NavLink to="/notifications">
                                    <AnnouncementIcon />
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>

            <div style={{ width: '100%' }} >
                <div className="d-flex justify-content-end align-items-center px-5 topBar">
                    {/* <NavLink to="/notifications"><BellIcon /></NavLink>/ */}
                    <div className="mx-4">
                        <Dropdown>
                            <Dropdown.Toggle variant="ligh" className="dropdown-toggle-btn" id="dropdown-basic">
                                <div className="mt-4 d-flex justify-content-between align-items-center dropdownButton">
                                    <div>{Array(3).fill().map((_, idx) => <div className="mx-1 line" key={idx.toString()} />)}</div>
                                    <div className="mx-1"> <Avatar height={20}  width={20} /> </div>
                                </div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="mt-3 mx-5">
                                <Dropdown.Item href="/profile/edit" className="py-2">
                                    <span className="mt-1"><ProfileIcon /></span>
                                    <span className="mx-2 small text-muted"> Edit Profile </span>
                                </Dropdown.Item>
                                <Dropdown.Item href="/events" className="py-2">
                                    <span className="mt-1"><ExploreIcon /></span>
                                    <span className="mx-2 small text-muted"> Explore Events </span>
                                </Dropdown.Item>
                                <Dropdown.Item href="/event/create" className="py-2">
                                    <span className="mt-1"><EventTwoIcon /></span>
                                    <span className="mx-2 small text-muted"> Create an event </span>
                                </Dropdown.Item>
                                <Dropdown.Item href="/settings" className="py-2">
                                    <span className="mt-1"><SettingsIcon /></span>
                                    <span className="mx-2 small text-muted"> Account Setting </span>
                                </Dropdown.Item>
                                <Dropdown.Item href="/help" className="py-2">
                                    <span className="mt-1"><InfoIcon /></span>
                                    <span className="mx-2 small text-muted"> Help Center </span>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="/logout" className="py-2">
                                    <span className="mt-1"><LogoutIcon /></span>
                                    <span className="mx-2 small text-muted"> Logout </span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="layout-bg layout-body">
                    {title && <h3 className="py-3 px-4 bold"> {title} </h3>}
                    {children}
                </div>
            </div>

        </div>


    </div>)

}

export default Layout;