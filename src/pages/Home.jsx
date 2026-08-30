import React from 'react'
import Banner from '../components/Banner'
import ClientsInculde from '../components/ClientsInculde'
import Expertise from '../components/Expertise'
import Collaborative from '../components/Collaborative'
import RecruitmentProcess from '../components/RecruitmentProcess'
import SEO from '../components/SEO'

const Home = () => {
  return (
    <div>
      <SEO
        title="Home"
        description="Teamup Consultants helps businesses hire remote talent, streamline recruitment, and deploy AI-powered support services with measurable ROI."
        canonical="https://teamupconsultants.com/"
        keywords="remote staffing, recruitment outsourcing, virtual assistant, AI support, business process outsourcing"
        url="https://teamupconsultants.com/"
      />
      <Banner/>
      <ClientsInculde/>
      <Expertise/>
      <Collaborative/>
      <RecruitmentProcess/>
    </div>
  )
}

export default Home
