import Avatar from '../../../components/Avatar/Avatar';
import EmptyState from '../../../components/EmptyState';
import Barrechart from './recharts/rechart';
import EmptyStateEarningsImage from '../../../assets/images/empty-state-earnings.png'



const Earnings = () => {

    const earnings = [1]



    return (
        <div className="container">
            
          {earnings.length === 0 ? (<div> <EmptyState  image={EmptyStateEarningsImage} description="No earnings yet. Let’s push it off the ground" /> </div>) : (<div className="row">

                <div className="col-8 px-5">
                    <div>
                        <h6 className="bold">Your Earnings</h6>
                        <div className="p-3">
                            <p className="bold text-muted">Last 30 days</p>
                        </div>
                        {/* Reserved space for Chart */}
                        <div className="py-5 border">
                            <Barrechart />
                        </div>
                    </div>
                    {/* Monthly summery section */}
                    <div className="mt-5">
                        <h6 className="bold">Monthly Summary</h6>
                        <div className="border my-4 py-3">
                            <table className="table table-borderless text-center">
                                <thead>
                                    <tr>
                                        <th className="small" scope="col">Month</th>
                                        <th className="small" scope="col">Total Earnings</th>
                                        <th  className="small" scope="col">Total Refunds</th>
                                        <th className="small" scope="col">Total Declines</th>
                                        <th className="small" scope="col">Platform Fees</th>
                                        <th className="small"  scope="col">Withdrawal</th>
                                        <th className="small" scope="col">Available Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Feb</th>
                                        <td>$100</td>
                                        <td>$5</td>
                                        <td>$10</td>
                                        <td>$8.5</td>
                                        <td>$76.5</td>
                                        <td>$0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <h6 className="mx-5 bold"> Recent Transactions  </h6>

                    <div className="d-flex flex-wrap justify-content-center mx-5">
                        {Array(12).fill().map((item, idx) => {
                            return <Avatar className="mx-2 my-3" title="Ayaz Khan" key={idx.toString()} />
                        })}
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Earnings;