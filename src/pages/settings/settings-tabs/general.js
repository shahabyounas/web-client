import React from 'react';
import Button from '../../../components/Button';

export const General = () => {

    const isEmpty = false;

    return (
        <div className="container">

            {isEmpty ? (<div>
                You do not have any Past events
            </div>) :
                (<div className="d-flex flex-column align-items-center justify-content-center">

                    <div className="col-md-6">
                        <div className="mx-2 my-2 bold text-muted"> Login </div>
                        <div className="profile__create-card">

                            <div className="d-flex">
                                <div className="col-4">
                                    <div>Email</div>
                                </div>
                                <div className="col-8">
                                    akhan55342@gmail.com
                            </div>
                            </div>

                            <div className="d-flex my-4">
                                <div className="col-4">
                                    Your Website
                            </div>
                                <div className="col-8">
                                    <div>
                                        <label className="bold small"> New Password </label>
                                        <input type="text" className="form-control" placeholder="enter your name" />
                                    </div>

                                    <div className="my-3">
                                        <label className="bold small"> Confirm Password </label>
                                        <input type="text" className="form-control" placeholder="enter your name" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 my-3">
                        <div className="mx-2 my-2 bold text-muted"> Notifications </div>
                        <div className="profile__create-card">

                            <div>
                                <div className="bold small"> Announcements And Resources </div>
                                <div className="mt-4 mx-3">
                                    <div>
                                        <input type="checkbox" />
                                        <label className="small mx-4 text-muted"> Product updates and announcements </label>
                                    </div>

                                    <div className="my-2">
                                        <input type="checkbox" />
                                        <label className="small mx-4 text-muted"> Stream Newsletter </label>
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <div className="bold small"> Email Notifications </div>
                                <div className="mt-3 mx-3">
                                    <div>
                                        <input type="checkbox" />
                                        <label className="small mx-4 text-muted"> When someone follows me </label>
                                    </div>

                                    <div className="my-2">
                                        <input type="checkbox" />
                                        <label className="small mx-4 text-muted"> When someone buys a ticket </label>
                                    </div>

                                    <div className="my-2">
                                        <input type="checkbox" />
                                        <label className="small mx-4 text-muted"> My upcoming events </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <Button className="width-15 text-center">  Save </Button>
                    </div>

                </div>)}

        </div>
    )
}