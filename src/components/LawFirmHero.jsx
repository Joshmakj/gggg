import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../components/Componetcss/HeroFrontDesk.css";
import "../components/Componetcss/RemoteFrontDeskCategoryPage.css";
import heroImage from "../assets/HomeAssets/hero.png";
import whatweofferImage from "../assets/HomeAssets/whatweoffer.png";

const heroCards = [
  {
    title: "Client intake",
    description: "Collect matter details, urgency, and callback information with care.",
  },
  {
    title: "Consult scheduling",
    description: "Book consultations, hearings, and follow-ups with clarity.",
  },
  {
    title: "Attorney alerts",
    description: "Route urgent matters to the right attorney instantly.",
  },
  {
    title: "Confidential handling",
    description: "Respect client privacy with secure, professional intake.",
  },
];

const workflowSteps = [
  {
    title: "Client reaches out",
    description: "A caller or visitor is welcomed immediately and handled with care.",
  },
  {
    title: "Intake is captured",
    description: "Details are collected clearly and routed to the right team member.",
  },
  {
    title: "Your team stays focused",
    description: "Attorneys and staff receive the right updates without juggling the front desk.",
  },
];

const BenefitCards = [
  {
    icon: "bi-shield-lock",
    title: "Confidential case handling",
    desc: "Secure intake scripts and private message routing keep client information protected.",
  },
  {
    icon: "bi-calendar2-check",
    title: "Fewer missed consults",
    desc: "Appointment-ready follow-up and reminders reduce scheduling gaps.",
  },
  {
    icon: "bi-person-lines-fill",
    title: "Smarter attorney handoff",
    desc: "Complete context is delivered to the right lawyer so the matter moves forward smoothly.",
  },
  {
    icon: "bi-journal-text",
    title: "Compliant intake logs",
    desc: "Validated notes and call records make audit-ready reception easy.",
  },
];

const introCards = [
  {
    icon: "bi-stars",
    title: "High-touch service",
    desc: "Friendly reception scripts that still feel personal and human.",
  },
  {
    icon: "bi-layout-text-window",
    title: "Structured workflows",
    desc: "Each call and arrival follows a clear, repeatable process.",
  },
  {
    icon: "bi-bell",
    title: "Instant routing",
    desc: "Calls and messages are routed to the right person immediately.",
  },
  {
    icon: "bi-calendar2-check",
    title: "Smart scheduling",
    desc: "We manage calendars, book appointments, and prevent conflicts.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Operational clarity",
    desc: "Detailed logs and call notes keep your team aligned and informed.",
  },
  {
    icon: "bi-shield-lock",
    title: "Confidential & secure",
    desc: "We protect client information with strict privacy protocols.",
  },
];

const openContactForm = () => {
  window.dispatchEvent(new Event("open-contact-form"));
};

