import React from 'react'
import HeroAi from '../components/HeroAi'
import AICard from '../components/AICard'
import PlatformDevelopment from '../components/PlatformDevelopment'
import HighPerfomance from '../components/HighPerfomance'
import AIMLTable from '../components/AIMLTable'
import SEO from '../components/SEO';

const It = () => {
  return (
    <div>
      <SEO
        title="AI & ML Solutions"
        description="Leverage Teamup Consultants for enterprise AI and machine learning solutions, intelligent automation, and scalable digital transformation."
        canonical="https://teamupconsultants.com/enterprise-ai"
        keywords="AI solutions, machine learning, enterprise AI, automation services"
        url="https://teamupconsultants.com/enterprise-ai"
      />
      <HeroAi/>
      <AICard/>
      <PlatformDevelopment/>
      <HighPerfomance/>
      <AIMLTable/>
    </div>
  )
}

export default It
