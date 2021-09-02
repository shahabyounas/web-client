import React from 'react'
import TimeAndDate from '../../components/TimeAndDate/TimeAndDate';
import AudienceReachChart from './InsightCharts/LineChart';
import TopLocationChart from './InsightCharts/TopLocationChart';

const SummaryCard = () => (
    <div className="summary-card" style={{ width: "13rem" }}>
        <div className="card-body">
            <h6 className="card-title">Total Sales</h6>
            <h4 className="card-subtitle mb-2  py-3">$230</h4>
            <p className="card-text" style={{ color: '#34B53A' }}>+30%</p>
            <p className="card-text text-muted">From Last Month</p>
        </div>
    </div>
)

const insights = () => {


    return (
        <div style={{ backgroundColor: "#FAFAFA" }}>
            <div> Insights </div>
                <div>
                    <div className="">
                        <div className="row p-4">
                            <h6><TimeAndDate /></h6>

                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="col-sm-12 col-md-8">
                            <div className="row align-items-center">
                                <div className="col-8 mt-3">
                                    <h6 className="bold"> Summary </h6>
                                </div>
                                <div className="col-4">
                                    <div>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected><TimeAndDate /></option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div className="row my-3">
                                <div className="col-md-3 col-sm-12"><SummaryCard /></div>
                                <div className="col-md-3 col-sm-12"><SummaryCard /></div>
                                <div className="col-md-3 col-sm-12"><SummaryCard /></div>
                                <div className="col-md-3 col-sm-12"><SummaryCard /></div>
                            </div>



                            <div className="row my-3">
                                <div className="col-md-12 col-sm-12">
                                    <div className="my-3 border p-3 rounded" style={{ backgroundColor: '#fff' }}>
                                        <AudienceReachChart />
                                    </div>
                                </div>
                            </div>



                            <div className="container my-3">
                                <div className="row d-flex justify-content-between ">
                                    <div className="col-md-6 col-sm-12 border p-3 rounded" style={{ backgroundColor: '#fff', width: '27rem' }}>
                                        <h5>Top Locations</h5>
                                        <hr />
                                        <TopLocationChart />
                                    </div>
                                    <div className="col-md-6 col-sm-12 border p-3 rounded" style={{ backgroundColor: '#fff', width: '27rem' }}>
                                        <h5>Popular Events</h5>
                                        <hr />
                                        <TopLocationChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default insights
