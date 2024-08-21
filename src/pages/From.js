import React, { useState, useEffect } from 'react';
import PersonalDetailsForm from '../components/PersonalDetailsForm';
import EducationForm from '../components/EducationForm';
import Preview from '../components/Preview';
import { useNavigate } from 'react-router-dom';

const Form = ({ data, setData, editIndex, setEditIndex }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    profilePicture: '',
    education: [{ institution: '', course: '', year: '' }]
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (editIndex !== null) {
      setFormData(data.attendees[editIndex]);
    }
  }, [editIndex, data]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...formData.education];
    newEducation[index][field] = value;
    setFormData({ ...formData, education: newEducation });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { institution: '', course: '', year: '' }]
    });
  };

  const handleSubmit = () => {
    let updatedAttendees = [...data.attendees];
    if (editIndex !== null) {
      updatedAttendees[editIndex] = formData;
      setEditIndex(null);
    } else {
      updatedAttendees.push(formData);
    }

    setData({ attendees: updatedAttendees });
    navigate('/');
  };

  switch (step) {
    case 1:
      return <PersonalDetailsForm nextStep={nextStep} handleChange={handleChange} formData={formData} step={ step} />;
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
      return <Preview prevStep={prevStep} step={step} nextStep={handleSubmit} formData={formData} />;
    default:
      return null;
  }
};

export default Form;
