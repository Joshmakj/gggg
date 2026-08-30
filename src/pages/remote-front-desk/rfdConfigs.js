import HeroImage from '../../assets/HomeAssets/hero.png'
import demoImage from '../../assets/HomeAssets/demo.png'
import demoVideo from '../../assets/HomeAssets/demovideo.mp4'
import whatweofferImage from '../../assets/HomeAssets/whatweoffer.png'
import cosecImage from '../../assets/HomeAssets/COSEC.png'
import lawFirmSectionImage from '../../assets/HomeAssets/law-firm-section-20260720-231451.png'
import coworksImage from '../../assets/HomeAssets/coworks.png'
import medicalImage from '../../assets/HomeAssets/medical.png'
import corporateImage from '../../assets/HomeAssets/cooperate.png'
import governmentImage from '../../assets/HomeAssets/government-building.png'
import govtImage from '../../assets/HomeAssets/govt.png'
import lawImage from '../../assets/HomeAssets/law.png'
import testimonialPortrait from '../../assets/JobseekerAssets/Jobpro.png'
import { resourceCards } from '../../blogContent'

const sharedTheme = {
  accent: '#ff7a1d',
  accentSoft: 'rgba(255, 122, 26, 0.14)',
  ink: '#243047',
}

const sharedHeroStats = [
  { icon: 'bi-chat-dots', value: 'Live reception', label: 'Warm human-first answering' },
  { icon: 'bi-shield-check', value: 'Secure flows', label: 'Clear escalation and routing' },
  { icon: 'bi-clock-history', value: 'Always ready', label: 'Coverage that keeps pace' },
]

const sharedFloatCards = [
  { title: 'Premium first impression', text: 'Thoughtful arrival flow for every visitor.' },
  { title: 'Guided handoff', text: 'Calls move to the right person without friction.' },
]

const clinicHeroStats = [
  { icon: 'bi-person-check', value: 'Patient intake', label: 'Empathetic front desk support' },
  { icon: 'bi-clock-history', value: 'Faster check-in', label: 'Reduce wait times and lines' },
  { icon: 'bi-shield-lock', value: 'Protected data', label: 'HIPAA-like handling for sensitive information' },
]

const clinicFloatCards = [
  { title: 'Calmer waiting rooms', text: 'Reception that keeps patient flow moving with less stress.' },
  { title: 'Clear care handoffs', text: 'Intake details delivered directly to the right clinical team.' },
]

const clinicIntroCards = [
  { icon: 'bi-heart-pulse', title: 'Patient-first arrival', desc: 'A warm front desk that helps patients feel welcome and supported. Our receptionists use clear, empathetic scripts to set expectations and reduce anxiety. Quick triage at check-in ensures patients are directed to the right place for care.', bullets: ['Scripted greetings and quick triage'] },
  { icon: 'bi-calendar2-check', title: 'Reminder-driven reliability', desc: 'Reduce no-shows with timely, automated confirmations and thoughtful follow-up. Messages include prep instructions and links so patients arrive ready. Human callbacks are used when needed to keep schedules accurate.', bullets: ['Automated SMS/email reminders'] },
  { icon: 'bi-person-badge', title: 'Care coordination', desc: 'Route urgent visits and family updates with clear context for clinical teams. Intake notes are logged and shared so handoffs happen without information loss. That coordination keeps patients moving through care more smoothly.', bullets: ['Route to the correct clinician or team'] },
  { icon: 'bi-shield-lock', title: 'Confidential handling', desc: 'Handle sensitive patient details discreetly and with care. Intake flows minimize exposure and mark records for restricted access. Privacy-focused routing ensures information reaches only authorized staff.', bullets: ['Private intake flows'] },
  { icon: 'bi-briefcase', title: 'Clinical triage support', desc: 'Capture essential intake notes so clinicians can triage quickly. Staff can flag urgent cases and prioritize routing immediately. Faster triage reduces delays and speeds appropriate care.', bullets: ['Triage flags for urgent cases'] },
  { icon: 'bi-people', title: 'Family & visitor flow', desc: 'Manage guests and family check-ins without disrupting clinical care. Reception captures permissions and timing windows to match facility policies. This keeps clinical areas focused while supporting families.', bullets: ['Guest permission capture'] },
  { icon: 'bi-phone', title: 'Appointment confirmations', desc: 'Keep schedules accurate with automated and human confirmations. Retry logic reduces missed confirmations and helps fill gaps. Prep links and brief instructions help patients be ready for visits.', bullets: ['Retry logic and prep links'] },
  { icon: 'bi-speedometer2', title: 'Faster check-ins', desc: 'Streamlined prompts and forms speed patient arrivals and reduce desk time. Mobile-friendly options and pre-fill reduce repeated entry. Patients move through check-in more quickly and with less friction.', bullets: ['Mobile-friendly quick check-in'] },
  { icon: 'bi-file-earmark-text', title: 'Insurance & notes', desc: 'Capture insurance details and visit notes cleanly at intake. Guided fields reduce common data errors and speed verification. Staff can attach documents or photos when needed for clarity.', bullets: ['Guided fields reduce errors'] },
  { icon: 'bi-heart', title: 'Comfort-first approach', desc: 'Empathetic scripts focus patients on next steps and ease concerns. Receptionists summarize what to expect and who to contact for questions. Clear guidance helps patients feel cared for at every stage.', bullets: ['Next-step summaries for patients'] },
]

