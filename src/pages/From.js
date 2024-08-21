import React, { useState, useEffect } from "react";
import PersonalDetailsForm from "../components/PersonalDetailsForm";
import EducationForm from "../components/EducationForm";
import Preview from "../components/Preview";
import { useNavigate } from "react-router-dom";

const Form = ({ data, setData, editIndex, setEditIndex }) => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);  // state to track the current step in the multistep form

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    profilePicture: "",
    education: [{ institution: "", course: "", year: "" }],
  });

    // useEffect hook to populate form data when editing an existing data
  useEffect(() => {
    if (editIndex !== null) {
      setFormData(data.attendees[editIndex]);
      
    }
  }, [editIndex, data]);

  // function to move to the previous step and next step in the form
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // function to handle changes in the form fields
  const handleChange = (input) => (e) => {
    if (input === "profilePicture") {
     // handle file input profile picture
      const files = e.target.files;
      if (files && files.length > 0) {
        const imageUrl = URL.createObjectURL(files[0]);
        setFormData({ ...formData, [input]: imageUrl });
      }
    } else {
     // handle text inputs
      setFormData({ ...formData, [input]: e.target.value });
    }
  };

  // function to handle changes in the education fields
  const handleEducationChange = (index, field, value) => {
    const newEducation = [...formData.education];
    newEducation[index][field] = value;
    setFormData({ ...formData, education: newEducation });
  };

    // function to add a new education entry
  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { institution: "", course: "", year: "" },
      ],
    });
  };

  const handleSubmit = () => {
    let updatedAttendees = [...data.attendees];
    if (editIndex !== null) {
            // update existing entry
      updatedAttendees[editIndex] = formData;
      setEditIndex(null);
    } else {
      //add new data
      updatedAttendees.push(formData);
    }

    // update the state with the new or updated attendees data
    setData({ attendees: updatedAttendees });
    navigate("/");
  };

     // conditional rendering of the multi-step form components
  switch (step) {
    case 1:
      return (
        <PersonalDetailsForm
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
          step={step}
        />
      );
    case 2:
      return (
        <EducationForm
          nextStep={nextStep}
          prevStep={prevStep}
          handleEducationChange={handleEducationChange}
          addEducation={addEducation}
          formData={formData}
          step={step}
        />
      );
    case 3:
      return (
        <Preview
          prevStep={prevStep}
          step={step}
          nextStep={handleSubmit}
          formData={formData}
        />
      );
    default:
      return null;
  }
};

export default Form;
