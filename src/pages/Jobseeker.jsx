import React from 'react'
import JobBanner from '../components/JobBanner';
import HowItWorks from '../components/HowItWorks';
import WhyChoTeam from '../components/WhyChoTeam';
import CareerGrowth from '../components/CareerGrowth';
import SEO from '../components/SEO';

const Jobseeker = () => {
  return (
    <div>
      <SEO
        title="Job Seeker Opportunities"
        description="Explore flexible remote work opportunities, career growth programs, and staffing support with Teamup Consultants."
        canonical="https://teamupconsultants.com/jobseeker"
        keywords="job seeker, remote jobs, career growth, staffing opportunities"
        url="https://teamupconsultants.com/jobseeker"
      />
      <JobBanner/>
      <HowItWorks/>
      <WhyChoTeam/>
      <CareerGrowth/>
    </div>
  )
}

export default Jobseeker
