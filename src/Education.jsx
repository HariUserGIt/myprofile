import React from 'react';

const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>
      <div className="education-section">
        <h3>Bachelor of Technology (Mechanical Engineering)</h3>
        <p>
          Aditya College of Engineering and Technology, Hyderabad
          <br />
          2018 - 74.4%
        </p>
        <ul className="education-list">
          <li>
            <span>Duration:</span> 4 years
          </li>
          <li>
            <span>Specialization:</span> Mechanical Engineering
          </li>
          <li>
            <span>Percentage:</span> 74.4%
          </li>
        </ul>
      </div>
      <div className="education-Section">
        <h3>Intermediate (Science)</h3>
        <p>
          Aditya Junior College, Kakinada
          <br />
          2014 - 83%
        </p>
        <ul className="education-list">
          <li>
            <span>Duration:</span> 2 years
          </li>
          <li>
            <span>Specialization:</span> Science
          </li>
          <li>
            <span>Percentage:</span> 83%
          </li>
        </ul>
      </div>
      <div className="education-section">
        <h3>SSC (Secondary School Certificate)</h3>
        <p>
          Harvest School, Pithapuram
          <br />
          2012 - 8.8 CGPA
        </p>
        <ul className="education-list">
          <li>
            <span>Duration:</span> 1 years
          </li>
          <li>
            <span>Specialization:</span> Science
          </li>
          <li>
            <span>CGPA:</span> 8.8
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
