import React, { useState } from 'react';
import { ArrowRight, Check, LockKeyhole, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import { isPersonalEmail } from '../utils/emailValidation';
import cybersecurityCareerMap from '../assets/HomeAssets/cybersecurity-career-map-final.png';
import cybersecuritySkillsMap from '../assets/HomeAssets/cybersecurity-skills-map.png';
import cybersecurityJobSearchMap from '../assets/HomeAssets/cybersecurity-job-search-map.png';
import resourceHubIllustration from '../assets/HomeAssets/cybersecurity-resource-hub-illustration.png';
import resourceCardIcon01 from '../assets/HomeAssets/resource-card-icon-01.png';
import resourceCardIcon02 from '../assets/HomeAssets/resource-card-icon-02.png';
import resourceCardIcon03 from '../assets/HomeAssets/resource-card-icon-03.png';
import resourceCardIcon04 from '../assets/HomeAssets/resource-card-icon-04.png';
import './CybersecurityLeadMagnet.css';
import './CybersecurityLeadMagnetTheme.css';

const guideItems = [
  {
    title: 'A practical roadmap to the right cybersecurity role',
    description: 'Explore clear role paths, key responsibilities, and growth opportunities to choose your next move with confidence.',
    icon: resourceCardIcon01,
  },
  {
    title: 'Resume and LinkedIn positioning resources',
    description: 'Use proven templates, real examples, and best practices to showcase your cybersecurity skills and experience.',
    icon: resourceCardIcon02,
  },
  {
    title: 'Interview questions, frameworks and preparation prompts',
    description: 'Prepare with common technical questions, structured frameworks, and practical prompts for cybersecurity interviews.',
    icon: resourceCardIcon03,
  },
  {
    title: 'Skills, certification and career-planning resources',
    description: 'Build a focused development plan with skill maps, certification guidance, and career resources for your next role.',
    icon: resourceCardIcon04,
  },
];

const careerSections = [
  ['01', 'Cybersecurity Career Roadmap', 'Choose a clear direction and understand the steps from your current experience to your next cybersecurity role.', ['Role pathways and specialisations', 'IT-to-cybersecurity transition plan', '90-day career action plan']],
  ['02', 'Cybersecurity Skills Checklist', 'Identify the capabilities, tools, and evidence employers look for across security roles.', ['Core security skills checklist', 'Role-based capability gaps', 'Certification and project guidance']],
  ['03', 'SOC Analyst Interview Preparation', 'Prepare for technical, scenario-based, and behavioural questions used in SOC analyst interviews.', ['SOC analyst interview questions', 'Incident-response answer frameworks', 'Practical interview preparation']],
  ['04', 'Cybersecurity Resume & Job Search', 'Position your experience so recruiters and hiring teams can quickly understand your security value.', ['ATS-friendly resume resources', 'Security-focused achievement examples', 'LinkedIn and recruiter outreach templates']],
  ['05', 'Cybersecurity Salary Benchmarks', 'Build realistic expectations with salary, role-demand, and market information for cybersecurity careers.', ['Cybersecurity salary benchmarks', 'Country-wise salary insights', 'Role and market comparisons']],
  ['06', 'Cybersecurity Recruitment Process', 'Understand how cybersecurity employers define roles, assess candidates, and make hiring decisions.', ['Hiring-demand insights', 'Skills employers evaluate', 'Context for your application strategy']],
];

const securityFocusTabs = [
  {
    label: 'Career paths',
    eyebrow: 'A smarter way to get job-ready',
    title: 'Build a cybersecurity job search that moves you forward.',
    description: 'Know what to focus on, how to position your experience, and what to prepare before you apply.',
    areas: [
      ['Career positioning', 'Turn your experience into clear cybersecurity evidence recruiters can understand.'],
      ['Targeted applications', 'Focus on roles that match your strengths, then tailor each application with relevance.'],
      ['Recruiter conversations', 'Tell a clear career story and explain your value confidently.'],
      ['Interview confidence', 'Use structured frameworks to prepare for cybersecurity interviews with confidence.'],
    ],
  },
  {
    label: 'Skills',
    eyebrow: 'Skills that create momentum',
    title: 'Turn your existing strengths into security-ready evidence.',
    description: 'Focus on the skills and proof that support the cybersecurity role you want next.',
    areas: [
      ['Core capabilities', 'Prioritise the security, cloud, risk, and communication skills your target role requires.'],
      ['Practical projects', 'Create projects that show how you investigate, protect systems, and improve security controls.'],
      ['Certifications', 'Choose recognised certifications and learning priorities that support your next security role.'],
      ['Proof of impact', 'Show measurable security outcomes through portfolios, case studies, and interview examples.'],
    ],
  },
  {
    label: 'Job search',
    eyebrow: 'A smarter way to get noticed',
    title: 'Show employers exactly why you are ready for your next role.',
    description: 'Position your experience clearly and prepare for every stage of the job search.',
    areas: [
      ['Resume positioning', 'Translate your experience into clear, security-focused achievements recruiters understand quickly.'],
      ['Targeted applications', 'Stop applying blindly. Focus on roles that match your background, strengths, and career goals, then tailor each application.'],
      ['Recruiter conversations', 'Tell a stronger career story with a clear explanation of your experience, transferable skills, career direction, and value.'],
      ['Interview confidence', 'Prepare for technical, scenario-based, and behavioural questions with structured cybersecurity interview frameworks.'],
    ],
  },
];

const focusResourceLinks = {
  'Career positioning': { href: '/resources/cybersecurity-career-roadmap.pdf', label: 'View career roadmap' },
  'Recruiter conversations': { href: '/resources/recruiter-message-pack.pptx', label: 'Get recruiter message pack' },
  'Interview confidence': { href: '/resources/soc-analyst-interview-preparation.pdf', label: 'Prepare for interviews' },
  'Core capabilities': { href: '/resources/cybersecurity-skills-checklist.pdf', label: 'View skills checklist' },
  'Practical projects': { href: '/resources/cybersecurity-career-roadmap.pdf', label: 'Plan your projects' },
  'Certifications': { href: '/resources/cybersecurity-skills-checklist.pdf', label: 'Review skills guide' },
  'Proof of impact': { href: '/resources/cybersecurity-resume-linkedin-guide.pdf', label: 'Show your impact' },
  'Resume positioning': { href: '/resources/cybersecurity-resume-linkedin-guide.pdf', label: 'Improve your resume' },
  'Targeted applications': { href: '/resources/cybersecurity-resume-linkedin-guide.pdf', label: 'Improve your applications' },
};

const careerResourceLinks = {
  'Cybersecurity Career Roadmap': { href: '/resources/cybersecurity-career-roadmap.pdf', label: 'Download the Career Roadmap' },
  'Cybersecurity Skills Checklist': { href: '/resources/cybersecurity-skills-checklist.pdf', label: 'Download the Skills Checklist' },
  'SOC Analyst Interview Preparation': { href: '/resources/soc-analyst-interview-preparation.pdf', label: 'Download Interview Preparation' },
  'Cybersecurity Resume & Job Search': { href: '/resources/cybersecurity-resume-linkedin-guide.pdf', label: 'Download the Resume & LinkedIn Guide' },
  'Cybersecurity Salary Benchmarks': { href: '/resources/cybersecurity-salary-benchmark.pdf', label: 'Download the Salary Benchmark' },
  'Cybersecurity Recruitment Process': { href: '/resources/cybersecurity-recruitment-process-guide.pdf', label: 'Download the Recruitment Process Guide' },
};

function CybersecurityLeadMagnet() {
  const [submitted, setSubmitted] = useState(false);
  const [activeFocusTab, setActiveFocusTab] = useState(0);
  const [requestedResource, setRequestedResource] = useState(null);
  const [emailError, setEmailError] = useState('');

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://teamupconsultants.com/cybersecurity#webpage',
        name: 'Cybersecurity Career Resources and Job Search Guide | TeamUp Consultants',
        description: 'Practical cybersecurity career resources for professionals moving into cybersecurity, building security skills, improving applications, and preparing for interviews.',
        url: 'https://teamupconsultants.com/cybersecurity',
        inLanguage: 'en-US',
        dateModified: '2026-08-30',
        isPartOf: { '@id': 'https://teamupconsultants.com/#website' },
        about: { '@type': 'Thing', name: 'Cybersecurity careers' },
        publisher: { '@id': 'https://teamupconsultants.com/#organization' },
        breadcrumb: { '@id': 'https://teamupconsultants.com/cybersecurity#breadcrumb' },
        mainEntity: { '@id': 'https://teamupconsultants.com/cybersecurity#resources' },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://teamupconsultants.com/#website',
        name: 'TeamUp Consultants',
        url: 'https://teamupconsultants.com/',
        publisher: { '@id': 'https://teamupconsultants.com/#organization' },
      },
      {
        '@type': 'Organization',
        '@id': 'https://teamupconsultants.com/#organization',
        name: 'TeamUp Consultants',
        url: 'https://teamupconsultants.com/',
        logo: 'https://teamupconsultants.com/TeamUp_Logo.png',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://teamupconsultants.com/cybersecurity#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://teamupconsultants.com/' },
          { '@type': 'ListItem', position: 2, name: 'Cybersecurity Career Resources', item: 'https://teamupconsultants.com/cybersecurity' },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': 'https://teamupconsultants.com/cybersecurity#resources',
        name: 'Cybersecurity career resources',
        numberOfItems: careerSections.length,
        itemListElement: careerSections.map(([, title], index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: title,
          url: 'https://teamupconsultants.com/cybersecurity#download',
        })),
      },
    ],
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get('email') || '';
    if (!isPersonalEmail(email)) {
      setEmailError('Please use a personal email address such as Gmail, Yahoo, Outlook, or iCloud.');
      return;
    }
    setEmailError('');
    const body = new URLSearchParams();
    body.set('entry.1984265692', form.get('name') || '');
    body.set('entry.1101800717', email);
    body.set('entry.1432410520', form.get('role') || '');
    body.set('entry.526571006', form.get('experience') || '');
    body.set('entry.942473250', form.get('careerGoal') || '');
    await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdML14c71dOIRzJp3ARXKerH1IqyX6QQv70VdeQduJAqi6_pQ/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      body,
    });
    setSubmitted(true);
  };

  const handleResourceRequest = (event, resource) => {
    event.preventDefault();
    setRequestedResource(resource);
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="security-page">
      <SEO
        title="Cybersecurity Career Resources and Job Search Guide | TeamUp Consultants"
        description="Practical cybersecurity career resources for professionals moving into cybersecurity, building security skills, improving applications, and preparing for interviews."
        keywords="cybersecurity career resources, cybersecurity career roadmap, cybersecurity skills checklist, SOC analyst interview preparation, cybersecurity resume, cybersecurity salary benchmarks, cybersecurity recruitment process"
        canonical="https://teamupconsultants.com/cybersecurity"
        imageAlt="Cybersecurity career playbook from TeamUp Consultants"
        dateModified="2026-08-30"
        schema={schema}
      />

      <main>
        <section className="security-hero">
          <div className="security-hero-grid">
            <div className="security-copy">
              <p className="security-eyebrow"><ShieldCheck size={17} /> CYBERSECURITY CAREER RESOURCE HUB</p>
              <h1>Build Your<br /><span className="hero-career-line">Cybersecurity Career</span><br /><em>With a Clearer Plan.</em></h1>
              <p className="security-intro">
                A practical resource hub for professionals entering cybersecurity, transitioning from IT, or preparing for their next role. Get access to career roadmaps, job-search templates, interview resources, skills guides and more in one place.
              </p>
              <div className="security-hero-actions"><a className="security-hero-cta" href="#download">Unlock the free resources <ArrowRight size={18} /></a><a className="security-hero-cta security-hero-cta--secondary" href="#download">Download the Career Roadmap <ArrowRight size={18} /></a></div>
            </div>

            <div className="guide-art" aria-label="Cybersecurity playbook illustration" style={{ marginTop: '-26px' }}>
              <div className="guide-glow" />
              <div className="guide-card guide-card-back" />
              <div className="guide-card guide-card-front">
                <div className="guide-card-top"><span>TEAMUP</span><span>PLAYBOOK 01</span></div>
                <div className="guide-shield"><ShieldCheck size={49} strokeWidth={1.5} /></div>
                <p className="guide-card-kicker">THE PRACTICAL</p>
                <h2>CYBERSECURITY<br /><span>PLAYBOOK</span></h2>
                <div className="guide-card-line" />
                <p className="guide-card-footer">Turn experience<br />into opportunity.</p>
              </div>
              <div className="guide-sticker"><Check size={15} /> READY TO USE</div>
            </div>
          </div>
        </section>

        <section className="security-focus" aria-labelledby="security-focus-title">
          <nav className="security-focus-tabs" aria-label="Cybersecurity guide sections">
            {securityFocusTabs.map((tab, index) => (
              <button
                className={activeFocusTab === index ? 'is-active' : ''}
                key={tab.label}
                onClick={() => setActiveFocusTab(index)}
                type="button"
              >{tab.label}</button>
            ))}
          </nav>
          <div className="security-focus-grid">
            <div className="security-focus-copy">
              <p className="section-label">{securityFocusTabs[activeFocusTab].eyebrow}</p>
              <h2 id="security-focus-title">{securityFocusTabs[activeFocusTab].title.split(/(forward\.|security-ready evidence\.|next role\.)/g).map((part, index) => /^(forward\.|security-ready evidence\.|next role\.)$/.test(part) ? <span className="security-focus-title-accent" key={`${part}-${index}`}>{part}</span> : <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>)}</h2>
              <p className="section-copy">{securityFocusTabs[activeFocusTab].description}</p>
              <div className="security-focus-cards">
                {securityFocusTabs[activeFocusTab].areas.map(([title, description]) => {
                  const resource = focusResourceLinks[title] || { href: '#download', label: 'Explore this resource' };
                  return (
                  <article className="security-focus-card" key={title}>
                    <span className="security-focus-card-index">0{securityFocusTabs[activeFocusTab].areas.findIndex((area) => area[0] === title) + 1}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a
                      className="security-focus-card-action"
                      href="#download"
                      onClick={(event) => handleResourceRequest(event, resource)}
                    >
                      {resource.label} <ArrowRight size={15} />
                    </a>
                  </article>
                  );
                })}
              </div>
            </div>
            <div className="security-focus-visual">
              <div className="security-focus-visual-heading">
                <h3>{activeFocusTab === 0 ? <>FIND YOUR <span>DIRECTION</span></> : activeFocusTab === 1 ? <>BUILD YOUR SECURITY<br /><span>SKILL SET</span></> : <>POSITION YOURSELF<br /><span>FOR THE RIGHT ROLE</span></>}</h3>
              <p>A practical four-step path from experience to your next cybersecurity role.</p>
              </div>
              <img src={activeFocusTab === 1 ? cybersecuritySkillsMap : activeFocusTab === 2 ? cybersecurityJobSearchMap : cybersecurityCareerMap} alt={activeFocusTab === 1 ? "Cybersecurity skills development map" : activeFocusTab === 2 ? "Cybersecurity job search and career positioning map" : "Cybersecurity career map showing four career development stages"} />
            </div>
          </div>
        </section>

        <section className="security-content">
          <div className="security-content-grid">
            <div>
              <p className="section-label security-content-label"><span aria-hidden="true">✦</span> Inside the resource hub</p>
              <h2>Turn your experience into your next <span className="security-content-accent">opportunity.</span></h2>
              <p className="section-copy">Follow a focused path from choosing the right role to showing employers why you’re ready for it.</p>
<img className="security-content-illustration" src={resourceHubIllustration} alt="Cybersecurity career planning roadmap and resource guide" />
            </div>
            <div className="guide-list">
              {guideItems.map((item) => (
                <article className="guide-list-card" key={item.title}>
                  <span className="guide-list-icon"><img src={item.icon} alt="" /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="security-pathways">
          <div className="security-pathways-inner">
            <div className="security-pathways-heading">
              <p className="section-label">What’s inside</p>
              <h2>Everything you need to plan,<br /><span className="pathways-heading-accent">prepare, and move into cybersecurity.</span></h2>
              <p>Explore practical guides, checklists, templates, interview resources, and career tools designed to help you take the next step with more clarity and confidence.</p>
            </div>
            <div className="security-pathways-grid">
              {careerSections.map(([number, title, description, items, action]) => {
                const resource = careerResourceLinks[title];
                return (
                <article className="security-pathway-card" key={title}>
                  <span className="security-pathway-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul>{items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
                  <a className="security-pathway-action" href="#download" onClick={(event) => handleResourceRequest(event, resource)}>{action || resource.label} <ArrowRight size={15} /></a>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="download-section" id="download">
          <div className="download-card">
            <div className="download-card-copy">
              <p className="section-label">Get your free cybersecurity career resources</p>
              <h2>Get the practical resources to make your next cybersecurity move <span className="download-heading-accent">with confidence.</span></h2>
              <p>Tell us where you are in your career, and we'll help you discover relevant cybersecurity guides, templates, checklists, and interview resources for your next step.</p>
              <small><LockKeyhole size={14} /> Free cybersecurity career resources, delivered to your inbox.</small>
            </div>
            {submitted ? (
              <div className="success-message" role="status">
                <span className="success-icon"><Check size={24} /></span>
                <h3>Your resources are on their way.</h3>
                <p>We’ll share the cybersecurity resources most relevant to your next move.</p>
                <a
                  className="security-pathway-action"
                  href={(requestedResource || focusResourceLinks['Career positioning']).href}
                  download
                >
                  {(requestedResource || focusResourceLinks['Career positioning']).label} <ArrowRight size={15} />
                </a>
              </div>
            ) : (
              <form className="download-form" onSubmit={handleSubmit}>
                <label htmlFor="name">First name<input id="name" name="name" type="text" placeholder="Alex" required /></label>
                <label htmlFor="email">Personal email address<input id="email" name="email" type="email" placeholder="alex@gmail.com" onChange={() => setEmailError('')} aria-invalid={Boolean(emailError)} required /></label>
                {emailError && <p className="form-error" role="alert">{emailError}</p>}
                <label htmlFor="role">Target cybersecurity role<input id="role" name="role" type="text" placeholder="e.g. SOC Analyst" /></label>
                <label htmlFor="experience">Experience level<select id="experience" name="experience" defaultValue=""><option value="">Select your experience level</option><option>Beginner / Entry level</option><option>1-3 years</option><option>3-5 years</option><option>5+ years</option></select></label>
                <label htmlFor="careerGoal">Career focus<select id="careerGoal" name="careerGoal" defaultValue="" required><option value="" disabled>Select your current focus</option><option>Starting a cybersecurity career</option><option>Transitioning into cybersecurity</option><option>Finding a new cybersecurity role</option><option>Improving my resume / LinkedIn</option><option>Preparing for interviews</option><option>Developing cybersecurity skills</option></select></label>
                <button type="submit">Get My Free Resources <ArrowRight size={18} /></button>
                <p className="form-note">Free cybersecurity career resources, delivered to your inbox.</p>
              </form>
            )}
          </div>
        </section>
      </main>

    </div>
  );
}

export default CybersecurityLeadMagnet;
