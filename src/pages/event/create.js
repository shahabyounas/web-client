import React, { useState } from 'react';
import Button from '../../components/Button'
import MultiStepProgressBar from '../../components/MultiStepProgressBar'
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import "react-datepicker/dist/react-datepicker.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Create = () => {

    const [state, setState] = useState({
        currentStep: 1,
        name: "",
        type: "",
        summary: "",
        startDate: "",
        duration: 30,
        increment: 0,
        categories: [],
        schedules: [],
        eventFrequency: "",
        eventStartTime: "00:00",
        eventEndTime: "00:00",
        host: "",
        about: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const { email, username, password } = state;
        alert(`Your registration detail: \n 
          Email: ${email} \n 
          Username: ${username} \n
          Password: ${password}`);
    };

    const handelNextButton = () => {
        let currentStep = state.currentStep;
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        setState({ ...state, currentStep: currentStep });
    }

    const handelPrevButton = () => {
        let currentStep = state.currentStep;
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        setState({ ...state, currentStep: currentStep });
    }

    const previousButton = () => {
        let currentStep = state.currentStep;

        if (currentStep !== 1) {
            return (
                <Button className="py-1 px-5" onClick={() => handelPrevButton()}>
                    Previous
                </Button>
            );
        }

        return null;
    }

    const nextButton = () => {
        let currentStep = state.currentStep;
        if (currentStep < 3) {
            return (
                <Button className="mx-3 py-1 px-5" onClick={() => handelNextButton()}>
                    Next
                </Button>
            );
        }
        return null;
    }

    const submitButton = () => {
        let currentStep = state.currentStep;
        if (currentStep > 2) {
            return <Button className="mx-3 py-1 px-5">Submit</Button>;
        }
        return null;
    }


    return <div className="event-create-container">

        <div className="row row-wrap justify-content-around my-3 px-4">
            <div className="col-12  col-md-2 col-sm-12 mt-5">
                <h1 className="heading"> Let’s build your first event</h1>
                <div className="small text-muted instructions">Tell us a little bit about your event so we can help create the perfect event for you. </div>
                <div className="mt-3"> <MultiStepProgressBar currentStep={state.currentStep} /> </div>
                <div className="small text-muted mt-2">{`Step ${state.currentStep} of 3`}</div>
            </div>
            <div className={`col-12 mt-5 mt-md-1 col-sm-12 mx-sm-4 ${state.currentStep === 3 ? 'col-md-5' : 'col-md-4'}`}>
                <StepOne state={state} setState={handleChange} />
                <StepTwo state={state} setState={handleChange} />
                <StepThree state={state} setState={handleChange} />
            </div>
        </div>

        <div className="mt-auto py-3 createFooter">
            <div className="d-flex justify-content-md-end justify-content-center mx-5">
                {previousButton()}
                {nextButton()}
                {submitButton()}
            </div>
        </div>

    </div>
}

export default Create;