import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience">
      <h2>Professional Experience</h2>
      <h3>Test Engineer</h3>
        <p>
          Ivy Software Development Private Limited, Hyderabad
          <br />
          August 2021 – Present
        </p>
        <div className="experience-list">
            <h4 className='experience-list-sub'>Playwright with C# UI and API Automation:</h4>
            <ul>
              <li>
                Developed and maintained UI automation scripts using Playwright with C# for cross-browser testing.
              </li>
              <li>
                Automated API testing using Playwright, integrating it with RESTful services for efficient validation.
              </li>
              <li>
                Created and managed robust test suites with NUnit for both UI and API automation, enhancing regression and functional testing.
              </li>
              <li>
                Leveraged Playwright’s parallel execution capabilities to speed up test runs across different browsers.
              </li>
            </ul>
            <h4>Selenium with C# UI and API Automation:</h4>
            <ul>
              <li>
                Automated complex business workflows using Selenium with C# for UI testing across multiple browsers.
              </li>
              <li>
                Performed API automation using Selenium WebDriver with RESTful services, verifying API responses and validating data flows.
              </li>
              <li>
                Integrated Selenium with NUnit to create scalable test suites and utilized reporting tools (Allure, Extent Reports) for enhanced test execution analytics.
              </li>
            </ul>
            <h4>Selenium with Java UI and API Automation:</h4>
            <ul>
              <li>
                Developed end-to-end UI automation using Selenium WebDriver with Java, implementing the Page Object Model (POM) design for maintainability.
              </li>
              <li>
                Automated API testing through Postman and integrated it with Selenium tests to validate UI and backend data consistency.
              </li>
              <li>
                Utilized Maven for dependency management and build automation, ensuring smooth CI/CD pipelines in GitLab.
              </li>
            </ul>
            <h4>JMeter Performance Testing:</h4>
            <ul>
              <li>
                Conducted performance testing of web applications using Apache JMeter to simulate high user loads and assess system stability.
              </li>
              <li>
                Analyzed performance metrics like response time, throughput, and error rates, providing detailed reports to stakeholders for performance improvements.
              </li>
              <li>
                Collaborated with developers to optimize application performance based on JMeter test results.
              </li>
            </ul>
            <h3>Associate Test Engineer</h3>
        <p>
          Edvensoft Solutions, Hyderabad
          <br />
          August 2019 – July 2021
        </p>
        <div className="experience-list">
            <h4>Selenium with Java UI and API Automation:</h4>
            <ul>
              <li>
                Automated UI testing for web applications using Selenium WebDriver with Java and implemented API testing using Postman.
              </li>
              <li>
                Built and maintained test automation frameworks using Maven and integrated them into CI/CD pipelines in GitLab.
              </li>
            </ul>
        </div>
        </div>
      <div className="experience-links">
        <h3>View More Experience:</h3>
        <ul>
          <li>
            <a href="#test-engineer" className="active">
              Test Engineer
            </a>
          </li>
          <li>
            <a href="#associate-test-engineer">Associate Test Engineer</a>
          </li>
          <li>
            <a href="#senior-test-engineer">Senior Test Engineer</a>
          </li>
          <li>
            <a href="#test-lead">Test Lead</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
