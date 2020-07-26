import React from "react";
import "./PostContainer.css";
import "./WorkExperienceContainer.css";
import { lightPurple, darkPurple } from "./constants/colors";
import PostContainer from "./PostContainer";
import WorkExperienceLayout from "./WorkExperienceLayout";
import JobDescriptionIntercom from "./JobDescriptionIntercom";
import JobDescriptionSalesforceLMTS from "./JobDescriptionSalesforceLMTS";
import JobDescriptionSalesforceSMTS from "./JobDescriptionSalesforceSMTS";
import JobDescriptionSalesforceMTS from "./JobDescriptionSalesforceMTS";
import JobDescriptionSalesforceAMTS from "./JobDescriptionSalesforceAMTS";
import JobDescriptionUnboundID from "./JobDescriptionUnboundID";
import JobDescriptionHP from "./JobDescriptionHP";
import JobDescriptionEtherios from "./JobDescriptionEtherios";
import JobDescriptionUT from "./JobDescriptionUT";

function WorkExperienceContainer() {
  return (
    <PostContainer
      stickyTape="Experience"
      backgroundColor={lightPurple}
      stickyTapeColor={darkPurple}
    >
      <div className="WorkExperienceContainer">
        <WorkExperienceLayout
          company="Intercom"
          jobTitle="Product Enginer III"
          jobDate="January 2020 - August 2020"
          jobDescription={<JobDescriptionIntercom />}
        />
        <hr className="WorkExperienceHr" />
        <WorkExperienceLayout
          company="Salesforce"
          jobTitle="Lead Software Engineer"
          jobDate="January 2019 - September 2019"
          jobDescription={<JobDescriptionSalesforceLMTS />}
        />
        <hr className="SalesforceHr" />
        <WorkExperienceLayout
          jobTitle="Senior Software Engineer"
          jobDate="June 2017 - January 2019"
          jobDescription={<JobDescriptionSalesforceSMTS />}
        />
        <hr className="SalesforceHr" />
        <WorkExperienceLayout
          jobTitle="Software Engineer"
          jobDate="April 2016 - June 2017"
          jobDescription={<JobDescriptionSalesforceMTS />}
        />
        <hr className="SalesforceHr" />
        <WorkExperienceLayout
          jobTitle="Associate Quality Engineer"
          jobDate="February 2015 - March 2016"
          jobDescription={<JobDescriptionSalesforceAMTS />}
        />
        <hr className="WorkExperienceHr" />
        <WorkExperienceLayout
          company="UnboundID"
          jobTitle="Associate Quality Assurance Engineer"
          jobDate="August 2013 - December 2014"
          jobDescription={<JobDescriptionUnboundID />}
        />
        <hr className="WorkExperienceHr" />
        <WorkExperienceLayout
          company="HP"
          jobTitle="Software Engineer Intern"
          jobDate="May 2014 - August 2014"
          jobDescription={<JobDescriptionHP />}
        />
        <hr className="WorkExperienceHr" />
        <WorkExperienceLayout
          company="Etherios"
          jobTitle="Salesforce Technical Consulting Intern"
          jobDate="May 2013 - August 2013"
          jobDescription={<JobDescriptionEtherios />}
        />
        <hr className="WorkExperienceHr" />
        <WorkExperienceLayout
          company="University of Texas Applied Research Labs"
          jobTitle="Student Technician"
          jobDate="January 2013 - May 2013"
          jobDescription={<JobDescriptionUT />}
        />
      </div>
    </PostContainer>
  );
}

export default WorkExperienceContainer;
