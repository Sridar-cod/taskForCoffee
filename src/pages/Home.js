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



  return (
    <div className="outterBox">
     {/* condition for show data or add data button */}
      {formData.length > 0 ? (
        <div className="dis__form">
          <div className="dis__form__top">
          <h2>User Data</h2>
          <Link to="/form">
            <button className="addDetails-but">Add Details</button>
          </Link></div>
          <div className="outter_dis">
            {formData.map((item, i) => (
              <div
                key={i}
                className="dis__details"
              >
                <ul>
                  <li>
                    <span>Name: </span> {item.name}
                  </li>
                  <li>
                    <span>Mobile Number:</span> {item.mobile}
                  </li>
                  <li>
                    <span>Email:</span> {item.email}
                  </li>
                </ul>
                <div key={i} className="dis__details__edu">
                  {item.education.map((user, i) => (
                    <ul key={i}>
                      <li>
                        <span>Institution: </span>
                        {user.institution}
                      </li>
                      <li>
                        <span>Course: </span>
                        {user.course}
                      </li>
                      <li>
                        <span>Year: </span>
                        {user.year}
                      </li>
                    </ul>
                  ))}
                </div>

                <button className="editDetails" onClick={() => handleEdit(i)}>
                  Edit Details
                </button>
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
