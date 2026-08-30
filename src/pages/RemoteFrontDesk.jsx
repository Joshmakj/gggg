import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroFrontDesk from '../components/HeroFrontDesk'
import RemoteFrontDeskSections from '../components/RemoteFrontDeskSections'
import BookDemoModal from '../components/BookDemoModal'
import SEO from '../components/SEO'

const RemoteFrontDesk = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const location = useLocation()
  const [formDefaultService, setFormDefaultService] = useState('hire')

  const openForm = (service = 'hire') => {
    setFormDefaultService(service)
    setIsFormOpen(true)
  }
  const closeForm = () => setIsFormOpen(false)

  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false)
  const openBookDemo = () => setIsBookDemoOpen(true)
  const closeBookDemo = () => setIsBookDemoOpen(false)

  useEffect(() => {
    if (location && location.state && location.state.openForm) {
      openForm()
      try {
        // clear history state so repeated navigation doesn't reopen
        window.history.replaceState({}, '', window.location.pathname)
      } catch {
        // History state cleanup is best effort.
      }
    }
  }, [location])

  return (
    <div>
      <SEO
        title="Remote Front Desk Assistant"
        description="Provide 24/7 virtual receptionist support with live remote front desk assistance for law firms, medical offices, corporate offices, and government buildings."
        canonical="https://teamupconsultants.com/remote-front-desk"
        keywords="remote front desk, virtual receptionist, live receptionist support, office support"
        url="https://teamupconsultants.com/remote-front-desk"
      />
      <HeroFrontDesk isFormOpen={isFormOpen} openForm={openForm} closeForm={closeForm} defaultService={formDefaultService} />
      <RemoteFrontDeskSections openForm={openForm} openBookDemo={openBookDemo} />
      <BookDemoModal isOpen={isBookDemoOpen} onClose={closeBookDemo} />
    </div>
  )
}

export default RemoteFrontDesk
