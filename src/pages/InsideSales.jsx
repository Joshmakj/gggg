import React from 'react'
import InsideComponent from '../components/InsideComponent'
import HeroInside from '../components/HeroInside'
import PaintPoints from '../components/PaintPoints'
import SolutionSection from '../components/SolutionSection'
import ImplementationCard from '../components/ImplementationCard'
import ImplementationTeam from '../components/ImplementationTeam';
import SEO from '../components/SEO';

const InsideSales = () => {
  return (
    <div>
      <SEO
        title="Inside Sales Support"
        description="Scale your sales team with remote inside sales specialists, lead qualification, appointment setting, and customer follow-up services."
        canonical="https://teamupconsultants.com/insidesales"
        keywords="inside sales, remote sales support, lead generation, appointment setting"
        url="https://teamupconsultants.com/insidesales"
      />
      <HeroInside/>
      <PaintPoints/>
      <SolutionSection/>
      <InsideComponent/>
      <ImplementationCard/>
      <ImplementationTeam/>
    </div>
  )
}

export default InsideSales
