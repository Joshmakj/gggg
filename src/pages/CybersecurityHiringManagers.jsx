import React, { useState } from 'react';
import { ArrowRight, BarChart3, Check, ClipboardCheck, Clock3, Download, LockKeyhole, ShieldCheck, UsersRound } from 'lucide-react';
import SEO from '../components/SEO';
import { isWorkEmail } from '../utils/emailValidation';
import hiringCardImage from '../assets/cybersecurity-hiring-card.png';
import hiringCardOneImage from '../assets/cybersecurity-hiring-card-one.png';
import hiringCardThreeImage from '../assets/cybersecurity-hiring-card-three.png';
import hiringHeroVisual from '../assets/cybersecurity-hiring-hero-visual.png';
import marketIntelligenceImage from '../assets/cybersecurity-market-intelligence.png';
import './CybersecurityHiringManagers.css';

const decisionAssets = [
  { icon: ClipboardCheck, number: '01', title: 'Cybersecurity Recruitment Process', text: 'Build a repeatable cybersecurity recruitment process from role definition to interview and offer, with clear workflows for stakeholders, screening, and decisions.', download: 'Get the Recruitment Process Guide', resource: { href: '/resources/cybersecurity-recruitment-process-guide.pdf', label: 'Download the Recruitment Process Guide' } },
  { icon: BarChart3, number: '02', title: 'Cybersecurity Salary Benchmarks', text: 'Use cybersecurity salary benchmarks, compensation data, role demand, and market intelligence to build stronger hiring budgets and compensation plans.', download: 'Download the Salary Benchmark', resource: { href: '/resources/cybersecurity-salary-benchmark.pdf', label: 'Download the Salary Benchmark' } },
  { icon: ShieldCheck, number: '03', title: 'SOC Analyst Interview Preparation', text: 'Evaluate SOC analyst candidates with technical interview questions, incident scenarios, screening frameworks, and candidate scorecards.', download: 'Get the SOC Interview Question Bank', resource: { href: '/resources/soc-analyst-interview-preparation.pdf', label: 'Download SOC Interview Preparation' } },
  { icon: Clock3, number: '04', title: 'Cybersecurity Hiring Checklist', text: 'Reduce time-to-hire with a practical checklist covering role requirements, sourcing, screening, interviews, references, and offer decisions.', download: 'Get the Hiring Checklist', resource: { href: '/resources/cybersecurity-hiring-handbook.pdf', label: 'Download the Hiring Handbook' } },
  { icon: UsersRound, number: '05', title: 'Cybersecurity Talent Availability Reports', text: 'Understand where cybersecurity talent exists and which skills are difficult to hire. Explore cybersecurity talent availability, skills scarcity, candidate supply, and talent market signals to improve sourcing and workforce planning.', download: 'Explore the Cybersecurity Talent Pool Report', resource: { href: '/resources/cybersecurity-talent-availability-report.pdf', label: 'Download the Talent Availability Report' } },
  { icon: Download, number: '06', title: 'Cybersecurity Hiring Toolkit', text: 'Bring your essential cybersecurity recruitment tools and resources together in one place. Access practical templates, salary benchmarks, interview resources, hiring checklists, talent market reports, and candidate evaluation tools.', download: 'Open the Cybersecurity Hiring Toolkit', resource: { href: '/resources/cybersecurity-hiring-handbook.pdf', label: 'Download the Hiring Toolkit' } },
];

const hiringPriorities = [
  ['Hire cybersecurity talent faster', 'Define role requirements, align hiring managers and stakeholders, and use repeatable cybersecurity recruitment workflows to reduce unnecessary delays and improve time-to-hire.'],
  ['Reduce technical hiring risk', 'Use structured cybersecurity interview questions, technical screening frameworks, candidate scorecards, and evaluation tools to assess technical depth, problem-solving, judgment, and communication more consistently.'],
  ['Make cybersecurity talent market data work for you', 'Understand cybersecurity salary benchmarks, compensation expectations, talent availability, skills scarcity, and candidate demand so you can make stronger hiring and workforce planning decisions.'],
];

