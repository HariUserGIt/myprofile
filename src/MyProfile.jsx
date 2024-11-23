import React from 'react';
import './MyProfile.css'; // Optional: Add CSS for styling

const MyProfile = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-title">About Me</h1>
      <img 
        className="profile-pic" 
        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462575717_890527969890815_8230429295010960121_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Z3v0wPDuDIAQ7kNvgExgehP&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QGkFBvUTnhA2Uo2GfG0GkdUqxjtjvxk-JbuYia57iPBjA&oe=6767E96E" 
        alt="Hari Prasad Thatavarthi" 
      />
      <div className="profile-details">
        <h2 className="profile-name">Hari Prasad Thatavarthi</h2>
        <h3 className="profile-role">Senior Automation Test Engineer</h3>
        <p>
          With over <strong>5.5 years of experience</strong> in delivering high-quality test automation solutions, I specialize in:
        </p>
        <ul>
          <li><strong>Selenium</strong> with Java and C#</li>
          <li><strong>Rest Assured Automation</strong></li>
          <li><strong>Playwright</strong> with C#</li>
          <li><strong>JMeter</strong> for Performance Testing</li>
          <li><strong>API Testing</strong></li>
          <li>UFT Desktop Automation (basic knowledge)</li>
          <li>React JS development (personal projects)</li>
        </ul>
        <p>
          I have developed and worked on various automation frameworks, including:
        </p>
        <ul>
          <li>Selenium with Java and TestNG</li>
          <li>Playwright with C# and POM framework using NUnit</li>
          <li>BDD frameworks like Cucumber and SpecFlow</li>
          <li>Allure reporting integration for test automation suites</li>
        </ul>
        <p>
          Passionate about staying updated with the latest industry trends, I look forward to collaborating on innovative and cutting-edge test automation solutions.
        </p>
      </div>
    </div>
  );
};

export default MyProfile;