const SharedIntroCards = [
  { icon: 'bi-stars', title: 'High-touch service', desc: 'Friendly reception scripts that still feel personal.' },
  { icon: 'bi-layout-text-window', title: 'Structured workflows', desc: 'Each arrival follows a clear, repeatable path.' },
  { icon: 'bi-bell', title: 'Instant routing', desc: 'Hosts and teams get notified the moment they should.' },
  { icon: 'bi-graph-up-arrow', title: 'Operational clarity', desc: 'Front desk data is easier to understand and improve.' },
]

const sharedProcess = [
  { number: '01', icon: 'bi-telephone-inbound', title: 'Visitor contacts the desk', desc: 'A trained receptionist answers with a polished, brand-aligned greeting.' },
  { number: '02', icon: 'bi-clipboard-check', title: 'Details are captured', desc: 'The right form, note, or verification step is completed without confusion.' },
  { number: '03', icon: 'bi-bell-fill', title: 'Team is notified', desc: 'The host or department receives the message instantly with the right context.' },
  { number: '04', icon: 'bi-calendar2-check', title: 'Follow-up is secured', desc: 'Appointments, reminders, or visitor next steps are confirmed before the interaction ends.' },
]

const clinicProcess = [
  { number: '01', icon: 'bi-person-lines-fill', title: 'Patient checks in', desc: 'Reception captures appointment details, symptoms, and safety notes with care.' },
  { number: '02', icon: 'bi-calendar2-check', title: 'Appointment details are verified', desc: 'The clinic confirms schedules, prep instructions, and reminder timing before the patient moves on.' },
  { number: '03', icon: 'bi-shield-lock', title: 'Sensitive information is handled privately', desc: 'Patient notes and insurance details are kept confidential and routed correctly.' },
  { number: '04', icon: 'bi-arrow-right-circle', title: 'Handoff is coordinated with care staff', desc: 'Clear intake notes and next-step guidance make the transfer to clinical teams seamless.' },
]

const sharedCompareColumns = {
  remote: 'Teamup Remote',
  inHouse: 'In-house Desk',
  kiosk: 'Automated Kiosk',
}

const sharedResources = resourceCards.slice(0, 3)

