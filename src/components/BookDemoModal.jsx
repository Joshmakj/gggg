import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Componetcss/HeroFrontDesk.css';

const GOOGLE_FORM_URL = import.meta.env.VITE_FRONTDESK_GOOGLE_FORM_URL;
const GOOGLE_FORM_FIELDS = {
  fullName: 'entry.1234567890',
  workEmail: 'entry.2345678901',
  companyName: 'entry.3456789012',
  service: 'entry.4567890123',
  location: 'entry.5678901234',
  visitors: 'entry.6789012345',
  notes: 'entry.7890123456',
};

const CATEGORIES = [
  { value: 'government-buildings', label: 'Government buildings' },
  { value: 'medical-clinics', label: 'Medical clinics' },
  { value: 'corporate-offices', label: 'Corporate offices' },
  { value: 'co-working-spaces', label: 'Co‑working spaces' },
  { value: 'law-firms', label: 'Law firms' },
  { value: 'other', label: 'Other' },
];

const BookDemoModal = ({ isOpen = false, onClose = () => {}, initialService = 'demo', initialCategory = '' }) => {
  const getInitialFormState = () => ({
    fullName: '',
    workEmail: '',
    companyName: '',
    service: initialService || 'demo',
    category: initialCategory || '',
    categoryOther: '',
    location: '',
    visitors: '',
    notes: '',
    captcha: '',
  });

  const [formData, setFormData] = useState(getInitialFormState);
  const [formErrors, setFormErrors] = useState({});
  const scrollYRef = React.useRef(0);
  const modalDialogRef = React.useRef(null);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      scrollYRef.current = window.scrollY || window.pageYOffset || 0;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      body.style.position = 'fixed';
      body.style.top = `-${scrollYRef.current}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.width = '100%';
      body.style.overflow = 'hidden';
      body.style.paddingRight = scrollbarWidth ? `${scrollbarWidth}px` : '';
      setFormData(getInitialFormState());
      setFormErrors({});
    } else {
      const scrollY = scrollYRef.current;
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      body.style.overflow = '';
      body.style.paddingRight = '';
      window.scrollTo(0, scrollY);
    }
    return () => {
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      body.style.overflow = '';
      body.style.paddingRight = '';
    };
  }, [isOpen, initialService, initialCategory]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
    setFormErrors((errs) => ({ ...errs, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your full name.';
    if (!formData.workEmail.trim()) errors.workEmail = 'Please enter your work email.';
    if (!formData.companyName.trim()) errors.companyName = 'Please enter your company name.';
    if (!formData.category.trim()) errors.category = 'Please select your category.';
    if (formData.category === 'other' && !formData.categoryOther.trim()) errors.categoryOther = 'Please specify your category.';
    if (!formData.visitors.trim()) errors.visitors = 'Please select expected daily visitors.';
    setFormErrors(errors);
    if (Object.keys(errors).length) return;

    if (!GOOGLE_FORM_URL) {
      setFormErrors({ form: 'Google Form URL is not configured.' });
      return;
    }

    try {
      const formBody = new FormData();
      formBody.append('fvv', '1');
      formBody.append('pageHistory', '0');
      formBody.append('fbzx', Date.now().toString());
      formBody.append(GOOGLE_FORM_FIELDS.fullName, formData.fullName);
      formBody.append(GOOGLE_FORM_FIELDS.workEmail, formData.workEmail);
      formBody.append(GOOGLE_FORM_FIELDS.companyName, formData.companyName);
      // Encode service/category into the mapped service field.
      const serviceValue = formData.category === 'other' && formData.categoryOther ? formData.categoryOther : formData.category || formData.service;
      formBody.append(GOOGLE_FORM_FIELDS.service, serviceValue);
      formBody.append(GOOGLE_FORM_FIELDS.location, formData.location);
      formBody.append(GOOGLE_FORM_FIELDS.visitors, formData.visitors);
      formBody.append(GOOGLE_FORM_FIELDS.notes, formData.notes || '');

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formBody,
      });

      onClose();
      setFormData(getInitialFormState());
      window.alert('Thanks! We�ll reach out shortly.');
    } catch (error) {
      console.error('Google Form submit error:', error);
      setFormErrors({ form: 'Unable to submit form right now. Please try again later.' });
    }
  };

  if (!isOpen) return null;
  const isCoworking = (initialService === 'coworking') || formData.service === 'coworking'
  const isHire = formData.service === 'hire'

  return (
    <div
      className="rfd-modal"
      role="dialog"
      aria-modal="true"
      aria-label={isCoworking ? 'Book a co-working demo' : isHire ? 'Hire a front desk assistant' : 'Book a demo'}
    >
      <div className="rfd-modal__backdrop" onClick={onClose} aria-hidden="true" />
      <div className="rfd-modal__dialog rfd-modal__dialog--large" ref={modalDialogRef}>
        <button type="button" className="rfd-modal__close" onClick={onClose} aria-label="Close form">
          <i className="bi bi-x-lg" aria-hidden="true" />
        </button>
        <div className="rfd-modal__body">
          <div className="rfd-modal__eyebrow">
            {isCoworking ? 'Co‑working demo' : isHire ? 'Hire a Front Desk Assistant' : 'Schedule a Demo'}
          </div>
          <h2 className="rfd-modal__title">
            {isCoworking
              ? 'Book a co‑working demo'
              : isHire
              ? 'Request a Front Desk Assistant'
              : 'Book a Demo'}
          </h2>
          <p className="rfd-modal__copy">
            {isCoworking
              ? "Request a tailored demo for co-working spaces - member check-ins, guest handling, and community reception workflows."
              : isHire
              ? "Tell us about your reception needs and we'll connect you with a remote front desk assistant for your category."
              : "Share a few details and we'll reach out to schedule a demo at your convenience."}
          </p>

          <form className="rfd-modal__form" onSubmit={handleSubmit} noValidate>
            <label className="rfd-field rfd-field--full">
              <span>Category*</span>
              <select name="category" value={formData.category} onChange={handleChange}>
                <option value="">Select a category...</option>
                {CATEGORIES.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
              {formErrors.category && <div className="rfd-field__error">{formErrors.category}</div>}
            </label>
            {formData.category === 'other' && (
              <label className="rfd-field rfd-field--full">
                <span>Please specify</span>
                <input type="text" name="categoryOther" value={formData.categoryOther} onChange={handleChange} placeholder="Describe your category" />
              </label>
            )}
            <div className="rfd-form-grid">
              <label className="rfd-field">
                <span>Full Name*</span>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" />
                {formErrors.fullName && <div className="rfd-field__error">{formErrors.fullName}</div>}
              </label>

              <label className="rfd-field">
                <span>Work Email*</span>
                <input type="email" name="workEmail" value={formData.workEmail} onChange={handleChange} placeholder="name@company.com" />
                {formErrors.workEmail && <div className="rfd-field__error">{formErrors.workEmail}</div>}
              </label>

              <label className="rfd-field">
                <span>Company Name*</span>
                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Your company or organization" />
                {formErrors.companyName && <div className="rfd-field__error">{formErrors.companyName}</div>}
              </label>

              <label className="rfd-field rfd-field--full">
                <span>Location / Office Type*</span>
                <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder={isCoworking ? "e.g., Downtown co‑working space, 3rd-floor reception" : "e.g., Corporate HQ, Medical Clinic, Co-working Space"} />
              </label>
            </div>
            <fieldset className="rfd-fieldset">
              <legend>Service of Interest*</legend>
              <div className="rfd-radio-group rfd-radio-group--pill">
                <label className={`rfd-radio-label is-active`}>
                  <input type="radio" name="service" value={formData.service} checked={true} readOnly />
                  <span>
                    {isCoworking ? 'Co‑working demo' : isHire ? 'Hire a Front Desk Assistant' : 'Schedule a Demo'}
                  </span>
                </label>
              </div>
            </fieldset>

            <div className="rfd-form-grid rfd-form-grid--two">
              <label className="rfd-field">
                <span>Expected Daily Visitors*</span>
                <select name="visitors" value={formData.visitors} onChange={handleChange}>
                  <option value="">Select...</option>
                  <option value="0-10">0-10</option>
                  <option value="10-50">10-50</option>
                  <option value="50+">50+</option>
                </select>
                {formErrors.visitors && <div className="rfd-field__error">{formErrors.visitors}</div>}
              </label>

              <label className="rfd-field">
                <span>Quick Message</span>
                <input type="text" name="notes" value={formData.notes} onChange={handleChange} placeholder="Optional note or visitor details" />
              </label>
            </div>

            <div className="rfd-captcha-row">
              <label className="rfd-field rfd-field--compact">
                <span>Security Check</span>
                <input type="text" name="captcha" value={formData.captcha} onChange={handleChange} placeholder="0 + 1 = ?" />
              </label>
              <button type="button" className="rfd-captcha-refresh" aria-label="Refresh captcha">?</button>
            </div>

            <button type="submit" className="rfd-modal__submit rfd-modal__submit--wide">{isCoworking ? 'Request co‑working demo' : 'Get a Custom Quote'}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDemoModal;

