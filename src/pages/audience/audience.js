import React, { useState } from 'react'
import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button'
import Attendees from '../../components/Attendees'
import EmptyState from '../../components/EmptyState';
import EmptyStateAudience from '../../assets/images/empty-state-audience.png'
import { Filtericon } from '../../components/Svgs'
import FilterSlide from '../../components/FilterSlide'


export const Audience = () => {
    const [showSlide, setShowSlide] = useState(false);
    const list = [1]
    return (
        <div style={{ backgroundColor: "#FAFAFA" }}>
                <div> Audience </div>
                <div>

                    {list.length === 0 ? <div>  <EmptyState image={EmptyStateAudience} description="You don’t have an audience yet." />  </div> : (<div className="container p-4">



                        <div className="row p-4">

                            <h6 className="bold" >Top Attendees</h6>
                            <div className="d-flex flex-wrap justify-content-start">
                                {Array(8).fill().map((item, idx) => {
                                    return <Avatar className="m-2 small" title="Ayaz Khan" key={idx.toString()} />
                                })}</div>
                        </div>


                        <div className="p-4">
                            <h6 className="bold"> All Attendees </h6>
                            <div className="row justify-content-between">
                                <div className="col-3">
                                    <div className="d-flex ">
                                        <input className="form-control" value="search here"></input> <span onClick={() => setShowSlide(true)} className="p-2"><Filtericon /></span>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <Button>Download CSV</Button>
                                </div>
                            </div>
                        </div>


                        <div className="row p-2 border" style={{ width: "70%", backgroundColor: 'var(--white)', borderRadius: 'var(--border-radius-md)' }}>
                            <div className=" justify-content-start">

                                <div className="row py-2">
                                    <div className="col"> </div>
                                    <div className="col bold small"> Name </div>
                                    <div className="col bold small"> Email </div>
                                    <div className="col bold small">Events Attended</div>
                                    <div className="col bold small text-center">Last Joined </div>
                                </div>

                                {Array(3).fill().map((item, idx) => {
                                    return <Attendees className="mx-2 py-3 border-bottom" title="Ayaz khan" key={idx.toString()} />
                                })}</div>
                        </div>
                        <div className="row">
                            <FilterSlide trigger={showSlide} setTrigger={setShowSlide}>
                                <h5>Filters</h5>
                                <div className="row">
                                    <h6>Events</h6>
                                    <div className="col-12">

                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                        <label htmlFor="vehicle1"> I have a bike</label><br />
                                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                        <label htmlFor="vehicle2"> I have a car</label><br />
                                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                        <label htmlFor="vehicle3"> I have a boat</label>

                                    </div>
                                </div>
                                <div className="row"></div>
                                <div className="row"></div>
                            </FilterSlide>
                        </div>

                    </div>)}

                </div>
        </div>
    )
}

export default Audience
