import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

const MultiStepProgressBar = props => {
  const { currentStep = 0 } = props;
  let stepPercentage = 0;

  if (currentStep === 0) {
    stepPercentage = 0;
  } else if(currentStep === 1){
    stepPercentage = 25;
  }
   else if (currentStep === 2) {
    stepPercentage = 75;
  } else if (currentStep === 3) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }


  return (
    <ProgressBar 
      percent={stepPercentage}
      filledBackground="#4C5DE4"
    >
      <Step>
        {({ accomplished }) => (
          <div
            className={`indexedStep ${accomplished ? 'accomplished' : null}`}
          >
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished }) => (
          <div
            className={`indexedStep ${accomplished ? 'accomplished' : null}`}
          >
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished }) => (
          <div
            className={`indexedStep ${accomplished ? 'accomplished' : null}`}
          >
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
