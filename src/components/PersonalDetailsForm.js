import React from "react";
import MultiSteps from "./MultiSteps";

const PersonalDetailsForm = ({ nextStep, handleChange, formData,step }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="outterBox ">

      <div className="personal ">
        <MultiSteps step={step} />

        <div className="personal__form ">
          <form onSubmit={continueStep}>
            {/* <div className="personal__form__profile">
            <input
            required
            id="upload-input"
            name="upload-input"
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                handleChange('profilePicture')(e.target.files);
              }
            }}
          />
            </div> */}
            <div className="inner__form">
              <div className="">
                
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange("name")}
                  required
                />
              </div>
              <div className="">
                <label htmlFor="">Mobile Number</label>

                <input
                  type="text"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange("mobile")}
                  required
                />
              </div>
              <div className="">
                <label htmlFor="">E-mail</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange("email")}
                  required
                />{" "}
              </div>
            </div>
           
            <div className="continue__outter__but">
            <button type="submit">continue</button>

            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