export const rfdConfigs = {
  lawFirms: {
    id: 'law-firms',
    canonical: 'https://teamupconsultants.com/remote-front-desk/law-firms',
    metaTitle: 'Confidential Legal Front Desk for Law Firms | Client Intake & Scheduling | Teamup',
    metaDescription: 'Premium remote front desk for law firms with confidential client intake, appointment scheduling, attorney notifications, and secure legal reception for a polished client experience.',
    theme: sharedTheme,
    hero: {
      badge: 'SECURE LEGAL RECEPTION',
      badgeIcon: 'bi-shield-lock',
      titleTop: 'Remote Front Desk',
      titleBottom: '',
      titleAccent: 'FOR LAW FIRMS',
      copy: 'Protect every client interaction with a legal receptionist flow built for confidentiality, urgency, and consistent intake quality.',
      primaryCta: 'Book a Legal Demo',
      secondaryCta: 'Hire a Front Desk Assistant',
      image: lawImage,
      imageAlt: 'Law firm reception visual',
      stats: sharedHeroStats,
      floatCards: sharedFloatCards,
    },
    features: [
      { icon: 'bi-file-earmark-text', title: 'Client intake', desc: 'Collect matter details, urgency, and callback information.' },
      { icon: 'bi-calendar2-check', title: 'Consult scheduling', desc: 'Book consultations, hearings, and follow-ups with clarity.' },
      { icon: 'bi-bell', title: 'Attorney alerts', desc: 'Route urgent matters to the right legal team immediately.' },
      { icon: 'bi-shield-lock', title: 'Confidential AI', desc: 'Respect privacy with careful reception workflows.' },
    ],
    intro: {
      eyebrow: 'LEGAL RECEPTION',
      eyebrowIcon: 'bi-people',
      titleTop: 'A premium legal front desk built for',
      titleBottom: 'client trust and responsiveness',
      lead: 'Your front desk should feel calm, discreet, and competent. We help law firms turn every call into a better client experience with trained intake and responsive scheduling.',
      cta: 'Explore the legal workflow',
      image: lawFirmSectionImage,
      imageAlt: 'Legal intake workflow visual',
      cards: [
        { icon: 'bi-stars', title: 'High-touch service', desc: 'Friendly reception scripts that still feel personal and human.' },
        { icon: 'bi-layout-text-window', title: 'Structured workflows', desc: 'Each call and arrival follows a clear, repeatable process.' },
        { icon: 'bi-bell', title: 'Instant routing', desc: 'Calls and messages are routed to the right person immediately.' },
        { icon: 'bi-calendar2-check', title: 'Smart scheduling', desc: 'We manage calendars, book appointments, and prevent conflicts.' },
        { icon: 'bi-graph-up-arrow', title: 'Operational clarity', desc: 'Detailed logs and call notes keep your team aligned and informed.' },
        { icon: 'bi-shield-lock', title: 'Confidential & secure', desc: 'We protect client information with strict privacy protocols.' },
      ],
    },
    detail: {
      eyebrow: 'LEGAL FOCUS',
      title: 'The legal intake experience your firm needs',
      lead: 'A law firm front desk must protect confidentiality, reduce friction, and make every client handoff feel effortless.',
      cards: [
        { icon: 'bi-file-earmark-lock', title: 'Confidential intake', desc: 'Sensitive client details are captured with privacy-first handling and secure intake notes.' },
        { icon: 'bi-bell', title: 'Attorney-ready alerts', desc: 'Urgent matters are routed immediately to the right attorney or support team.' },
        { icon: 'bi-calendar2-check', title: 'Appointment accuracy', desc: 'Schedules are confirmed and conflicts are avoided before the client is handed off.' },
        { icon: 'bi-people', title: 'Client-first communication', desc: 'Clients feel respected and informed from the first ring through follow-up.' },
      ],
    },
    process: {
      eyebrow: 'HOW IT WORKS',
      eyebrowIcon: 'bi-gear-wide-connected',
      title: 'A reception flow that keeps legal teams focused',
      lead: 'Simple, repeatable, and built to protect time while preserving the human touch.',
      steps: sharedProcess,
    },
    demo: {
      eyebrow: 'DEMO VIDEO',
      eyebrowIcon: 'bi-camera-video',
      title: 'Watch the legal intake journey in motion',
      lead: 'See how the desk captures intake, routes urgent matters, and keeps the process polished from the first ring to the final handoff.',
      cta: 'Play demo',
      image: demoImage,
      imageAlt: 'Remote front desk demo screenshot',
      video: demoVideo,
    },
    why: {
      eyebrow: 'WHY FIRMS CHOOSE US',
      eyebrowIcon: 'bi-stars',
      title: 'Why law firms choose Teamup',
      lead: 'Designed for confidentiality, responsiveness, and a professional first impression.',
      cards: [
        { icon: 'bi-person-badge', title: 'Legal-savvy receptionists', desc: 'Agents trained to stay calm, accurate, and client-ready.' },
        { icon: 'bi-shield-lock', title: 'Confidential by design', desc: 'Workflow decisions protect sensitive conversations and notes.' },
        { icon: 'bi-chat-square-text', title: 'Better intake quality', desc: 'Structured questions help your team get the details they need.' },
      ],
    },
    compare: {
      eyebrow: 'COMPARISON',
      eyebrowIcon: 'bi-bar-chart',
      title: 'Compare legal reception models',
      lead: 'A quick view of how a premium remote desk stacks up against in-house or automated alternatives.',
      columns: sharedCompareColumns,
      rows: [
        { feature: 'Confidential intake', remote: 'check', inHouse: 'warn', kiosk: 'x' },
        { feature: 'Attorney notifications', remote: 'check', inHouse: 'check', kiosk: 'x' },
        { feature: '24/7 availability', remote: 'check', inHouse: 'x', kiosk: 'check' },
        { feature: 'Predictable monthly cost', remote: 'check', inHouse: 'x', kiosk: 'check' },
      ],
    },
    testimonials: {
      eyebrow: 'CLIENT LOVE',
      eyebrowIcon: 'bi-chat-square-heart',
      title: 'What legal teams notice first',
      lead: 'Better call handling, stronger intake, and a calmer office rhythm.',
      items: [
        { quote: 'Every call feels more organized now, and our attorneys get the right details the first time.', name: 'A. Bennett', title: 'Managing Partner', company: 'Bennett Law', image: testimonialPortrait },
        { quote: 'We have far fewer missed consults because the reception flow is finally consistent.', name: 'R. Lee', title: 'Office Manager', company: 'Lee & Co', image: testimonialPortrait },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      eyebrowIcon: 'bi-question-circle',
      title: 'Law firm FAQs',
      lead: 'Questions we hear most often from legal teams evaluating remote front desk support.',
      items: [
        { question: 'How is client intake kept confidential?', answer: 'We follow structured, discreet workflows that keep sensitive conversations organized and private.' },
        { question: 'Can attorneys receive priority alerts?', answer: 'Yes. We route urgent matters according to your firm’s instructions and escalation rules.' },
      ],
    },
    resources: {
      eyebrow: 'RESOURCES',
      eyebrowIcon: 'bi-journal-text',
      title: 'Helpful law firm resources',
      lead: 'Articles and guides that make it easier to plan a reception experience your clients will trust.',
      cards: sharedResources,
    },
  },
  medicalClinics: {
    id: 'medical-clinics',
    canonical: 'https://teamupconsultants.com/remote-front-desk/medical-clinics',
    metaTitle: 'Remote Front Desk for Medical Clinics | Patient Intake & Reminders | Teamup',
    metaDescription: 'Premium remote front desk for medical clinics with patient check-in, appointment reminders, visitor management, and HIPAA-aware reception support. Reduce no-shows and improve patient experience.',
    theme: sharedTheme,
    hero: {
      badge: 'CLINIC PATIENT EXPERIENCE',
      badgeIcon: 'bi-heart-pulse',
      titleTop: 'Remote Front Desk',
      titleBottom: 'FOR MEDICAL CLINICS',
      titleAccent: '',
      copy: 'Give patients a calmer arrival experience with a front desk flow that supports check-in, reminders, visitor coordination, and privacy-aware handling.',
      primaryCta: 'Book a Clinic Demo',
      secondaryCta: 'Hire a Front Desk Assistant',
      image: medicalImage,
      imageAlt: 'Medical clinic reception visual',
      stats: clinicHeroStats,
      floatCards: clinicFloatCards,
    },
    features: [
      { icon: 'bi-person-check', title: 'Patient check-in', desc: 'Warm, efficient arrival support that keeps lines moving.' },
      { icon: 'bi-bell', title: 'Appointment reminders', desc: 'Reduce no-shows with timely confirmation and follow-up.' },
      { icon: 'bi-people', title: 'Visitor coordination', desc: 'Manage family or guest flow without slowing the desk.' },
      { icon: 'bi-shield-lock', title: 'Privacy-aware handling', desc: 'Respect patient information with careful workflows.' },
    ],
    intro: {
      eyebrow: 'CLINIC RECEPTION',
      eyebrowIcon: 'bi-people',
      titleTop: 'A patient-first front desk for',
      titleBottom: 'smoother clinic operations',
      lead: 'Clinics need speed, empathy, and consistency. Our reception workflows help teams welcome patients well while reducing missed appointments and front desk bottlenecks.',
      cta: 'Explore the clinic workflow',
      image: whatweofferImage,
      imageAlt: 'Medical clinic workflow visual',
      cards: clinicIntroCards,
    },
    detail: {
      eyebrow: 'CLINIC FOCUS',
      icon: 'bi-heart-pulse',
      title: 'A patient-first reception flow for quieter, more coordinated care',
      lead: 'Every patient interaction is handled with calm, accuracy, and the right follow-up so your front desk supports better care outcomes.',
      cards: [
        { icon: 'bi-person-check', title: 'Warm patient check-in', desc: 'Welcoming patients quickly while capturing visit type, insurance notes, and care preferences.' },
        { icon: 'bi-calendar2-check', title: 'Appointment coordination', desc: 'Confirm schedules, share reminders, and keep patient flow moving without tension.' },
        { icon: 'bi-shield-lock', title: 'Privacy-aware handling', desc: 'Sensitive patient details are managed discreetly and routed only to the right care team.' },
        { icon: 'bi-bell', title: 'Care handoff clarity', desc: 'Structured intake notes and next-step guidance make handoff to clinical staff seamless.' },
      ],
    },
    process: {
      eyebrow: 'HOW IT WORKS',
      eyebrowIcon: 'bi-gear-wide-connected',
      title: 'A reception flow that supports patient care',
      lead: 'Faster arrivals, smoother updates, and less friction at the front desk.',
      steps: clinicProcess,
    },
    demo: {
      eyebrow: 'DEMO VIDEO',
      eyebrowIcon: 'bi-camera-video',
      title: 'Watch the clinic journey in motion',
      lead: 'See how check-in, reminders, and patient support are coordinated in a simple, reassuring flow.',
      cta: 'Play demo',
      image: demoImage,
      imageAlt: 'Clinic demo screenshot',
      video: demoVideo,
    },
    why: {
      eyebrow: 'WHY CLINICS CHOOSE US',
      eyebrowIcon: 'bi-stars',
      title: 'Why medical teams choose Teamup',
      lead: 'Built for patient experience, schedule consistency, and a gentler front desk rhythm.',
      cards: [
        { icon: 'bi-briefcase-medical', title: 'Patient-centered service', desc: 'Receptionists trained to keep the experience calm and clear.' },
        { icon: 'bi-alarm', title: 'Reduce no-shows', desc: 'Reminder workflows help patients stay on schedule.' },
        { icon: 'bi-shield-lock', title: 'Sensitive handling', desc: 'Information is captured carefully and routed appropriately.' },
      ],
    },
    compare: {
      eyebrow: 'COMPARISON',
      eyebrowIcon: 'bi-bar-chart',
      title: 'Compare clinic reception models',
      lead: 'A simple side-by-side view of how Teamup compares to other front desk options.',
      columns: sharedCompareColumns,
      rows: [
        { feature: 'Patient check-in', remote: 'check', inHouse: 'check', kiosk: 'x' },
        { feature: 'Reminder workflows', remote: 'check', inHouse: 'warn', kiosk: 'x' },
        { feature: 'Privacy-aware handling', remote: 'check', inHouse: 'warn', kiosk: 'x' },
        { feature: 'Predictable monthly cost', remote: 'check', inHouse: 'x', kiosk: 'check' },
      ],
    },
    testimonials: {
      eyebrow: 'CLIENT LOVE',
      eyebrowIcon: 'bi-chat-square-heart',
      title: 'What clinics notice first',
      lead: 'More consistency at check-in and fewer missed appointments.',
      items: [
        { quote: 'Our reception feels calmer, and patients get clearer direction the moment they arrive.', name: 'Dr. S. Nair', title: 'Clinic Director', company: 'Northside Clinic', image: testimonialPortrait },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      eyebrowIcon: 'bi-question-circle',
      title: 'Clinic FAQs',
      lead: 'Helpful answers for teams evaluating a more polished patient-facing desk.',
      items: [
        { question: 'Can you integrate with our scheduling system?', answer: 'Yes. We can work around your scheduling workflows and support your front desk process.' },
        { question: 'Are receptionists trained for patient interactions?', answer: 'Yes. Our team is trained to keep the conversation respectful, clear, and organized.' },
      ],
    },
    resources: {
      eyebrow: 'RESOURCES',
      eyebrowIcon: 'bi-journal-text',
      title: 'Helpful clinic resources',
      lead: 'Planning guides and articles for teams improving patient experience at the front desk.',
      cards: sharedResources,
    },
  },
  corporateOffices: {
    id: 'corporate-offices',
    canonical: 'https://teamupconsultants.com/remote-front-desk/corporate-offices',
    metaTitle: 'Professional Corporate Front Desk for Visitor Management | Remote Reception | Teamup',
    metaDescription: 'Premium remote front desk for corporate offices with visitor check-ins, meeting coordination, delivery tracking, and professional reception management. 24/7 support available.',
    theme: sharedTheme,
    hero: {
      badge: 'CORPORATE RECEPTION',
      badgeIcon: 'bi-building',
      titleTop: 'Remote Front Desk',
      titleBottom: 'FOR CORPORATE OFFICES',
      titleAccent: '',
      copy: 'Keep office flow polished and efficient with reception support that handles visitors, meetings, deliveries, and host notifications at scale.',
      primaryCta: 'Book an Office Demo',
      secondaryCta: 'Hire a Front Desk Assistant',
      image: corporateImage,
      imageAlt: 'Corporate office reception visual',
      stats: sharedHeroStats,
      floatCards: sharedFloatCards,
    },
    features: [
      { icon: 'bi-person-check', title: 'Visitor check-in', desc: 'A professional welcome that keeps the desk moving.' },
      { icon: 'bi-calendar2-event', title: 'Meeting coordination', desc: 'Route meeting updates without interrupting the team.' },
      { icon: 'bi-box-seam', title: 'Delivery handling', desc: 'Track packages and notify recipients clearly.' },
      { icon: 'bi-shield-lock', title: 'Security-aware flow', desc: 'Escalations and access steps stay organized.' },
    ],
      intro: {
        eyebrow: 'CORPORATE RECEPTION',
        eyebrowIcon: 'bi-people',
        titleTop: 'A premium office front desk for',
        titleBottom: 'teams that need less friction',
        lead: 'From busy lobbies to multi-floor operations, this is corporate reception that feels polished, calm, and scalable.',
        cta: 'Explore the office workflow',
        image: cosecImage,
        imageAlt: 'COSEC',
        cards: [
          { icon: 'bi-stars', title: 'High-touch service', desc: 'Friendly reception scripts that still feel personal.' },
          { icon: 'bi-layout-text-window', title: 'Structured workflows', desc: 'Each arrival follows a clear, repeatable path.' },
          { icon: 'bi-bell', title: 'Instant routing', desc: 'Hosts and teams get notified the moment they should.' },
          { icon: 'bi-graph-up-arrow', title: 'Operational clarity', desc: 'Front desk data is easier to understand and improve.' },
          { icon: 'bi-person-check', title: 'Visitor check-in', desc: 'Quick, professional guest sign-in that keeps lobbies moving.' },
          { icon: 'bi-calendar2-event', title: 'Meeting coordination', desc: 'Confirm host availability and route visitors efficiently.' },
        ],
      },
    detail: {
      eyebrow: 'OFFICE FOCUS',
      icon: 'bi-building',
      title: 'Reception designed for busy corporate lobbies',
      lead: 'Keep visitors moving, hosts notified, and deliveries tracked without distracting your team.',
      cards: [
        { icon: 'bi-person-check', title: 'Visitor check-in', desc: 'Fast, professional arrival support that keeps guests on schedule.' },
        { icon: 'bi-calendar2-event', title: 'Meeting coordination', desc: 'Confirm host availability and route visitors efficiently.' },
        { icon: 'bi-box-seam', title: 'Delivery management', desc: 'Track packages, notify recipients, and reduce lobby clutter.' },
        { icon: 'bi-bell', title: 'Host notifications', desc: 'Quick alerts go to the right person with the right context.' },
      ],
    },
    process: {
      eyebrow: 'HOW IT WORKS',
      eyebrowIcon: 'bi-gear-wide-connected',
      title: 'Reception that supports the whole office',
      lead: 'One consistent flow for visitors, deliveries, meetings, and everyday office handoffs.',
      steps: sharedProcess,
    },
    demo: {
      eyebrow: 'DEMO VIDEO',
      eyebrowIcon: 'bi-camera-video',
      title: 'Watch the corporate reception journey',
      lead: 'See how a polished desk keeps visitors moving and staff focused.',
      cta: 'Play demo',
      image: demoImage,
      imageAlt: 'Corporate demo screenshot',
      video: demoVideo,
    },
    why: {
      eyebrow: 'WHY TEAMS CHOOSE US',
      eyebrowIcon: 'bi-stars',
      title: 'Why corporate teams choose Teamup',
      lead: 'Professional, reliable, and easy to scale across modern office needs.',
      cards: [
        { icon: 'bi-briefcase', title: 'Enterprise-ready tone', desc: 'Reception matches the polish your office expects.' },
        { icon: 'bi-people', title: 'Less office disruption', desc: 'Free your team from repetitive front desk interruptions.' },
        { icon: 'bi-shield-check', title: 'Structured escalation', desc: 'Security, hosts, and deliveries follow clear rules.' },
      ],
    },
    compare: {
      eyebrow: 'COMPARISON',
      eyebrowIcon: 'bi-bar-chart',
      title: 'Compare corporate reception models',
      lead: 'See how a premium remote desk can streamline office flow without losing the human touch.',
      columns: sharedCompareColumns,
      rows: [
        { feature: 'Meeting coordination', remote: 'check', inHouse: 'check', kiosk: 'x' },
        { feature: 'Host notifications', remote: 'check', inHouse: 'check', kiosk: 'x' },
        { feature: 'Delivery handling', remote: 'check', inHouse: 'warn', kiosk: 'x' },
        { feature: 'Scalable multi-site support', remote: 'check', inHouse: 'x', kiosk: 'warn' },
      ],
    },
    testimonials: {
      eyebrow: 'CLIENT LOVE',
      eyebrowIcon: 'bi-chat-square-heart',
      title: 'What office teams notice first',
      lead: 'Smoother host handoffs and a more composed lobby experience.',
      items: [
        { quote: 'We finally have a reception experience that feels consistent from morning to evening.', name: 'L. Kim', title: 'Office Operations', company: 'Global Corp', image: testimonialPortrait },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      eyebrowIcon: 'bi-question-circle',
      title: 'Corporate FAQs',
      lead: 'Common questions from office teams looking to reduce front desk overhead.',
      items: [
        { question: 'Can receptionists alert hosts on collaboration tools?', answer: 'Yes. We can adapt the notification flow to match your office communication preferences.' },
        { question: 'Do you support multiple office sites?', answer: 'Yes. The service can be scaled across locations with consistent reception standards.' },
      ],
    },
    resources: {
      eyebrow: 'RESOURCES',
      eyebrowIcon: 'bi-journal-text',
      title: 'Helpful corporate resources',
      lead: 'Planning notes and articles for teams modernizing their reception experience.',
      cards: sharedResources,
    },
  },
  governmentBuildings: {
    id: 'government-buildings',
    canonical: 'https://teamupconsultants.com/remote-front-desk/government-buildings',
    metaTitle: 'Secure Government Building Front Desk | Visitor Verification & Public Reception | Teamup',
    metaDescription: 'Remote front desk for government buildings with visitor verification, citizen assistance, checkpoint support, and secure public reception workflows. 24/7 support.',
    theme: sharedTheme,
    hero: {
      badge: 'SECURE PUBLIC RECEPTION',
      badgeIcon: 'bi-person-badge',
      titleTop: 'Remote Front Desk',
      titleBottom: 'FOR GOVERNMENT BUILDINGS',
      titleAccent: '',
      copy: 'Support citizens with a clear, secure reception flow that helps verify visitors, answer questions, and route people efficiently to the right place.',
      primaryCta: 'Book a Public Demo',
      secondaryCta: 'Hire a Front Desk Assistant',
      image: governmentImage,
      imageAlt: 'Government building reception visual',
      stats: sharedHeroStats,
      floatCards: sharedFloatCards,
    },
    features: [
      { icon: 'bi-person-check', title: 'Visitor verification', desc: 'Fast, secure handling of arrivals and access steps.' },
      { icon: 'bi-info-circle', title: 'Citizen assistance', desc: 'Helpful answers and clear direction for public visitors.' },
      { icon: 'bi-shield', title: 'Checkpoint support', desc: 'Workflows that support security procedures.' },
      { icon: 'bi-globe2', title: 'Public routing', desc: 'Send visitors to the right desk without confusion.' },
    ],
    intro: {
      eyebrow: 'PUBLIC RECEPTION',
      eyebrowIcon: 'bi-people',
      titleTop: 'A secure, citizen-friendly front desk for',
      titleBottom: 'public service buildings',
      lead: 'Designed for clarity and control, this reception flow helps public-facing teams move visitors efficiently while maintaining a professional tone.',
      cta: 'Explore the public workflow',
      image: govtImage,
      imageAlt: 'Government workflow visual',
      cards: [
        { icon: 'bi-stars', title: 'High-touch service', desc: 'Friendly reception scripts that still feel personal. Our team adapts tone and guidance to the public context so visitors feel respected and informed.' },
        { icon: 'bi-layout-text-window', title: 'Structured workflows', desc: 'Each arrival follows a clear, repeatable path. These workflows reduce confusion and help staff keep public lines moving efficiently.' },
        { icon: 'bi-bell', title: 'Instant routing', desc: 'Hosts and teams get notified the moment they should. Notifications include context so staff can respond quickly without interrupting other duties.' },
        { icon: 'bi-graph-up-arrow', title: 'Operational clarity', desc: 'Front desk data is easier to understand and improve. Clear metrics help administrators spot bottlenecks and refine public reception over time.' },
      ],
    },
    detail: {
      eyebrow: 'PUBLIC FOCUS',
      icon: 'bi-shield-lock',
      title: 'Reception workflows built for secure public service',
      lead: 'Ensure every visitor is verified, every direction is clear, and every checkpoint is respected.',
      cards: [
        { icon: 'bi-person-check', title: 'Visitor verification', desc: 'Confirm credentials and access requirements with a secure reception process.' },
        { icon: 'bi-info-circle', title: 'Citizen assistance', desc: 'Help visitors navigate services, locations, and questions with ease.' },
        { icon: 'bi-shield-lock', title: 'Security escalation', desc: 'Follow escalation protocols when a situation needs extra attention.' },
        { icon: 'bi-globe2', title: 'Public routing', desc: 'Guide visitors to the right desk, office, or waiting area without confusion.' },
      ],
    },
    process: {
      eyebrow: 'HOW IT WORKS',
      eyebrowIcon: 'bi-gear-wide-connected',
      title: 'Reception that supports public service delivery',
      lead: 'A structured arrival experience for visitors, citizens, and teams working in security-aware environments.',
      steps: sharedProcess,
    },
    demo: {
      eyebrow: 'DEMO VIDEO',
      eyebrowIcon: 'bi-camera-video',
      title: 'Watch the public reception journey',
      lead: 'See how verification and routing are handled cleanly for public-facing desks.',
      cta: 'Play demo',
      image: demoImage,
      imageAlt: 'Government demo screenshot',
      video: demoVideo,
    },
    why: {
      eyebrow: 'WHY TEAMS CHOOSE US',
      eyebrowIcon: 'bi-stars',
      title: 'Why government offices choose Teamup',
      lead: 'Clear, secure, and designed to support a steady public-facing flow.',
      cards: [
        { icon: 'bi-person-check', title: 'Public-facing ready', desc: 'Receptionists trained for calm and helpful citizen interactions.' },
        { icon: 'bi-shield-lock', title: 'Secure workflows', desc: 'Verification and escalation steps are easy to follow.' },
        { icon: 'bi-globe2', title: 'Accessible service', desc: 'Visitors get direction quickly and with less confusion.' },
      ],
    },
    compare: {
      eyebrow: 'COMPARISON',
      eyebrowIcon: 'bi-bar-chart',
      title: 'Compare public reception models',
      lead: 'A quick view of how Teamup compares to other front desk approaches in public spaces.',
      columns: sharedCompareColumns,
      rows: [
        { feature: 'Visitor verification', remote: 'check', inHouse: 'warn', kiosk: 'x' },
        { feature: 'Citizen assistance', remote: 'check', inHouse: 'warn', kiosk: 'x' },
        { feature: 'Security escalation', remote: 'check', inHouse: 'check', kiosk: 'x' },
        { feature: 'Predictable monthly cost', remote: 'check', inHouse: 'x', kiosk: 'check' },
      ],
    },
    testimonials: {
      eyebrow: 'CLIENT LOVE',
      eyebrowIcon: 'bi-chat-square-heart',
      title: 'What facility teams notice first',
      lead: 'Less friction at the door and a more consistent visitor experience.',
      items: [
        { quote: 'We reduced confusion at the entrance and improved service consistency right away.', name: 'J. Martinez', title: 'Facility Manager', company: 'Town Hall', image: testimonialPortrait },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      eyebrowIcon: 'bi-question-circle',
      title: 'Government FAQs',
      lead: 'Helpful answers for public-facing teams assessing remote front desk support.',
      items: [
        { question: 'Can you validate IDs?', answer: 'Yes. We can follow your provided verification workflow and capture the required details.' },
        { question: 'Do you support security escalation?', answer: 'Yes. Receptionists can follow your escalation procedures for high-priority cases.' },
      ],
    },
    resources: {
      eyebrow: 'RESOURCES',
      eyebrowIcon: 'bi-journal-text',
      title: 'Helpful public-sector resources',
      lead: 'Planning guides for teams balancing service quality with security awareness.',
      cards: sharedResources,
    },
  },
  coWorkingSpaces: {
    id: 'co-working-spaces',
    canonical: 'https://teamupconsultants.com/remote-front-desk/co-working-spaces',
    metaTitle: 'Premium Co-working Space Front Desk | Member Check-in & Reception | Teamup',
    metaDescription: 'Remote front desk solutions for co-working spaces with member check-in, guest registration, delivery management, and community-focused reception. Scale without hiring.',
    theme: sharedTheme,
    hero: {
      badge: 'COMMUNITY RECEPTION',
      badgeIcon: 'bi-people-fill',
      titleTop: 'Remote Front Desk',
      titleBottom: 'FOR CO-WORKING SPACES',
      titleAccent: '',
      copy: 'Keep the community feeling warm while making reception more scalable with member check-ins, guest registration, deliveries, and friendly support.',
      primaryCta: 'Book a Workspace Demo',
      secondaryCta: 'Hire a Front Desk Assistant',
      image: coworksImage,
      imageAlt: 'Co-working space reception visual',
      stats: sharedHeroStats,
      floatCards: sharedFloatCards,
    },
    features: [
      { icon: 'bi-person-plus', title: 'Member check-in', desc: 'Quick arrival support that keeps people moving.' },
      { icon: 'bi-person-lines-fill', title: 'Guest registration', desc: 'A simple process for visitors and host notifications.' },
      { icon: 'bi-box', title: 'Delivery handling', desc: 'Packages are logged and members are informed.' },
      { icon: 'bi-chat-dots', title: 'Community support', desc: 'Friendly help that keeps the vibe of the space intact.' },
    ],
    intro: {
      eyebrow: 'COMMUNITY RECEPTION',
      eyebrowIcon: 'bi-people',
      titleTop: 'A member-first front desk for',
      titleBottom: 'busy collaborative spaces',
      lead: 'The best co-working reception feels welcoming without slowing anyone down. This flow helps you manage guests and deliveries while keeping the experience polished.',
      cta: 'Book a Demo',
      secondaryCta: 'Explore Member Journey',
      image: whatweofferImage,
      imageAlt: 'Co-working workflow visual',
      trustDivider: 'Trusted by modern coworking spaces',
      trustPoints: [
        'Personalized reception',
        'Real-time member alerts',
        'Visitor management',
        'Privacy-first workflow',
      ],
      cards: [
        {
          icon: 'bi-stars',
          title: 'Premium reception experience',
          desc: 'Every member and guest arrives through a thoughtful desk flow that feels warm and professional.',
          bullets: ['Tailored member greetings', 'Visitor check-in guidance', 'Brand-aligned reception energy'],
        },
        {
          icon: 'bi-layout-text-window',
          title: 'Real-time member alerts',
          desc: 'Members and hosts receive the right notification the moment a guest, delivery, or call arrives.',
          bullets: ['Instant mobile alerts', 'Host-ready visitor summaries', 'Delivered with urgency and care'],
        },
        {
          icon: 'bi-bell',
          title: 'Seamless visitor routing',
          desc: 'Guest flows stay on pace with clear check-in, host notification, and delivery handoff.',
          bullets: ['Fast guest registration', 'Package logging and alerts', 'Smooth meeting handoffs'],
        },
        {
          icon: 'bi-graph-up-arrow',
          title: 'Intelligent workspace insights',
          desc: 'Actionable reception data lets you improve service, reduce bottlenecks, and protect your space.',
          bullets: ['Member arrival trends', 'Peak-hour visibility', 'Desk performance signals'],
        },
      ],
    },
    detail: {
      eyebrow: 'COMMUNITY FOCUS',
      icon: 'bi-people',
      title: 'Reception that keeps shared spaces welcoming and efficient',
      lead: 'Scale member check-ins, guest registration, and deliveries with a friendly, repeatable front desk flow.',
      cards: [
        { icon: 'bi-person-plus', title: 'Member check-in', desc: 'Warm, fast welcome for members and frequent visitors.' },
        { icon: 'bi-person-lines-fill', title: 'Guest registration', desc: 'Smooth sign-in for guests, contractors, and event attendees.' },
        { icon: 'bi-box', title: 'Delivery coordination', desc: 'Package handling that keeps members informed and lobby areas clear.' },
        { icon: 'bi-calendar2-event', title: 'Event support', desc: 'Manage workshops, meetups, and guest lists with ease.' },
      ],
    },
    process: {
      eyebrow: 'HOW IT WORKS',
      eyebrowIcon: 'bi-gear-wide-connected',
      title: 'A reception flow built for shared spaces',
      lead: 'Keep members moving and guests feeling welcomed with a clear, repeatable desk process.',
      steps: sharedProcess,
    },
    demo: {
      eyebrow: 'DEMO VIDEO',
      eyebrowIcon: 'bi-camera-video',
      title: 'Watch the co-working reception journey',
      lead: 'See how guest handling and delivery coordination can stay friendly without becoming chaotic.',
      cta: 'Play demo',
      image: demoImage,
      imageAlt: 'Co-working demo screenshot',
      video: demoVideo,
    },
    why: {
      eyebrow: 'WHY SPACES CHOOSE US',
      eyebrowIcon: 'bi-stars',
      title: 'Why co-working spaces choose Teamup',
      lead: 'A smoother front desk that protects community energy while scaling reception.',
      cards: [
        { icon: 'bi-people-fill', title: 'Community first', desc: 'Friendly, attentive support that feels right for shared spaces.' },
        { icon: 'bi-box', title: 'Delivery friendly', desc: 'Simple logging and easy member notification flows.' },
        { icon: 'bi-calendar2-event', title: 'Event ready', desc: 'Guest lists and event check-ins stay organized and calm.' },
      ],
    },
    compare: {
      eyebrow: 'COMPARISON',
      eyebrowIcon: 'bi-bar-chart',
      title: 'Compare co-working reception models',
      lead: 'A quick side-by-side view for spaces that want a polished, scalable desk experience.',
      columns: sharedCompareColumns,
      rows: [
        { feature: 'Member check-in', remote: 'check', inHouse: 'check', kiosk: 'x' },
        { feature: 'Delivery handling', remote: 'check', inHouse: 'warn', kiosk: 'x' },
        { feature: 'Event support', remote: 'check', inHouse: 'warn', kiosk: 'x' },
        { feature: 'Community-friendly service', remote: 'check', inHouse: 'warn', kiosk: 'x' },
      ],
    },
    testimonials: {
      eyebrow: 'CLIENT LOVE',
      eyebrowIcon: 'bi-chat-square-heart',
      title: 'What community teams notice first',
      lead: 'The desk feels more consistent, and members still get a warm welcome.',
      items: [
        { quote: 'Members love the friendly front desk and how quickly deliveries are handled now.', name: 'S. Patel', title: 'Community Manager', company: 'Workspace Hub', image: testimonialPortrait },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      eyebrowIcon: 'bi-question-circle',
      title: 'Co-working FAQs',
      lead: 'Helpful questions for shared-space operators looking to upgrade the front desk.',
      items: [
        { question: 'Can you take photos of deliveries?', answer: 'Yes. The reception workflow can include delivery logging and member notification steps.' },
        { question: 'Do you support event check-ins?', answer: 'Yes. We can help manage guest lists and event arrivals with a clean flow.' },
      ],
    },
    resources: {
      eyebrow: 'RESOURCES',
      eyebrowIcon: 'bi-journal-text',
      title: 'Helpful workspace resources',
      lead: 'Articles and guides for operators who want a more polished shared-space welcome.',
      cards: sharedResources,
    },
  },
}

export default rfdConfigs