const ClientLeadMagnetGroups = [
  { label: '01', title: 'Cybersecurity Hiring Playbooks', reason: 'Hiring managers value proven frameworks and faster decisions.', items: [
    ['The Complete Cybersecurity Hiring Playbook', 'End-to-end hiring guide from role definition to interview and offer'],
    ['How to Hire a SOC Analyst in 7 Days', 'Step-by-step hiring workflow'],
    ['Hiring Cloud Security Engineers: What Most Companies Get Wrong', 'Hiring mistakes checklist'],
    ['Zero Trust and Cloud Security Hiring Blueprint', 'Role, skills, and interview framework'],
  ] },
  { label: '02', title: 'Salary and Market Intelligence', reason: 'Market data helps hiring teams justify budgets internally.', items: [
    ['Cybersecurity Salary Benchmark Report', 'Detailed salary dataset in Excel or PDF'],
    ['Top Paying Roles in Cybersecurity', 'Compensation planning sheet'],
    ['Cybersecurity Talent Availability Report', 'Talent pool heatmap showing where talent exists'],
    ['Cost of Hiring vs Cost of Vacancy in Cybersecurity', 'Hiring ROI calculator'],
  ] },
  { label: '03', title: 'Screening and Interview Tools', reason: 'These assets are directly usable during interviews.', items: [
    ['Technical Screening Questions for Cybersecurity Roles', 'Cybersecurity interview question bank'],
    ['How Non-Technical Managers Can Evaluate Cybersecurity Talent', 'Simplified evaluation sheet'],
    ['SOC Analyst Interview Kit', 'Real-world scenario questions'],
    ['Cybersecurity Candidate Scorecard Template', 'Excel-based evaluation tool'],
  ] },
  { label: '04', title: 'Hiring Acceleration Tools', reason: 'They solve the urgent time-to-hire problem.', items: [
    ['How to Reduce Time-to-Hire in Cybersecurity', 'Hiring acceleration checklist'],
    ['Pre-Vetted Cybersecurity Talent Guide', 'Sample anonymized profiles'],
    ['How to Attract Passive Cybersecurity Candidates', 'Candidate outreach message templates'],
  ] },
  { label: '05', title: 'Thought Leadership', reason: 'Trust-building content positions TeamUp as a specialist partner.', items: [
    ['Why Cybersecurity Hiring Is Broken and How to Fix It', 'Cybersecurity hiring strategy guide'],
    ['The Future of Cybersecurity Hiring', 'Five-year cybersecurity hiring trend report'],
    ['Why Traditional Recruiters Fail in Cybersecurity Hiring', 'Recruitment comparison framework'],
  ] },
];
function CybersecurityHiringManagers() {
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [requestedResource, setRequestedResource] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get('email') || '';
    if (!isWorkEmail(email)) {
      setEmailError('Please use your work email address (for example, you@company.com).');
      return;
    }
    setEmailError('');
    const body = new URLSearchParams();
    body.set('entry.456985082', form.get('name') || '');
    body.set('entry.820833911', email);
    body.set('entry.773721717', form.get('company') || '');
    body.set('entry.1611640400', form.get('hiringNeed') || '');
    await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfE7zK4IX_RHD99FgrhlYPQmj0yhBeRuA2n_78SfYzf3_twXQ/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      body,
    });
    setSubmitted(true);
  };

  const handleResourceRequest = (event, resource) => {
    event.preventDefault();
    setRequestedResource(resource);
    document.getElementById('toolkit')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Cybersecurity Hiring Resources & Tools for Hiring Managers | TeamUp Consultants',
    description: 'Access practical cybersecurity hiring resources, salary benchmarks, interview questions, candidate scorecards, hiring playbooks, and talent market insights for hiring managers and security leaders.',
    url: 'https://teamupconsultants.com/cybersecurity-hiring-managers',
    isPartOf: { '@type': 'WebSite', name: 'TeamUp Consultants', url: 'https://teamupconsultants.com/' },
    about: { '@type': 'Thing', name: 'Cybersecurity recruitment and hiring' },
    publisher: { '@type': 'Organization', name: 'TeamUp Consultants', url: 'https://teamupconsultants.com/' },
  };

  return (
    <div className="security-manager-page">
      <SEO
        title="Cybersecurity Hiring Resources & Tools for Hiring Managers | TeamUp Consultants"
        description="Access practical cybersecurity hiring resources, salary benchmarks, interview questions, candidate scorecards, hiring playbooks, and talent market insights for hiring managers and security leaders."
        keywords="cybersecurity hiring resources, cybersecurity hiring checklist, cybersecurity recruitment process, cybersecurity salary benchmarks, SOC analyst interview preparation, cybersecurity hiring managers, cybersecurity recruitment, cybersecurity hiring tools, cybersecurity candidate scorecard, cybersecurity talent market"
        canonical="https://teamupconsultants.com/cybersecurity-hiring-managers"
        schema={schema}
      />

      <div>
        <section className="sm-hero">
          <div className="sm-hero-grid">
            <div className="sm-hero-copy">
              <p className="sm-eyebrow"><ShieldCheck size={17} /> CYBERSECURITY HIRING MANAGER RESOURCE HUB</p>
              <h1>The Cybersecurity Hiring Manager’s <em>Playbook.</em></h1>
              <p className="sm-tagline">Your strategic toolkit for building a world-class security team, faster.</p>
              <p className="sm-intro">From defining the role to making the offer, get the data-driven resources<br className="sm-intro-break" /> you need to streamline your recruitment process<br className="sm-intro-break" /> and reduce hiring risk.</p>
              <div className="sm-hero-actions">
                <a className="sm-primary-button" href="#toolkit">Get the Cybersecurity Hiring Toolkit <ArrowRight size={18} /></a>
              </div>
            </div>
              <div className="sm-toolkit-art" role="img" aria-label="Cybersecurity hiring toolkit illustration">
              <div className="sm-art-glow" />
              <div className="sm-art-sheet sm-art-sheet-back" />
              <div className="sm-art-sheet sm-art-sheet-front">
                <div className="sm-art-top"><span>TEAMUP</span><span>HIRING PLAYBOOK 01</span></div>
                <div className="sm-art-icon"><ShieldCheck size={46} strokeWidth={1.5} /></div>
                <p>THE PRACTICAL</p>
                <h2>CYBERSECURITY<br /><span>HIRING TOOLKIT</span></h2>
                <div className="sm-art-line" />
                <small>Hire with evidence.<br />Move with clarity.</small>
              </div>
              <div className="sm-art-sticker">READY<br />TO USE</div>
            </div>
          </div>
        </section>

        <section className="sm-value-section">
          <div className="sm-section-heading">
            <p className="sm-section-label"><ShieldCheck size={17} /> BUILT FOR BETTER SECURITY TEAMS</p>
            <h2>Build a stronger cybersecurity team<br />with <span className="sm-heading-accent">smarter hiring.</span></h2>
            <p>Practical cybersecurity hiring resources to help you define roles, evaluate technical talent, benchmark<br className="sm-value-intro-break" /> compensation, and make confident hiring decisions.</p>
            <img className="sm-section-heading-visual" src={hiringHeroVisual} alt="Cybersecurity risk and security team illustration" />
          </div>
            <div className="sm-value-grid">
            {hiringPriorities.map(([title, text], index) => <article className="sm-value-card" key={title}><span><Check size={17} /></span><span className="sm-card-number">0{index + 1}</span>{title === 'Hire cybersecurity talent faster' && <img className="sm-card-visual" src={hiringCardOneImage} alt="Cybersecurity recruitment planning illustration" />}{title === 'Reduce technical hiring risk' && <img className="sm-card-visual" src={hiringCardImage} alt="Cybersecurity technical hiring checklist and evaluation tools" />}{title === 'Make cybersecurity talent market data work for you' && <img className="sm-card-visual" src={hiringCardThreeImage} alt="Cybersecurity talent market analytics illustration" />}<h3>{title}</h3><p>{text}</p><a className="sm-value-action" href="#toolkit">Use this hiring resource <ArrowRight size={15} /></a></article>)}
          </div>
        </section>

        <section className="sm-assets-section" id="assets">
          <div className="sm-assets-inner">
            <div className="sm-assets-intro">
              <div className="sm-section-heading sm-assets-heading">
                <p className="sm-section-label"><ShieldCheck size={17} /> Decision-making assets</p>
                <h2>Hire Smarter with Cybersecurity Market <span className="sm-heading-accent">Intelligence.</span></h2>
                <p className="sm-assets-tagline">Make data-driven hiring decisions using real-time salary benchmarks, skills scarcity<br className="sm-assets-tagline-break" /> data, and talent availability reports.</p>
                <p>Move beyond intuition. Use practical market insights to build stronger compensation plans and secure top talent before your competitors do.</p>
              </div>
              <img className="sm-assets-heading-visual" src={marketIntelligenceImage} alt="Cybersecurity market intelligence illustration" />
            </div>
            <div className="sm-assets-grid">
              {decisionAssets.map(({ icon: assetIcon, number, title, text, download, resource }) => <article className="sm-asset-card" key={title}><div className="sm-asset-icon">{React.createElement(assetIcon, { size: 20 })}</div><span className="sm-asset-number">{number}</span><h3>{title}</h3><p>{text}</p><a href="#toolkit" onClick={(event) => handleResourceRequest(event, resource)}>{download} <ArrowRight size={15} /></a></article>)}
            </div>


          </div>
        </section>

        <section className="sm-market-section">
          <div className="sm-market-card">
            <div><p className="sm-section-label">Cybersecurity talent market intelligence</p><h2>Know the cybersecurity talent market. Hire with confidence.</h2><p>Use cybersecurity salary benchmarks, skills-scarcity data, talent availability insights, and market trends to make smarter hiring and workforce planning decisions.</p><a className="sm-light-button" href="#toolkit">Download the Cybersecurity Market Intelligence Report <ArrowRight size={18} /></a></div>
            <div className="sm-market-stats"><div><strong>01</strong><span>Cybersecurity role and skills benchmarks</span></div><div><strong>02</strong><span>Cybersecurity compensation planning</span></div><div><strong>03</strong><span>Cybersecurity talent availability signals</span></div></div>
          </div>
        </section>

        <section className="sm-toolkit-section" id="toolkit">
          <div className="sm-toolkit-card">
            <div className="sm-toolkit-copy"><p className="sm-section-label">Get the cybersecurity hiring resources</p><h2>Get the tools you need to hire better cybersecurity talent.</h2><p>Tell us what you are hiring for and get practical cybersecurity hiring resources tailored to your needs, including recruitment playbooks and salary benchmarks to interview tools, talent market insights, and hiring checklists.</p><small><LockKeyhole size={14} /> Practical resources for cybersecurity hiring managers, recruiters, and security leaders.</small></div>
            {submitted ? <div className="sm-success"><span><Check size={22} /></span><h3>Thanks, we’ll be in touch.</h3><p>We’ll send the most relevant cybersecurity hiring resource for your request.</p><a className="sm-value-action" href={(requestedResource || decisionAssets[0].resource).href} download>{(requestedResource || decisionAssets[0].resource).label} <ArrowRight size={15} /></a></div> : <form className="sm-form" onSubmit={handleSubmit}><label htmlFor="smName">Your name<input id="smName" name="name" placeholder="Your name" required /></label><label htmlFor="smEmail">Work email<input id="smEmail" name="email" type="email" placeholder="you@company.com" onChange={() => setEmailError('')} aria-invalid={Boolean(emailError)} required /></label>{emailError && <p className="sm-form-error" role="alert">{emailError}</p>}<label htmlFor="smCompany">Company<input id="smCompany" name="company" placeholder="Company name" /></label><label htmlFor="smHiringNeed">What are you hiring for?<select id="smHiringNeed" name="hiringNeed" defaultValue="" required><option value="" disabled>Select a hiring priority</option><option>SOC Analyst</option><option>Cloud Security Engineer</option><option>Security Engineer</option><option>GRC Professional</option><option>Cybersecurity Manager</option><option>Other Cybersecurity Role</option></select></label><button type="submit">Get My Cybersecurity Hiring Toolkit <ArrowRight size={18} /></button><p className="sm-form-note">No generic newsletters. Just practical cybersecurity hiring resources.</p></form>}
          </div>
        </section>
        <section className="sm-crosslink"><p>Building your own cybersecurity career?</p><a href="/cybersecurity">Explore the job-seeker career resource hub <ArrowRight size={16} /></a></section>
      </div>
    </div>
  );
}

export default CybersecurityHiringManagers;
