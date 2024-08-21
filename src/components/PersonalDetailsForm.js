import React from "react";
import MultiSteps from "./MultiSteps";

const PersonalDetailsForm = ({ nextStep, handleChange, formData, step }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="outterBox ">
      <div className="personal ">
                {/* render the multistep progress indicator */}
        <MultiSteps step={step} />

        <div className="personal__form ">
          <form onSubmit={continueStep}>
            <div className="personal__form__profile">
              <div className="">
                                {/* conditionally render the default profile icon or the selected profile picture */}
                {!formData.profilePicture ? (
                  <svg
                    width={"30px"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                  </svg>
                ) : null}
                <input
                  id="upload-input"
                  name="upload-input"
                  type="file"
                  accept="image/jpg, image/png, image/jpeg"
                  onChange={(e) => handleChange("profilePicture")(e)}
                />
                {formData.profilePicture && (
                  
                  <img src={formData.profilePicture} alt="Profile Preview" />
                )}
              </div>
            </div>

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
