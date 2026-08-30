import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Helmet } from 'react-helmet-async'
import './Componetcss/HeroFrontDesk.css'
import './Componetcss/RemoteFrontDeskCategoryPage.css'
import BookDemoModal from './BookDemoModal'

const noop = () => {}

function RemoteFrontDeskCategoryPage({ config, openBookDemo = noop }) {
  const [showWorkflowPreview, setShowWorkflowPreview] = useState(false)
  // Keep hero spacing but remove the rotating "Serving" accent

  useEffect(() => {
    document.body.style.overflow = showWorkflowPreview ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [showWorkflowPreview])

  // No accent rotation for inner category pages - keep static subtitle only

  const openWorkflowPreview = () => {
    window.requestAnimationFrame(() => setShowWorkflowPreview(true))
  }
  const closeWorkflowPreview = () => setShowWorkflowPreview(false)

  const hasDemoHandler = openBookDemo !== noop
  const isLawFirmPage = config.id === 'law-firms'
  const detailSectionClass = isLawFirmPage ? 'lawfirm-detail' : 'rfdp-detail'
  const detailPillClass = isLawFirmPage ? 'lawfirm-pill lawfirm-pill--detail' : 'rfdp-detail-pill'
  const detailTitleClass = isLawFirmPage ? 'lawfirm-detail__title' : 'rfdp-detail__title'
  const detailLeadClass = isLawFirmPage ? 'lawfirm-detail__lead' : 'rfdp-detail__lead'
  const detailCardClass = isLawFirmPage ? 'lawfirm-detail-card' : 'rfdp-detail-card'
  const renderWorkflowModal = () => (
    <div className="rfd-modal" role="dialog" aria-modal="true" aria-label="Workflow preview">
      <div className="rfd-modal__backdrop" onClick={closeWorkflowPreview} aria-hidden="true" />
      <div className="rfd-modal__dialog rfd-modal__dialog--large">
        <button type="button" className="rfd-modal__close" onClick={closeWorkflowPreview} aria-label="Close workflow preview">
          <i className="bi bi-x-lg" aria-hidden="true" />
        </button>
        <div className="rfd-modal__body">
          <div className="rfd-modal__eyebrow">{config.process?.eyebrow || 'WORKFLOW'}</div>
          <h2 className="rfd-modal__title">{config.process?.title || 'Explore the workflow'}</h2>
          <p className="rfd-modal__copy">{config.process?.lead || 'See how the reception flow captures details, routes requests, and keeps your team focused.'}</p>
          {config.process?.steps && (
            <div className="lawfirm-steps">
              {config.process.steps.map((step, index) => (
                <div key={step.title} className="lawfirm-step">
                  <span>{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button type="button" className="rfd-modal__submit rfd-modal__submit--wide" onClick={closeWorkflowPreview}>
            Close preview
          </button>
        </div>
      </div>
    </div>
  )

  const openCategoryDemo = (service = config.id === 'co-working-spaces' ? 'coworking' : 'demo') => {
    const payload = {
      service,
      variant: config.id === 'co-working-spaces' && service === 'coworking' ? 'premium' : undefined,
      category: config.id,
    }

    if (hasDemoHandler) {
      try {
        openBookDemo(payload)
      } catch {
        setShowLocalBookDemo(true)
      }
    } else {
      setShowLocalBookDemo(true)
    }
  }

  const handleHeroPrimary = () => {
    openCategoryDemo(config.id === 'co-working-spaces' ? 'coworking' : 'demo')
  }

  const handleHeroSecondary = () => {
    if (config.process?.steps?.length) openWorkflowPreview()
    else openCategoryDemo('hire')
  }

  const [showLocalBookDemo, setShowLocalBookDemo] = useState(false)
  const closeLocalBookDemo = () => setShowLocalBookDemo(false)

  return (
    <div className={`rfdp-page ${config.id}`} style={{ '--rfdp-accent': config.theme.accent, '--rfdp-accent-soft': config.theme.accentSoft, '--rfdp-ink': config.theme.ink }}>
      <Helmet>
        <title>{config.metaTitle}</title>
        <meta name="description" content={config.metaDescription} />
        <meta property="og:title" content={config.metaTitle} />
        <meta property="og:description" content={config.metaDescription} />
        <link rel="canonical" href={config.canonical} />
      </Helmet>

      <section className="rfd-hero">
        <div className="rfd-hero__inner container">
          <div className="row align-items-center g-4 g-xl-5">
            <div className="col-lg-5 col-xl-6">
              <div className="rfd-badge">
                <span className="rfd-badge__icon"><i className={`bi ${config.hero.badgeIcon}`} /></span>
                <span>{config.hero.badge}</span>
              </div>

              <h1 className="rfd-title rfd-title--main">
                <span>{config.hero.titleTop}</span>
              </h1>

              <h2 className="rfd-title rfd-title--sub">
                {config.hero.titleAccent ? (
                  <>
                    <span>{config.hero.titleBottom}</span>
                    <span className="rfd-title__accent"> {config.hero.titleAccent}</span>
                  </>
                ) : (
                  <span className="rfd-title__accent"> {config.hero.titleBottom}</span>
                )}
              </h2>

              <p className="rfd-copy">{config.hero.copy}</p>
              <div className="rfd-features">
                {config.features.map((feature) => (
                  <div className="rfd-feature" key={feature.title}>
                    <span className="rfd-feature__icon"><i className={`bi ${feature.icon}`} /></span>
                    <span className="rfd-feature__label">{feature.title}</span>
                  </div>
                ))}
              </div>
              <div className="rfd-actions">
                <button type="button" className="rfd-btn rfd-btn--primary" onClick={handleHeroPrimary}>{config.hero.primaryCta}</button>
                <button type="button" className="rfd-btn rfd-btn--secondary" onClick={handleHeroSecondary}>{config.hero.secondaryCta}</button>
              </div>
            </div>
            <div className="col-lg-7 col-xl-6 d-flex justify-content-lg-end">
              <div className="rfd-visual">
                <img src={config.hero.image} alt={config.hero.imageAlt} className="rfd-visual__image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rfdp-section">
        <div className="container">
          <div className="rfdp-section__heading">
            <span className="rfdp-section__eyebrow"><i className={`bi ${config.intro.eyebrowIcon}`} />{config.intro.eyebrow}</span>
            <h2><span>{config.intro.titleTop}</span>{' '}<span className="is-accent">{config.intro.titleBottom}</span></h2>
            <p>{config.intro.lead}</p>
          </div>
          {config.intro.trustDivider && <div className="rfdp-section-divider"><span>{config.intro.trustDivider}</span></div>}
          {config.intro.trustPoints && (
            <div className="rfdp-trust-grid">
              {config.intro.trustPoints.map((point) => (
                <div className="rfdp-trust-pill" key={point}>
                  <span className="rfdp-trust-pill__icon"><i className="bi bi-check-lg" aria-hidden="true" /></span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          )}
          <div className="rfdp-intro-grid">
            {config.id === 'government-buildings' ? (
              <div className="rfdp-intro-gov-grid">
                <div className="rfdp-intro-gov-col rfdp-intro-gov-col--left">
                  {config.intro.cards.slice(0, 2).map((card) => (
                    <article className="rfdp-info-card" key={card.title}>
                      <div className="rfdp-info-card__icon"><i className={`bi ${card.icon}`} /></div>
                      <div className="rfdp-info-card__copy">
                        <h3>{card.title}</h3>
                        {(card.desc || (card.bullets && card.bullets[0])) && (
                          <p className="rfdp-info-card__single">{card.desc || card.bullets[0]}</p>
                        )}
                        <div className="rfdp-info-card__divider" />
                      </div>
                    </article>
                  ))}
                </div>

                <div className="rfdp-intro-visual rfdp-intro-visual--center">
                  <img src={config.intro.image} alt={config.intro.imageAlt} className="rfdp-media-frame__image" />
                </div>

                <div className="rfdp-intro-gov-col rfdp-intro-gov-col--right">
                  {config.intro.cards.slice(2, 4).map((card) => (
                    <article className="rfdp-info-card" key={card.title}>
                      <div className="rfdp-info-card__icon"><i className={`bi ${card.icon}`} /></div>
                      <div className="rfdp-info-card__copy">
                        <h3>{card.title}</h3>
                        {(card.desc || (card.bullets && card.bullets[0])) && (
                          <p className="rfdp-info-card__single">{card.desc || card.bullets[0]}</p>
                        )}
                        <div className="rfdp-info-card__divider" />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="rfdp-intro-copy">
                  <div className="rfdp-card-grid">
                    {config.intro.cards.map((card) => (
                      <article className="rfdp-info-card" key={card.title}>
                        <div className="rfdp-info-card__icon"><i className={`bi ${card.icon}`} /></div>
                        <div className="rfdp-info-card__copy">
                          <h3>{card.title}</h3>
                          {(card.desc || (card.bullets && card.bullets[0])) && (
                            <p className="rfdp-info-card__single">{card.desc || card.bullets[0]}</p>
                          )}
                          <div className="rfdp-info-card__divider" />
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
                <div className="rfdp-intro-visual">
                  <img src={config.intro.image} alt={config.intro.imageAlt} className="rfdp-media-frame__image" />
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {config.detail && (
        <section className={`rfdp-section ${detailSectionClass}`}>
          <div className="container">
            <div className={`${isLawFirmPage ? 'lawfirm-detail__heading' : 'rfdp-detail__heading'}`}>
              <span className={detailPillClass}><i className={`bi ${config.detail?.icon || 'bi-balance-scale'}`} />{config.detail.eyebrow}</span>
              <h2 className={detailTitleClass}>{config.detail.title}</h2>
              <p className={detailLeadClass}>{config.detail.lead}</p>
            </div>
            <div className={isLawFirmPage ? 'lawfirm-detail__grid' : 'rfdp-detail__grid'}>
              {config.detail.cards.map((card) => (
                <article className={detailCardClass} key={card.title}>
                  <div className={isLawFirmPage ? 'lawfirm-detail-card__icon' : 'rfdp-detail-card__icon'}><i className={`bi ${card.icon}`} /></div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {config.faq && (
        <section className="rfdp-section rfdp-faq-section">
          <div className="container">
            <div className="rfdp-faq-header">
              <div className="rfdp-faq-eyebrow">
                <i className={`bi ${config.faq.eyebrowIcon}`} />{config.faq.eyebrow}
              </div>
              <h2 className="rfdp-faq-title">{config.faq.title}</h2>
              <p className="rfdp-faq-lead">{config.faq.lead}</p>
            </div>
            <div className="rfdp-faq-items">
              {config.faq.items.map((item, index) => (
                <details key={index} className="rfdp-faq-item">
                  <summary className="rfdp-faq-question">
                    <span>{item.question}</span>
                    <i className="bi bi-chevron-down" />
                  </summary>
                  <div className="rfdp-faq-answer">{item.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {showWorkflowPreview && createPortal(renderWorkflowModal(), document.body)}
      {showLocalBookDemo && createPortal(
        <BookDemoModal
          isOpen={showLocalBookDemo}
          onClose={closeLocalBookDemo}
          initialService={config.id === 'co-working-spaces' ? 'coworking' : 'demo'}
          initialCategory={config.id}
        />,
        document.body
      )}
    </div>
  )
}

export default RemoteFrontDeskCategoryPage
