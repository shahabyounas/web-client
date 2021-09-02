import React from 'react';
import Button from '../../../components/Button';
import EmptyState from '../../../components/EmptyState';
import EmptyStateEarningsImage from '../../../assets/images/empty-state-earnings.png'

const Withdraw = () => {

    const withdraws = [1]
    return (
        <div className="container px-5">
            {withdraws.length === 0 ? (<div> <EmptyState  image={EmptyStateEarningsImage} description="No earnings yet. Let’s push it off the ground" /> </div>) : (
                <>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex py-3">
                                <h6 className="bold">Current Balance</h6>
                            </div>
                            <div className="border p-4">
                                <table className="table table-borderless  text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">$ <span>0</span></th>
                                            <th className="text-start small text-muted" scope="col">Paypal Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Available Balance</td>
                                            <td className="d-flex" style={{ textAlign: 'left' }}>
                                                <div>
                                                    <input  type="email" 
                                                            className="form-control border-none" 
                                                            style={{ borderBottom: '1px solid #E5E3DD', backgroundColor: 'var(--page-bg)' }}  
                                                            name="Paypal Email" id="" />
                                                </div>
                                                <div className="mx-3"><Button className="small"> Withdraw Balance </Button></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <div className="d-flex py-4 align-items-center">
                                <h6 className="font-weight-bold flex-grow-1">Payout History</h6>
                                <Button className="small"> Download as CSV</Button>
                            </div>
                            <div className="border py-2">
                                <table className="table table-borderless text-center">
                                    <thead>
                                        <tr>
                                            <th className="small" scope="col">Date</th>
                                            <th  className="small" scope="col">Amount</th>
                                            <th className="small" scope="col">Paypal Email</th>
                                            <th className="small" scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>12 Feb 2021</td>
                                            <td>$100</td>
                                            <td>myemail@email.com</td>
                                            <td>Complete</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>



    )
}

export default Withdraw;