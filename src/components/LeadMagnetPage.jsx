import React, { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Componetcss/LeadMagnet.css'
import heroImage from '../assets/lead-magnet-hero.png'
import recruiterHeroImage from '../assets/recruiter-hero.png'
const GOOGLE_LEAD_FORMS = {
  jobSeeker: {
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSd8CsAnHKpyDh_jdBVCiX0inMJn-BBADhow0r6WQZKqrfSHYA/formResponse',
    fields: { name: 'entry.172759039', email: 'entry.1143018234', jobStatus: 'entry.1549327727', resource: 'entry.1382410882' }
  },
  recruiter: {
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSeuAmFSoZqrUhpISd7RWR3pFbgJVNjs1Tj_4iQuZL_4mEwcsg/formResponse',
    fields: { name: 'entry.845487554', email: 'entry.1913828839', company: 'entry.200298431', hiringNeed: 'entry.733581759', resource: 'entry.1952868689' }
  },
  cybersecurity: {
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSd8CsAnHKpyDh_jdBVCiX0inMJn-BBADhow0r6WQZKqrfSHYA/formResponse',
    fields: { name: 'entry.172759039', email: 'entry.1143018234', jobStatus: 'entry.1549327727', resource: 'entry.1382410882' }
  }
}


const hubs = {
  jobSeeker: {
    title: 'Build Your Career With Clarity', titleAccent: 'and Confidence.',
    intro: 'Explore practical free career resources for job seekers, including job-search guidance, recruiter messages, interview preparation and application tools.',
    eyebrow: 'FREE CAREER RESOURCES', button: 'Explore Free Resources', image: heroImage,
    audience: 'job seekers', navOther: 'Recruiters', resourceLabel: 'free career resource',
    categories: ['ALL RESOURCES', 'JOB SEARCH', 'RECRUITER OUTREACH', 'INTERVIEW PREPARATION', 'APPLICATION ORGANISATION'],
    resources: [
      { id: 'career-guide', badge: 'MOST POPULAR', category: 'JOB SEARCH', title: "The Job Seeker's Career Starter Guide", desc: 'A practical guide to organising your job search, finding opportunities, approaching recruiters and preparing for your next career move.', format: 'FREE PDF GUIDE', icon: 'bi-journal-richtext', asset: '/resources/gulf-job-seekers-career-starter-guide.pptx', includes: ['Job-search guidance', 'Recruiter communication', 'Interview preparation', '7-day action plan'] },
      { id: 'message-pack', badge: 'RECRUITER OUTREACH', category: 'RECRUITER OUTREACH', title: '25 Ready-to-Send Recruiter Messages', desc: 'Stop wondering what to write. Get practical message templates for WhatsApp, LinkedIn, email, applications and follow-ups.', format: 'FREE TEMPLATE PACK', icon: 'bi-chat-left-text', asset: '/resources/recruiter-message-pack.pptx', includes: ['First-contact messages', 'LinkedIn messages', 'Application messages', 'Follow-ups', 'Interview follow-ups'] },
      { id: 'interview-kit', badge: 'INTERVIEW PREPARATION', category: 'INTERVIEW PREPARATION', title: 'The Job Interview Preparation Kit', desc: 'Prepare for your next interview with common questions, answer frameworks and practical preparation checklists.', format: 'FREE INTERVIEW KIT', icon: 'bi-person-video3', asset: '/resources/gulf-job-interview-preparation-kit.pdf', includes: ['30 interview questions', 'Answer frameworks', 'STAR method', 'Interview-day checklist', 'Questions to ask'] },
      { id: 'application-tracker', badge: 'JOB SEARCH ORGANISATION', category: 'APPLICATION ORGANISATION', title: 'Job Application Tracker', desc: 'Keep applications, recruiters, follow-ups and job-search progress organised in one simple tracker.', format: 'FREE TEMPLATE', icon: 'bi-kanban', asset: '/resources/gulf-job-application-tracker.pptx', includes: ['Company', 'Job title', 'Application date', 'Recruiter', 'Status', 'Follow-up date'] },
    ],
    problems: [['I DON\'T KNOW WHERE TO START', 'career-guide', 'Career Starter Guide'], ['I DON\'T KNOW WHAT TO SAY TO RECRUITERS', 'message-pack', 'Recruiter Message Pack'], ['I HAVE AN INTERVIEW COMING', 'interview-kit', 'Interview Preparation Kit'], ["I'M LOSING TRACK OF APPLICATIONS", 'application-tracker', 'Job Application Tracker']],
    table: [['Career Starter Guide', 'Starting / organising a job search', 'PDF', '20-30 min'], ['Recruiter Message Pack', 'Contacting recruiters', 'Templates', '5-10 min'], ['Interview Preparation Kit', 'Preparing for interviews', 'PDF', '20-30 min'], ['Job Application Tracker', 'Managing applications', 'Spreadsheet', '5 min setup']],
    why: [['PRACTICAL', 'Resources you can use immediately.'], ['CAREER-FOCUSED', 'Designed around real stages of the job-search journey.'], ['GLOBALLY RELEVANT', 'Built for today’s connected job market.']],
    formFields: ['Name', 'Email'], selectLabel: 'Current Job Status', selectOptions: ['Looking for my first job', 'Actively job searching', 'Looking for a better opportunity', 'Preparing for an interview', 'Other'],
    faqs: [['Is everything free?', 'Yes. These resources are offered as free career resources.'], ['Can I download more than one?', 'Yes. Visitors can access multiple resources that are relevant to their job search.'], ['Who are these resources for?', 'They are designed for job seekers at different career stages and levels of experience.'], ['Will these resources guarantee a job?', 'No. They provide practical guidance and tools but cannot guarantee employment.']],
  },
  recruiter: {
    title: 'Evaluate Candidates With Clarity', titleAccent: 'Hire With Confidence.',
    intro: 'Explore practical free hiring resources for recruiters, HR teams and employers, from candidate evaluation and screening to job descriptions and hiring workflows.',
    eyebrow: 'FREE HIRING RESOURCES', button: 'Explore Free Hiring Resources', image: recruiterHeroImage,
    audience: 'recruiters, HR teams and employers', navOther: 'Job Seekers', resourceLabel: 'free hiring resource',
    categories: ['ALL RESOURCES', 'INTERVIEWING', 'JOB DESCRIPTIONS', 'CANDIDATE SCREENING', 'HIRING PROCESS'],
    resources: [
      { id: 'scorecard', badge: 'MOST POPULAR', category: 'INTERVIEWING', title: 'Candidate Interview Scorecard', desc: 'Bring more structure to candidate evaluation with a reusable framework for scoring interviews and recording observations.', format: 'FREE TEMPLATE', icon: 'bi-clipboard2-check', asset: '/resources/candidate-interview-scorecard.pptx', includes: ['Candidate details', 'Role criteria', '1-5 scoring', 'Interview notes', 'Strengths & concerns', 'Overall recommendation'] },
      { id: 'screening-checklist', badge: 'HIRING FASTER', category: 'CANDIDATE SCREENING', title: 'Candidate Screening Checklist', desc: 'A practical checklist for reviewing applicants against relevant experience, skills and role requirements.', format: 'FREE CHECKLIST', icon: 'bi-list-check', asset: '/resources/candidate-screening-checklist.pptx', includes: ['Experience', 'Skills', 'Requirements', 'CV review', 'Role alignment', 'Screening notes'] },
      { id: 'jd-templates', badge: 'JOB DESCRIPTION', category: 'JOB DESCRIPTIONS', title: 'Job Description Template Pack', desc: 'Create clearer, more structured job descriptions with reusable templates for common hiring scenarios.', format: 'FREE TEMPLATE PACK', icon: 'bi-file-earmark-text', asset: '/resources/job-description-template-pack.pptx', includes: ['Role overview', 'Responsibilities', 'Requirements', 'Skills', 'Experience', 'Benefits'] },
      { id: 'hiring-toolkit', badge: 'HIRING TOOLKIT', category: 'HIRING PROCESS', title: 'Recruiter Hiring Toolkit', desc: 'A practical collection of resources to help structure your recruitment workflow from role definition through candidate evaluation.', format: 'FREE TOOLKIT', icon: 'bi-briefcase', asset: '/resources/gulf-recruiter-hiring-toolkit.pptx', includes: ['Job description checklist', 'Candidate screening checklist', 'Interview scorecard', 'Interview preparation', 'Hiring process checklist'] },
    ],
    problems: [['INTERVIEWS FEEL INCONSISTENT', 'scorecard', 'Candidate Interview Scorecard'], ['SCREENING FEELS CHAOTIC', 'screening-checklist', 'Candidate Screening Checklist'], ['WRITING JOB DESCRIPTIONS TAKES TOO LONG', 'jd-templates', 'JD Template Pack'], ['I WANT A MORE STRUCTURED PROCESS', 'hiring-toolkit', 'Hiring Toolkit']],
    table: [['Candidate Interview Scorecard', 'Structured interviews', 'Template', '10-15 min'], ['Candidate Screening Checklist', 'Initial candidate review', 'Checklist', '5-10 min'], ['Job Description Template Pack', 'Writing vacancies', 'Templates', '15-20 min'], ['Recruiter Hiring Toolkit', 'Overall hiring process', 'Toolkit', '20-30 min']],
    why: [['STRUCTURED', 'Bring more consistency to hiring activities.'], ['PRACTICAL', 'Resources designed to be used immediately.'], ['RECRUITMENT-FOCUSED', 'Built around common hiring workflows.']],
    formFields: ['Name', 'Work Email', 'Company'], selectLabel: 'Current Hiring Need', selectOptions: ['Writing a job description', 'Screening candidates', 'Preparing interviews', 'Evaluating candidates', 'Improving our hiring process'],
    faqs: [['Is everything free?', 'Yes. These are free recruiting resources.'], ['Can I access multiple resources?', 'Yes. Recruiters can request resources relevant to their hiring needs.'], ['Can I customise the templates?', "Yes. Templates should be adapted to the role and organisation's process."], ['Are these resources suitable for every company?', 'They are general starting points and should be adapted to each organisation and role.'], ['Do these resources guarantee better hires?', 'No. They provide practical structure and support hiring workflows, not guaranteed outcomes.']],
  },
  cybersecurity: {
    title: 'Build Your Cybersecurity Career', titleAccent: 'With Experience and Direction.',
    intro: 'Explore practical free resources for experienced professionals who are looking to move into, grow within, or specialise in cybersecurity.',
    eyebrow: 'FREE CYBERSECURITY CAREER RESOURCES', button: 'Explore Cybersecurity Resources', image: heroImage,
    audience: 'experienced cybersecurity job seekers', navOther: 'Job Seekers', navOtherPath: '/job-seeker-lead-magnet', homePath: '/cybersecurity',
    categories: ['ALL RESOURCES', 'CAREER DIRECTION', 'SKILLS & CERTIFICATIONS', 'JOB SEARCH', 'INTERVIEWS'],
    resources: [
      { id: 'cyber-career-map', badge: 'MOST POPULAR', category: 'CAREER DIRECTION', title: 'Cybersecurity Career Path Map', desc: 'Turn existing IT, risk or operations experience into a clearer cybersecurity career direction.', format: 'FREE CAREER GUIDE', icon: 'bi-diagram-3', includes: ['Role pathways', 'Experience mapping', 'Specialisation options', '90-day action plan'] },
      { id: 'cyber-skills-checklist', badge: 'SKILLS & CERTIFICATIONS', category: 'SKILLS & CERTIFICATIONS', title: 'Cybersecurity Skills Gap Checklist', desc: 'Identify the capabilities employers look for across security operations, governance, cloud security and risk roles.', format: 'FREE CHECKLIST', icon: 'bi-shield-check', includes: ['Core security skills', 'Role-based checklist', 'Certification guidance', 'Portfolio ideas'] },
      { id: 'cyber-resume-kit', badge: 'JOB SEARCH', category: 'JOB SEARCH', title: 'Cybersecurity Resume & LinkedIn Kit', desc: 'Position your transferable experience with stronger language for cybersecurity applications and recruiter outreach.', format: 'FREE TEMPLATE KIT', icon: 'bi-file-earmark-person', includes: ['Achievement examples', 'Security keywords', 'LinkedIn prompts', 'Recruiter messages'] },
      { id: 'cyber-interview-kit', badge: 'INTERVIEWS', category: 'INTERVIEWS', title: 'Cybersecurity Interview Preparation Kit', desc: 'Prepare for technical, scenario-based and behavioural questions with a clearer way to explain your security thinking.', format: 'FREE INTERVIEW KIT', icon: 'bi-person-video3', includes: ['Scenario questions', 'Answer frameworks', 'STAR examples', 'Questions to ask'] },
    ],
    problems: [['I NEED A CLEARER CYBER PATH', 'cyber-career-map', 'Cybersecurity Career Path Map'], ['I AM NOT SURE WHAT SKILLS I AM MISSING', 'cyber-skills-checklist', 'Skills Gap Checklist'], ['MY EXPERIENCE IS NOT READING AS SECURITY EXPERIENCE', 'cyber-resume-kit', 'Resume & LinkedIn Kit'], ['I HAVE A CYBER INTERVIEW COMING', 'cyber-interview-kit', 'Interview Preparation Kit']],
    table: [['Cybersecurity Career Path Map', 'Choosing a security direction', 'Guide', '20-30 min'], ['Cybersecurity Skills Gap Checklist', 'Planning skills and certifications', 'Checklist', '15-20 min'], ['Cybersecurity Resume & LinkedIn Kit', 'Positioning transferable experience', 'Templates', '20-30 min'], ['Cybersecurity Interview Preparation Kit', 'Preparing for interviews', 'Interview kit', '20-30 min']],
    why: [['EXPERIENCE-LED', 'Make your existing experience work harder for a security career.'], ['PRACTICAL', 'Focus on actions, skills and proof you can use immediately.'], ['CAREER-FOCUSED', 'Built for professionals making a serious move into cybersecurity.']],
    formFields: ['Name', 'Email'], selectLabel: 'Current Cybersecurity Career Goal', selectOptions: ['Move into cybersecurity', 'Advance in my current security role', 'Choose a cybersecurity specialisation', 'Prepare for a cybersecurity interview', 'Improve my cybersecurity applications'],
    challengeTitle: 'What Is Holding Your Cybersecurity Career Back?', whyTitle: 'Practical Resources for Experienced Cybersecurity Job Seekers.', formQuestion: 'Not Sure Which Cybersecurity Resource to Choose?', formIntro: 'Tell us what you are working toward and choose the resource that best fits your cybersecurity career goal.', finalTitle: 'Your Cybersecurity Career Move Starts With a Clearer Plan.', finalCopy: 'Choose a free resource and take one practical step toward your next cybersecurity opportunity.', footerCopy: 'Helping experienced professionals move toward meaningful cybersecurity careers.', keywords: 'cybersecurity career resources, cybersecurity jobs, cyber career guide, security skills checklist', canonicalPath: '/cybersecurity'
  },
}

function LeadMagnetPage({ type }) {
  const hub = hubs[type] || hubs.cybersecurity
  const [filter, setFilter] = useState('ALL RESOURCES')
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const resources = useMemo(() => filter === 'ALL RESOURCES' ? hub.resources : hub.resources.filter(resource => resource.category === filter), [filter, hub.resources])
  const openResource = (resource) => { setSelected(resource); setSubmitted(false); document.getElementById('master-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' }) }
  const submit = async (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const config = GOOGLE_LEAD_FORMS[type]
    const requested = (selected || hub.resources[0]).title
    const body = new URLSearchParams()
    body.set(config.fields.name, form.get('Name') || '')
    body.set(config.fields.email, form.get('Email') || form.get('Work Email') || '')
    body.set(config.fields.resource, requested)
    if (type === 'jobSeeker') {
      body.set(config.fields.jobStatus, form.get('Current Job Status') || '')
    } else if (type === 'recruiter') {
      body.set(config.fields.company, form.get('Company') || '')
      body.set(config.fields.hiringNeed, form.get('Current Hiring Need') || '')
    } else {
      body.set(config.fields.jobStatus, form.get('Current Cybersecurity Career Goal') || '')
    }
    await fetch(config.url, { method: 'POST', mode: 'no-cors', body })
    setSubmitted(true)
  }
  const requestedResource = selected || hub.resources[0]

  useEffect(() => {
    const page = document.querySelector('.lm-page')
    const sections = page ? Array.from(page.querySelectorAll('main > section:not(.lm-hero)')) : []
    if (!page || !sections.length) return undefined

    sections.forEach((section) => section.classList.add('lm-scroll-reveal'))

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [type])

  return <div className={`lm-page lm-page--${type}`}>
        <Helmet>
      <title>{hub.title} {hub.titleAccent} | FALAYN</title>
      <meta name="description" content={hub.intro} />
      <meta name="keywords" content={hub.keywords || (type === 'jobSeeker' ? 'job seeker resources, career guide, recruiter messages, interview preparation, job application tracker' : 'recruiter resources, candidate interview scorecard, screening checklist, job description templates, hiring toolkit')} />
      <link rel="canonical" href={`https://falayn.com${hub.canonicalPath || (type === 'jobSeeker' ? '/job-seeker-lead-magnet' : '/recruiter-lead-magnet')}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={hub.title} />
      <meta property="og:description" content={hub.intro} />
      <meta property="og:site_name" content="FALAYN" />
      <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', name: hub.title, description: hub.intro, isPartOf: { '@type': 'WebSite', name: 'FALAYN' } })}</script>
    </Helmet>
    <header className="lm-nav"><Link className="lm-brand" to={hub.homePath || (type === 'jobSeeker' ? '/job-seeker-lead-magnet' : '/recruiter-lead-magnet')}>FALAYN<span>.</span></Link><nav><a href="#resources">{type === 'jobSeeker' ? 'Job Seekers' : type === 'recruiter' ? 'Recruiters' : 'Cybersecurity Careers'}</a><a href={hub.navOtherPath || (type === 'jobSeeker' ? '/recruiter-lead-magnet' : '/job-seeker-lead-magnet')}>{hub.navOther}</a></nav><a className="lm-nav-cta" href="#resources">Explore resources <i className="bi bi-arrow-up-right" /></a></header>
    <main>
      <section className="lm-hero"><div className="lm-container lm-hero-grid"><div className="lm-hero-copy"><div className="lm-hero-rings" aria-hidden="true"><span /><span /><span /></div><span className="lm-eyebrow"><i className="bi bi-stars" />{hub.eyebrow}</span><h1 className={hub.accentInline ? 'lm-hero-title--accent-inline' : ''}><span>{hub.title}</span><span className={`lm-title-accent ${hub.accentInline ? 'lm-title-accent--inline' : ''}`}>{hub.titleAccent}</span></h1><p>{hub.intro}</p><a className="lm-button" href="#resources">{hub.button} <i className="bi bi-arrow-down" /></a><small>No payment <span>•</span> Practical resources <span>•</span> Built for {hub.audience}</small></div><div className="lm-hero-visual"><div className="lm-visual-rings" aria-hidden="true"><span /><span /><span /></div><div className="lm-image-frame"><img src={hub.image} alt="Professional resource scene" /></div></div></div></section>
      
      <section className="lm-section" id="resources"><div className="lm-container"><div className="lm-heading"><span className="lm-eyebrow">FALAYN RESOURCE LIBRARY</span><h2>Choose What You Need Right Now.</h2><p>Start with the resource that matches the challenge you're facing today.</p></div><div className="lm-category-bar lm-category-bar--inline"><div className="lm-container"><strong>Explore by need</strong><div>{hub.categories.map(category => <button key={category} className={filter === category ? 'active' : ''} onClick={() => setFilter(category)}>{category}</button>)}</div></div></div><div className="lm-resource-grid">{resources.map((resource) => <article className="lm-resource-card" id={resource.id} key={resource.id}><div className="lm-resource-art"><span className="lm-resource-badge">{resource.badge}</span><i className={`bi ${resource.icon}`} /><small>{resource.format}</small></div><div className="lm-resource-content"><h3>{resource.title}</h3><p>{resource.desc}</p><ul>{resource.includes.map(item => <li key={item}><i className="bi bi-check2" />{item}</li>)}</ul><button className="lm-text-link lm-resource-cta" onClick={() => openResource(resource)}>Get the resource <i className="bi bi-arrow-right" /></button></div></article>)}</div></div></section>
      <section className="lm-section lm-soft"><div className="lm-container"><div className="lm-heading"><span className="lm-eyebrow">START WITH THE CHALLENGE</span><h2>{hub.challengeTitle || (type === 'jobSeeker' ? "What's Holding Your Job Search Back?" : 'Which Part of Hiring Takes the Most Time?')}</h2></div><div className="lm-problem-grid">{hub.problems.map(([title, id, label]) => <button className="lm-problem-card" key={id} onClick={() => openResource(hub.resources.find(resource => resource.id === id))}><span>{title}</span><strong>{label}</strong><i className="bi bi-arrow-up-right" /></button>)}</div></div></section>
      <section className="lm-section"><div className="lm-container"><div className="lm-heading"><span className="lm-eyebrow">COMPARE THE LIBRARY</span><h2>Find the right starting point.</h2><p className="lm-compare-lead">A quick view of each resource, what it helps with, and how soon you can put it to work.</p></div><div className="lm-table-wrap"><table><thead><tr><th>Resource</th><th>Best For</th><th>Format</th><th>Time to Use</th></tr></thead><tbody>{hub.table.map(row => <tr key={row[0]}>{row.map((cell, index) => <td key={cell} data-label={['Resource', 'Best For', 'Format', 'Time to Use'][index]}>{cell}</td>)}</tr>)}</tbody></table></div></div></section>
      <section className="lm-section lm-dark"><div className="lm-container"><div className="lm-heading lm-heading-light"><span className="lm-eyebrow">HOW IT WORKS</span><h2>Choose. Download. Take Action.</h2></div><div className="lm-step-grid">{[['01', 'CHOOSE A RESOURCE', 'Pick the free resource that matches your current challenge.'], ['02', 'ENTER YOUR DETAILS', 'Complete a short form.'], ['03', 'GET YOUR RESOURCE', 'Receive the resource through the delivery page or email.'], ['04', 'PUT IT TO WORK', 'Use it immediately in your next step.']].map(([number, title, copy]) => <div key={number}><b>{number}</b><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>
      <section className="lm-section" id="why"><div className="lm-container"><div className="lm-heading"><span className="lm-eyebrow">WHY FALAYN</span><h2>{hub.whyTitle || (type === 'jobSeeker' ? 'Resources Designed Around the Real Job Search.' : 'Practical Resources for Modern Recruitment Teams.')}</h2></div><div className="lm-card-grid lm-benefit-grid">{hub.why.map(([title, copy]) => <article className="lm-card" key={title}><i className="bi bi-arrow-up-right lm-card-arrow" /><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
      <section className="lm-form-band" id="master-form"><div className="lm-container lm-form-layout"><div className="lm-form-intro"><span className="lm-eyebrow">FIND YOUR STARTING POINT</span><h2>{selected ? `Get: ${selected.title}` : type === 'jobSeeker' ? 'Not Sure Which Resource to Choose?' : 'Not Sure Where to Start?'}</h2><p>{selected ? 'Complete the short form and we will record your requested resource.' : type === 'jobSeeker' ? "Tell us what you're currently working on and we'll help you find the right starting resource." : "Tell us what you're working on and choose the resource that best fits your current hiring need."}</p><div className="lm-form-highlights"><span>{selected ? 'Selected resource includes' : 'Practical resources, ready to use'}</span>{(selected?.includes || hub.resources[0].includes).slice(0, 3).map(item => <strong key={item}><i className="bi bi-check2-circle" />{item}</strong>)}</div></div><form className="lm-form" onSubmit={submit}>{submitted ? <div className="lm-success"><i className="bi bi-check-circle-fill" /><h3>Request received.</h3><p>{requestedResource.asset ? "Your resource request has been recorded. Download your selected resource below." : "Your resource request has been recorded. Our team will follow up with the requested resource."}</p>{requestedResource.asset && <a className="lm-button lm-download-button" href={requestedResource.asset} download><i className="bi bi-download" /> Download {requestedResource.title}</a>}</div> : <><div className="lm-selected"><span>RESOURCE REQUESTED</span><strong>{selected?.title || 'Choose a resource above'}</strong></div>{hub.formFields.map((field, index) => <label key={field}>{field}<input name={field} required={index < 2} type={field.toLowerCase().includes('email') ? 'email' : 'text'} placeholder={field} /></label>)}<label>{hub.selectLabel}<select name={hub.selectLabel} required defaultValue=""><option value="" disabled>Select one</option>{hub.selectOptions.map(option => <option key={option}>{option}</option>)}</select></label><button className="lm-button" type="submit">Get My Free Resource <i className="bi bi-arrow-right" /></button><small>We respect your privacy. No spam. Unsubscribe anytime.</small></>}</form></div></section>
      <section className="lm-section lm-faq" id="faq"><div className="lm-container lm-faq-layout"><div><span className="lm-eyebrow">NEED TO KNOW</span><h2>Questions{' '}<span className="lm-faq-question-mark">?</span> We have answers.</h2></div><div>{hub.faqs.map(([question, answer]) => <details key={question}><summary>{question}<i className="bi bi-plus" /></summary><p>{answer}</p></details>)}</div></div></section>
      <section className="lm-final"><div className="lm-container"><span className="lm-eyebrow">YOUR NEXT STEP STARTS HERE</span><h2>{type === 'jobSeeker' ? "Whatever Stage You're At, Start With the Right Resource." : 'Build a More Structured Hiring Process, One Step at a Time.'}</h2><p>{type === 'jobSeeker' ? 'Choose a free resource and take one practical step toward your next career opportunity.' : 'Choose a free resource and give your team a practical starting point for the next hiring challenge.'}</p><a className="lm-button" href="#resources">{hub.button} <i className="bi bi-arrow-right" /></a></div></section>
    </main>
    <footer className="lm-footer"><div className="lm-container"><div><Link className="lm-brand" to={type === 'jobSeeker' ? '/job-seeker-lead-magnet' : '/recruiter-lead-magnet'}>FALAYN<span>.</span></Link><p>{type === 'jobSeeker' ? 'Helping talent and opportunity find each other.' : 'Smarter foundations for modern recruitment.'}</p></div><div className="lm-footer-links"><a href="#resources">Resources</a><a href="#faq">FAQ</a><a href="#master-form">Contact</a></div></div></footer>
  </div>
}

export default LeadMagnetPage



















