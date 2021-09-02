import React, { useState } from 'react';
import Select from 'react-select';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button'
import Editor from '../../components/Editor'
import { EmptyAvatar } from '../../components/Svgs';


const CreateProfile = () => {

    const isEmpty = true;

    const [socialLinks, setSocialLinks] = useState([
        {
            name: 'facebook',
            icon: 'fb',
            value: ''
        },
        {
            name: 'instagram',
            icon: 'fb',
            value: ''
        },
        {
            name: 'twitter',
            icon: 'fb',
            value: ''
        },
        {
            name: 'linkedIn',
            icon: 'fb',
            value: ''
        },
        {
            name: 'youtube',
            icon: 'fb',
            value: ''
        },
        {
            name: 'snapchat',
            icon: 'fb',
            value: ''
        },
        {
            name: 'tiktok',
            icon: 'fb',
            value: ''
        }
    ])

    const [categoryOptions, setCategoryOption] = useState([ { label: 'Fit' , value: 'Fitness'} ])

    return (
        <>
            <div> Create Profile </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div>
                            <h5 className="bold"> My profile</h5>
                            <p className="small text-muted"> Fill in some general details about you </p>

                            <div className="profile__create-card">

                                <div className="d-flex">
                                    <div className="col-4" >
                                        <div>Display Name</div>
                                        <span className="small text-muted"> Required </span>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" className="form-control" placeholder="enter your name" />
                                    </div>
                                </div>

                                <div className="d-flex my-4 align-items">
                                    <div className="col-4 mt-3">
                                        <div>Profile Photo</div>
                                        <span className="small text-muted"> Required </span>
                                    </div>
                                    <div className="col-8">
                                        <div className="d-flex align-items-center">

                                            <div className="col-3" > <EmptyAvatar /> </div>
                                            <div className="col-9">
                                                <Button size="lg" className="w-10 text-center px-5">
                                                    Add Profile Photo
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <div className="col-4">
                                        Your Website
                                    </div>
                                    <div className="col-8">
                                        <input type="text" className="form-control" placeholder="enter your name" />
                                    </div>
                                </div>

                            </div>

                            <div className="profile__create-card my-4">
                                <div className="">
                                    <div>
                                        <div className="bold" style={{ lineHeight: 0.8 }}> About You </div>
                                        <span className="small text-muted"> Required </span>
                                    </div>

                                    <p className="small text-muted my-2"> This is the first thing potential attendees will see when they land on your profile, so make sure you paint a compelling picture about you.  </p>
                                    <Editor className="my-3" />
                                </div>

                                <div className="d-flex my-4">
                                    <div className="col-2 mt-1">
                                        Categories
                                    </div>
                                    <div className="col-10">
                                        <Select
                                            isMulti
                                            options={categoryOptions}
                                            placeholder="categories"
                                        />
                                    </div>
                                </div>

                            </div>

                            <div className="profile__create-card">
                                <div>
                                    <div className="bold"> Social Links </div>
                                    <p className="small text-muted my-2"> Display links of your social profiles on your page. Your users will be redirected to your social profiles. </p>
                                </div>

                                <div className="d-flex flex-column">
                                    {socialLinks.map((link , idx) => (
                                        <div className="d-flex" style={{ borderBottom: 'var(--border)'}} key={idx.toString()}>
                                            <div className="col-2 pt-2"> {link.name} </div>
                                            <input className="col-10 profile__social-links" value={link.value}  placeholder={`Paste your ${link.name} link here`}  />
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateProfile;