import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../components/Componetcss/RemoteFrontDeskSections.css";
import { resourceCards } from "../blogContent";
import heroImage from "../assets/HomeAssets/hero.png";
import demoImage from "../assets/HomeAssets/demo.png";
import demoVideo from "../assets/HomeAssets/demovideo.mp4";

import testimonialPortrait from "../assets/JobseekerAssets/Jobpro.png";
import whatweofferImage from "../assets/HomeAssets/whatweoffer.png";
import blog1Image from "../assets/HomeAssets/blog1.png";
import blog2Image from "../assets/HomeAssets/blog2.png";
import cybersecurityCareerImage from "../assets/cybersecurity-career-resources.png";
import gulfCareerResourcesImage from "../assets/gulf-career-resources.png";

const features = [
  {
    icon: "bi-camera-video",
    title: "Live Call Answering",
    desc: "Never miss a visitor or opportunity.",
  },
  {
    icon: "bi-chat-left-text",
    title: "Visitor Engagement",
    desc: "Warm, helpful, and on-brand conversations.",
  },
  {
    icon: "bi-bell",
    title: "Real-time Updates",
    desc: "Instant notifications to your team.",
  },
  {
    icon: "bi-shield-check",
    title: "Secure & Reliable",
    desc: "Your visitors data is always protected.",
  },
];
const steps = [
  {
    number: "01",
    icon: "bi-clipboard2",
    title: "Visitor Arrives",
    desc: "Guest approaches the front desk screen or kiosk at your location.",
  },
  {
    number: "02",
    icon: "bi-clock",
    title: "One-Tap Connect",
    desc: "They tap to connect - a live HD video call starts within seconds.",
  },
  {
    number: "03",
    icon: "bi-people",
    title: "Professional Welcome",
    desc: "A trained remote assistant greets them, verifies identity, and notifies the host.",
  },
  {
    number: "04",
    icon: "bi-geo-alt",
    title: "Seamlessly Directed",
    desc: "Visitor is guided to their destination or waiting area with zero friction.",
  },
];

const compareRows = [
  ["Available 24/7", "check", "x", "check"],
  ["Human interaction", "check", "check", "x"],
  ["Fixed monthly cost", "check", "x", "check"],
  ["Multi-language support", "check", "warn", "warn"],
  ["No hardware/setup cost", "check", "check", "x"],
  ["Scalable to multi-site", "check", "x", "warn"],
  ["Visitor logging & reports", "check", "warn", "check"],
];

const whyChooseCards = [
  {
    number: "01",
    icon: "bi-speedometer2",
    title: "Professional Image",
    desc: "Impress every visitor with a polished, consistent reception experience.",
    accent: "orange",
  },
  {
    number: "02",
    icon: "bi-graph-up",
    title: "Reduce Costs by 60%",
    desc: "Eliminate salary, benefits, and office space costs of an on-site receptionist.",
    accent: "violet",
  },
  {
    number: "03",
    icon: "bi-shield-check",
    title: "Secure & Compliant",
    desc: "Enterprise-grade encrypted video calls with visitor logging.",
    accent: "orange",
  },
  {
    number: "04",
    icon: "bi-globe2",
    title: "Infinitely Scalable",
    desc: "Add locations or shift hours instantly - no new hires needed.",
    accent: "violet",
  },
  {
    number: "05",
    icon: "bi-translate",
    title: "Multi-language Support",
    desc: "Assistants available in multiple languages to serve diverse visitors.",
    accent: "orange",
  },
  {
    number: "06",
    icon: "bi-lightning-charge",
    title: "Quick Setup",
    desc: "Go live in under 48 hours with training and onboarding handled for you.",
    accent: "violet",
  },
];

const categoryCards = [
  {
    title: "Law Firms",
    desc: "Confidential legal intake, attorney notifications, and polished client reception.",
    to: "/remote-front-desk/law-firms",
    icon: "bi-briefcase",
  },
  {
    title: "Medical Clinics",
    desc: "Patient-focused check-in, reminders, and privacy-aware care desk support.",
    to: "/remote-front-desk/medical-clinics",
    icon: "bi-heart-pulse",
  },
  {
    title: "Corporate Offices",
    desc: "Professional visitor management, meeting coordination, and delivery handling.",
    to: "/remote-front-desk/corporate-offices",
    icon: "bi-building",
  },
  {
    title: "Government Buildings",
    desc: "Secure public reception with verification, assistance, and citizen-facing workflows.",
    to: "/remote-front-desk/government-buildings",
    icon: "bi-bank",
  },
  {
    title: "Co-working Spaces",
    desc: "Member check-in, guest registration, and community reception support.",
    to: "/remote-front-desk/co-working-spaces",
    icon: "bi-people",
  },
];

const testimonials = [
  {
    quote:
      "Installation was seamless and the support team is always responsive. We saw improvements in visitor satisfaction scores within the first week. Every visitor felt warmly welcomed, and our reception flow became much smoother. The experience made a noticeable difference in how our team operates.",
    name: "David Rodriguez",
    title: "Facilities Director",
    company: "Healthcare clinic",
    image: testimonialPortrait,
  },
  {
    quote:
      "Teamup Remote made our reception smarter and far more efficient. Visitors love the warm greeting and our staff can focus on higher-value work. The onboarding was quick and the service is consistently reliable. It feels like a natural extension of our own team.",
    name: "Maya Kumar",
    title: "Operations Lead",
    company: "Co-working space",
    image: testimonialPortrait,
  },
  {
    quote:
      "The service is reliable and the setup was faster than expected. It feels like we have an extension of our team taking care of every visitor. The communication is clear and professional every time. Our office flow has never been better.",
    name: "Ethan Park",
    title: "Office Manager",
    company: "Technology firm",
    image: testimonialPortrait,
  },
];

const faqItems = [
  {
    question: "How quickly can we go live?",
    answer: "We can launch remote front desk support in under 48 hours once your locations and workflows are confirmed.",
  },
  {
    question: "Can the service handle different visitor types?",
    answer: "Yes. Our team can manage guests, vendors, contractors, and deliveries with tailored check-in experiences.",
  },
  {
    question: "Is the service secure and compliant?",
    answer: "Security is built in with encrypted communication, visitor logging, and privacy controls for every interaction.",
  },
  {
    question: "Can we support multiple languages?",
    answer: "Absolutely. We offer multilingual reception support so visitors feel welcome in the language they prefer.",
  },
];



const RemoteFrontDeskSections = ({ openBookDemo = () => {} }) => {
  const [activeFaqIndex, setActiveFaqIndex] = React.useState(null);
  const [hoverColumn, setHoverColumn] = React.useState(null);
  const [selectedColumn, setSelectedColumn] = React.useState(null);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = React.useState(0);
  const [showDemoVideo, setShowDemoVideo] = React.useState(false);


  const demoSectionRef = React.useRef(null);
  const demoVideoRef = React.useRef(null);
  const [isDemoInView, setIsDemoInView] = React.useState(false);

  const toggleFaq = (index) => {
    setActiveFaqIndex((current) => (current === index ? null : index));
  };

  const isColumnActive = (index) => hoverColumn === index || selectedColumn === index;

  const clearHoverColumn = () => {
    setHoverColumn(null);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonialIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const node = demoSectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDemoInView(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setShowDemoVideo(false);
          if (demoVideoRef.current) {
            demoVideoRef.current.pause();
            demoVideoRef.current.currentTime = 0;
          }
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!showDemoVideo || !isDemoInView) return;
    const video = demoVideoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  }, [showDemoVideo, isDemoInView]);

  const currentTestimonial = testimonials[activeTestimonialIndex];
  const sectionStyle = (index) => ({ "--rfd-section-delay": `${index * 120}ms` });

  return (
    <>
      <section className="rfd-next rfd-next--split rfd-section" style={sectionStyle(0)}>
        <div className="container rfd-next__container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="rfd-eyebrow">
                <i className="bi bi-people" aria-hidden="true" />
                <span>REMOTE. RELIABLE. REMARKABLE.</span>
              </div>
              <h2 className="rfd-next__title">
                <span>Virtual Receptionist Services,</span>
                <span className="accent">Real Human Impact.</span>
              </h2>
              <p className="rfd-next__lead">
                Professional remote receptionists greet visitors, answer enquiries, manage visitor check-ins, and provide
                seamless Remote Front Desk support for your business.
              </p>

              <div className="rfd-feature-grid">
                {features.map((item) => (
                  <article className="rfd-feature-card" key={item.title}>
                    <div className="rfd-feature-card__icon">
                      <i className={`bi ${item.icon}`} aria-hidden="true" />
                    </div>
                    <div className="rfd-feature-card__copy">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>

              <button
                type="button"
                className="rfd-cta"
                onClick={() => openBookDemo()}
              >
                Book a Demo
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </button>
            </div>

            <div className="col-lg-6">
              <div className="rfd-next__visual rfd-next__visual--reception">
                <img
                  src={whatweofferImage}
                  alt="Virtual receptionist providing remote front desk support with live visitor notifications"
                  className="rfd-next__image rfd-next__image--portrait"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rfd-categories rfd-section" style={sectionStyle(1)}>
        <div className="container">
          <div className="rfd-process__header">
            <div className="rfd-eyebrow rfd-eyebrow--center">
              <i className="bi bi-grid-3x3-gap" aria-hidden="true" />
              <span>INDUSTRY SOLUTIONS</span>
              <span className="rfd-eyebrow__dot" />
            </div>
            <h2 className="rfd-process__title">Explore remote front desk solutions by industry</h2>
            <p className="rfd-process__subtitle">
              Pick a category to review workflows and demos tailored for your reception type.
            </p>
          </div>

          <div className="rfd-category-grid">
            {categoryCards.map((card) => (
              <Link key={card.title} to={card.to} className="rfd-category-card">
                <div className="rfd-category-card__icon">
                  <i className={`bi ${card.icon}`} aria-hidden="true" />
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <span className="rfd-category-card__link">
                  View solution <i className="bi bi-arrow-right" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="rfd-process rfd-section" style={sectionStyle(2)}>
        <div className="container">
          <div className="rfd-process__header">
            <div className="rfd-eyebrow rfd-eyebrow--center">
              <i className="bi bi-gear-wide-connected" aria-hidden="true" />
              <span>OUR PROCESS</span>
              <span className="rfd-eyebrow__dot" />
            </div>
            <h2 className="rfd-process__title">How Our Remote Front Desk Service Works</h2>
          </div>

          <div className="rfd-process-grid">
            {steps.map((step) => (
              <article className="rfd-process-card" key={step.number}>
                <div className="rfd-process-card__corner">
                  <span>{step.number}</span>
                </div>
                <div className="rfd-process-card__icon">
                  <i className={`bi ${step.icon}`} aria-hidden="true" />
                </div>
                <div className="rfd-process-card__rule" />
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rfd-demo rfd-section" style={sectionStyle(2)} ref={demoSectionRef}>
        <div className="container">
          <div className="row align-items-center g-4 g-xl-5 rfd-demo__grid rfd-demo__shell">
            <div className="col-lg-5 rfd-demo__copy">
              <div className="rfd-eyebrow">
                <i className="bi bi-camera-video" aria-hidden="true" />
                <span>DEMO VIDEO</span>
              </div>
              <h2 className="rfd-demo__title">
              <span>Watch the Remote Front Desk</span>
              <span>Visitor Journey</span>
              </h2>
              <p className="rfd-demo__lead">
                Watch how our Virtual Receptionist manages visitor check-in, live reception support, verification, and visitor guidance
                from arrival to final handoff.
              </p>
              <button
                type="button"
                className="rfd-cta"
                onClick={() => {
                  if (!isDemoInView) return;
                  setShowDemoVideo(true);
                }}
              >
                Watch Demo
                <i className="bi bi-play-circle" aria-hidden="true" />
              </button>
            </div>

            <div className={`col-lg-7 rfd-demo__visual-col ${showDemoVideo ? "is-video-open" : ""}`}>
              <img
                src={demoImage}
                alt="Remote front desk visitor journey demo with virtual receptionist"
                className="rfd-demo__screen-image"
              />
              <div className="rfd-demo__video-wrap" aria-hidden={!showDemoVideo}>
                <button
                  type="button"
                  className="rfd-demo__video-close"
                  onClick={() => setShowDemoVideo(false)}
                  aria-label="Close demo"
                >
                  <i className="bi bi-x-lg" />
                </button>
                <video
                  ref={demoVideoRef}
                  controlsList="nodownload"
                  disablePictureInPicture
                  onContextMenu={(event) => event.preventDefault()}
                  controls
                  playsInline
                  className="rfd-demo__screen-video"
                >
                  {showDemoVideo && isDemoInView && <source src={demoVideo} type="video/mp4" />}
                  Your browser does not support HTML video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rfd-why rfd-section" style={sectionStyle(3)}>
        <div className="container">
          <div className="rfd-process__header">
            <div className="rfd-eyebrow rfd-eyebrow--center">
              <span className="rfd-eyebrow__star">{String.fromCharCode(10022)}</span>
              <span>WHY CHOOSE US</span>
              <span className="rfd-eyebrow__star">{String.fromCharCode(10022)}</span>
            </div>
            <h2 className="rfd-process__title">
              Why Choose Teamup&apos;s{' '}
              <span className="accent">Remote Front Desk Services?</span>
            </h2>
            <p className="rfd-process__subtitle">
              Smart, secure, and seamless Remote Front Desk Services with professional Virtual Receptionists built for modern businesses.
            </p>
          </div>

          <div className="rfd-why-grid">
            {whyChooseCards.map((card) => (
              <article className={`rfd-why-card rfd-why-card--${card.accent}`} key={card.number}>
                <div className="rfd-why-card__corner">
                  <span>{card.number}</span>
                </div>
                <div className="rfd-why-card__icon">
                  <i className={`bi ${card.icon}`} aria-hidden="true" />
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rfd-compare rfd-section" style={sectionStyle(4)}>
        <div className="container">
          <div className="rfd-process__header">
            <h2 className="rfd-process__title">How Our Remote Front Desk Service Compares</h2>
            <p className="rfd-process__subtitle">
              Discover why businesses choose our Remote Front Desk Services and Virtual Receptionists over traditional reception solutions.
            </p>
          </div>

            <div className="rfd-compare__table-wrap">
            <table className={`rfd-compare__table ${hoverColumn !== null ? 'has-hover' : ''}`} onMouseLeave={clearHoverColumn}>
              <thead>
                <tr>
                  <th
                    className={`is-feature ${hoverColumn === 0 ? "is-active" : ""}`}
                    onMouseEnter={() => setHoverColumn(0)}
                  >
                    <span className="rfd-compare__head-icon">
                      <i className="bi bi-clipboard2" aria-hidden="true" />
                    </span>
                    Features
                  </th>
                  <th
                    className={isColumnActive(1) ? "is-active" : ""}
                    onMouseEnter={() => setHoverColumn(1)}
                    onClick={() => setSelectedColumn(1)}
                  >
                    <i className="bi bi-people" aria-hidden="true" />
                    Teamup Remote
                  </th>
                  <th
                    className={`is-highlight ${isColumnActive(2) ? "is-active" : ""}`}
                    onMouseEnter={() => setHoverColumn(2)}
                    onClick={() => setSelectedColumn(2)}
                  >
                    <i className="bi bi-person-badge" aria-hidden="true" />
                    In-house Receptionist
                  </th>
                  <th
                    className={isColumnActive(3) ? "is-active" : ""}
                    onMouseEnter={() => setHoverColumn(3)}
                    onClick={() => setSelectedColumn(3)}
                  >
                    <i className="bi bi-display" aria-hidden="true" />
                    Automated Kiosk
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(([feature, remote, inhouse, automated]) => (
                  <tr key={feature}>
                    <td
                      className={`is-feature ${hoverColumn === 0 ? "is-active" : ""}`}
                      onMouseEnter={() => setHoverColumn(0)}
                    >
                      {feature}
                    </td>
                    <td
                      className={isColumnActive(1) ? "is-active" : ""}
                      onMouseEnter={() => setHoverColumn(1)}
                      onClick={() => setSelectedColumn(1)}
                    >
                      {renderCompareIcon(remote)}
                    </td>
                    <td
                      className={`is-highlight ${isColumnActive(2) ? "is-active" : ""}`}
                      onMouseEnter={() => setHoverColumn(2)}
                      onClick={() => setSelectedColumn(2)}
                    >
                      {renderCompareIcon(inhouse)}
                    </td>
                    <td
                      className={isColumnActive(3) ? "is-active" : ""}
                      onMouseEnter={() => setHoverColumn(3)}
                      onClick={() => setSelectedColumn(3)}
                    >
                      {renderCompareIcon(automated)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="rfd-testimonial rfd-section" style={sectionStyle(5)}>
        <div className="container">
          <div className="rfd-process__header">
            <div className="rfd-eyebrow rfd-eyebrow--center">
              <i className="bi bi-chat-square-heart" aria-hidden="true" />
              <span>CLIENT LOVE</span>
            </div>
            <h2 className="rfd-process__title">Remote Front Desk Client Testimonials</h2>
            <p className="rfd-process__subtitle">
              See how businesses improve visitor management using our Remote Front Desk Services and Virtual Receptionists.
            </p>
          </div>

          <div className="rfd-testimonial__card">
            <div className="rfd-testimonial__quote-mark">{String.fromCharCode(8220)}</div>
            <p className="rfd-testimonial__quote">{currentTestimonial.quote}</p>
            <div className="rfd-testimonial__dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`rfd-testimonial__dot ${index === activeTestimonialIndex ? "is-active" : ""}`}
                  onClick={() => setActiveTestimonialIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
            <div className="rfd-testimonial__author">
              <img src={currentTestimonial.image} alt={`Client testimonial photo of ${currentTestimonial.name}`} />
              <div>
                <strong>{currentTestimonial.name}</strong>
                <span>{currentTestimonial.title}</span>
                <em>{currentTestimonial.company}</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rfd-faq rfd-section" style={sectionStyle(6)}>
        <div className="container">
          <div className="rfd-process__header">
            <div className="rfd-eyebrow rfd-eyebrow--center">
              <i className="bi bi-question-circle" aria-hidden="true" />
              <span>FAQ</span>
            </div>
            <h2 className="rfd-process__title">Remote Front Desk Frequently Asked Questions</h2>
            <p className="rfd-process__subtitle">
              Quick answers to common questions about our Remote Front Desk Services and Virtual Receptionist support.
            </p>
          </div>

          <div className="rfd-faq__list">
            {faqItems.map((item, index) => {
              const isOpen = activeFaqIndex === index;

              return (
                <div className="rfd-faq__item" key={item.question}>
                  <button
                    type="button"
                    className={`rfd-faq__question ${isOpen ? "rfd-faq__question--open" : ""}`}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="rfd-faq__icon">
                      <i className="bi bi-question-lg" aria-hidden="true" />
                    </span>
                    <span className="rfd-faq__question-text">{item.question}</span>
                    <span className={`rfd-faq__chev ${isOpen ? "rfd-faq__chev--open" : ""}`}>
                      <i className="bi bi-chevron-down" aria-hidden="true" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="rfd-faq__answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rfd-resources rfd-section" style={sectionStyle(7)}>
        <div className="container">
          <div className="rfd-process__header">
            <div className="rfd-eyebrow rfd-eyebrow--center">
              <i className="bi bi-book" aria-hidden="true" />
              <span>RESOURCES</span>
            </div>
            <h2 className="rfd-process__title">Remote Front Desk Blog &amp; Resources</h2>
            <p className="rfd-process__subtitle">
              Practical guides and checklists to help you run a smarter, smoother Remote Front Desk experience.
            </p>
          </div>

          <div className="rfd-resources__grid">
            {resourceCards.map((card, index) => (
              <article className={`rfd-resource-card rfd-resource-card--${card.kind}`} key={card.title}>
                <div className="rfd-resource-card__content">
                  <span className="rfd-resource-card__tag">{card.tag}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  {card.cta && (
                    <Link to={card.link || `/blog/${card.kind}`} className="rfd-resource-card__cta" title={`Read more about ${card.title}`}>
                      {card.cta}
                      <i className="bi bi-arrow-right" aria-hidden="true" />
                    </Link>
                  )}
                </div>
                <div className="rfd-resource-card__image-wrap">
                  <img
                    src={index === 0 ? blog1Image : index === 1 ? blog2Image : card.kind === "gulf-career-resources" ? gulfCareerResourcesImage : card.kind === "cybersecurity-career-resources" ? cybersecurityCareerImage : card.kind === "guide" ? whatweofferImage : heroImage}
                    alt={card.imageAlt}
                    className={`rfd-resource-card__image rfd-resource-card__image--${card.kind}`}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

function renderCompareIcon(value) {
  if (value === "check") {
    return <span className="rfd-compare__badge is-check"><i className="bi bi-check-lg" aria-hidden="true" /></span>;
  }

  if (value === "warn") {
    return <span className="rfd-compare__badge is-warn"><i className="bi bi-exclamation-triangle" aria-hidden="true" /></span>;
  }

  return <span className="rfd-compare__badge is-x"><i className="bi bi-x-lg" aria-hidden="true" /></span>;
}

export default RemoteFrontDeskSections;
