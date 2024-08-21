import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = ({ data, setEditIndex }) => {
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setFormData(data.attendees);
  }, [data]);

  const handleEdit = (index) => {
    setEditIndex(index);
    navigate("/form");
  };

  const style = {
    borderTop: "2px solid #6a6a6a5d",
    padding: "1px 0px",
  };

  return (
    <div className="outterBox">
      {formData.length > 0 ? (
        <div className="dis__form">
          <h2>User Data</h2>
          <div className="">
            {formData.map((item, i) => (
              <div
                key={i}
                className="dis__details"
                style={formData.length > 1 && i > 0 ? style : null}
              >
                <h5><span>Name:</span> {item.name}</h5>
                <h5>Mobile number: {item.mobile}</h5>
                <h5>Email: {item.email}</h5>
                <h5>
                  {item.education.map((user, i) => (
                    <div key={i} className="dis__details__edu">
                      <p>Institution: {user.institution}</p>
                      <p>Course: {user.course}</p>
                      <p>Year: {user.year}</p>
                    </div>
                  ))}
                </h5>

                <button className="editDetails" onClick={() => handleEdit(i)}>Edit Details</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="home">
          <h1>Your Data Is Empty</h1>
          <Link to="/form">
            <button>Add Details</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