export default function LawFirmHero() {
  const [showWorkflowPopup, setShowWorkflowPopup] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showWorkflowPopup ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showWorkflowPopup]);

  const openWorkflowPreview = (event) => {
    event?.preventDefault()
    event?.stopPropagation()
    setShowWorkflowPopup(true);
  };

  const closeWorkflowPreview = () => {
    setShowWorkflowPopup(false);
  };

  const renderWorkflowModal = () => (
    <div className="rfd-modal" role="dialog" aria-modal="true" aria-label="Legal workflow preview">
      <div className="rfd-modal__backdrop" onClick={closeWorkflowPreview} aria-hidden="true" />
      <div className="rfd-modal__dialog rfd-modal__dialog--large">
        <button type="button" className="rfd-modal__close" onClick={closeWorkflowPreview} aria-label="Close workflow preview">
          <i className="bi bi-x-lg" aria-hidden="true" />
        </button>
        <div className="rfd-modal__body">
          <div className="rfd-modal__eyebrow">Legal workflow</div>
          <h2 className="rfd-modal__title">Explore the legal intake workflow</h2>
          <p className="rfd-modal__copy">This popup shows how your reception flow captures client details, routes urgency, and keeps your team focused on legal work.</p>
          <div className="lawfirm-steps">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="lawfirm-step">
                <span>{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button type="button" className="rfd-modal__submit rfd-modal__submit--wide" onClick={closeWorkflowPreview}>
            Close preview
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <section className="rfd-hero lawfirm-hero">
        <div className="rfd-hero__inner container">
          <div className="row align-items-center g-4 g-xl-5">
            <div className="col-lg-5 col-xl-6">
              <div className="rfd-badge">
                <span className="rfd-badge__icon" aria-hidden="true">
                  <i className="bi bi-headset" />
                </span>
                <span>24/7 LEGAL RECEPTION</span>
              </div>

              <h1 className="rfd-title rfd-title--main" aria-label="Legal reception support for law firms">
                <span>Legal reception</span>
                <span>support for law firms</span>
              </h1>

              <h2 className="rfd-title rfd-title--sub">
                <span>Trusted intake,</span>
                <span className="rfd-title__accent">scheduling & privacy</span>
              </h2>

              <p className="rfd-copy">
                Give every caller and visitor a polished, secure experience with a receptionist team trained to support legal practices with professionalism and care.
              </p>

              <div className="rfd-hero__cards">
                {heroCards.map((card) => (
                  <div className="rfd-hero-card" key={card.title}>
                    <h3>{card.title}</h3>
                  </div>
                ))}
              </div>

              <div className="rfd-actions">
                <button type="button" className="rfd-btn rfd-btn--primary" onClick={openContactForm}>
                  Hire a Receptionist
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </button>
                <button type="button" className="rfd-btn rfd-btn--secondary" onClick={openContactForm}>
                  Schedule a Demo
                </button>
              </div>
            </div>

            <div className="col-lg-7 col-xl-6 d-flex justify-content-lg-end">
              <div className="rfd-visual">
                <div className="rfd-live-card">
                  <div className="rfd-live-card__status">
                    <span className="rfd-live-card__dot" />
                    LIVE
                  </div>
                  <div className="rfd-live-card__text">Connected Legal Receptionist</div>
                  <div className="rfd-live-card__avatars">
                    <span>AM</span>
                    <span>JD</span>
                    <span>SK</span>
                    <span className="rfd-live-card__extra">+10</span>
                  </div>
                </div>

                <img
                  src={heroImage}
                  alt="Professional remote receptionist support for a law firm"
                  className="rfd-visual__image"
                />

                <div className="rfd-metrics-card">
                  <div className="rfd-metric">
                    <span className="rfd-metric__icon">
                      <i className="bi bi-people" aria-hidden="true" />
                    </span>
                    <div>
                      <strong>500+</strong>
                      <span>Law Firms Served</span>
                    </div>
                  </div>
                  <div className="rfd-metric">
                    <span className="rfd-metric__icon">
                      <i className="bi bi-clock" aria-hidden="true" />
                    </span>
                    <div>
                      <strong>&lt; 30 sec</strong>
                      <span>Avg. Response Time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rfdp-section">
        <div className="container">
          <div className="rfdp-section__heading">
            <span className="rfdp-section__eyebrow"><i className="bi bi-people" />LEGAL RECEPTION</span>
            <h2>
              <span>A premium legal front desk built for</span>
              <span className="is-accent">client trust and responsiveness</span>
            </h2>
            <p>
              Your front desk should feel calm, discreet, and competent. We help law firms turn every call into a better client experience with trained intake and responsive scheduling.
            </p>
          </div>

          <div className="rfdp-intro-grid">
            <div className="rfdp-intro-copy">
              <div className="rfdp-card-grid">
                {introCards.map((card) => (
                  <article className="rfdp-info-card" key={card.title}>
                    <div className="rfdp-info-card__icon"><i className={`bi ${card.icon}`} aria-hidden="true" /></div>
                    <div>
                      <h3>{card.title}</h3>
                      <p>{card.desc}</p>
                    </div>
                  </article>
                ))}
              </div>

              <button type="button" className="rfdp-link-btn" onClick={(event) => openWorkflowPreview(event)}>
                Explore the legal workflow
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </button>
            </div>

            <div className="rfdp-intro-visual">
              <div className="rfdp-media-frame">
                <img src={whatweofferImage} alt="Legal intake workflow visual" className="rfdp-media-frame__image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lawfirm-workflow">
        <div className="container">
          <div className="lawfirm-workflow__card">
            <div className="lawfirm-workflow__content">
              <div className="lawfirm-pill">
                <i className="bi bi-diagram-3" aria-hidden="true" />
                <span>How it works</span>
              </div>
              <h2>A simple workflow that keeps legal intake organized and professional.</h2>
              <p>From first contact to follow-up, the experience stays clear, secure, and dependable.</p>
              <div className="lawfirm-steps">
                {workflowSteps.map((step, index) => (
                  <div key={step.title} className="lawfirm-step">
                    <span>{index + 1}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lawfirm-cta-card">
              <div>
                <h3>Give your firm a stronger first impression.</h3>
                <p>Stay reachable, polished, and prepared for every client conversation.</p>
              </div>
              <button type="button" className="rfd-btn rfd-btn--primary" onClick={openContactForm}>
                Schedule a Demo
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {showWorkflowPopup && createPortal(renderWorkflowModal(), document.body)}
    </>
  );
}
