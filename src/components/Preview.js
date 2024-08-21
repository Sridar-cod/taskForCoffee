import React from "react";
import MultiSteps from "./MultiSteps";

const Preview = ({ prevStep, formData, nextStep, step }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="outterBox ">
      <div className="preview">
        <MultiSteps step={step} />

        <div className="preview__inner">
          <div className="">
            <p>
              <span>Name:</span> {formData.name}
            </p>
            <p>
              <span>Mobile:</span> {formData.mobile}
            </p>
            <p>
              <span>Email:</span> {formData.email}
            </p>
          </div>

          <div>
            <h2>Education</h2>
            {formData.education.map((education, index) => (
              <div key={index} className="edu__each-details">
                <p>
                  <span>Institution Name </span>: {education.institution}
                </p>
                <p>
                  <span>Course:</span> {education.course}
                </p>
                <p>
                  <span>Year:</span> {education.year}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="preview__outterBut continue__outter__but ">
          <button type="button" onClick={prevStep}>
            Back
          </button>
            <button onClick={continueStep}>continue</button>
            </div>
      </div>
    </div>
  );
};

export default Preview;
