import React from "react";
import MultiSteps from "./MultiSteps";

const EducationForm = ({
  nextStep,
  prevStep,
  handleEducationChange,
  addEducation,
  formData,
  step,
}) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="outterBox ">
      <div className="education">
        <MultiSteps step={step} />

        <div className="education__inner ">
          <div className="education__inner__top">
            <div className="">
              <h5>Education Details</h5>
            </div>
            <div className="edu__but">
              <button type="button" onClick={addEducation}>
                Add
              </button>{" "}
            </div>
          </div>
          <form onSubmit={continueStep}>
            {formData.education.map((education, index) => (
              <div key={index} className="edu__from inner__form">
                <div className="">
                  <label htmlFor="">Institution Name</label>
                  <input
                    type="text"
                    placeholder="Institution Name"
                    value={education.institution}
                    onChange={(e) =>
                      handleEducationChange(
                        index,
                        "institution",
                        e.target.value
                      )
                    }
                    required
                  />
                </div>
                <div className="">
                  <label htmlFor="">Course Name</label>
                  <input
                    type="text"
                    placeholder="Course Name"
                    value={education.course}
                    onChange={(e) =>
                      handleEducationChange(index, "course", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="">
                  <label htmlFor="">Passed Out Year</label>

                  <input
                    type="number"
                    placeholder="Passed Out Year"
                    value={education.year}
                    onChange={(e) =>
                      handleEducationChange(index, "year", e.target.value)
                    }
                    required
                  />
                </div>
              </div>
            ))}
           
            <div className="continue__outter__but gap-but">
            <button type="button" onClick={prevStep}>
              Back
            </button>
              <button type="submit">continue</button>
            </div>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EducationForm;
