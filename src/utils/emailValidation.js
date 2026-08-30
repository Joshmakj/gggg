const personalEmailDomains = new Set([
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'yahoo.co.uk',
  'outlook.com',
  'hotmail.com',
  'live.com',
  'msn.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'proton.me',
  'protonmail.com',
  'aol.com',
  'gmx.com',
  'mail.com',
  'yandex.com',
]);

const getEmailDomain = (email) => email.trim().toLowerCase().split('@').pop();

export const isPersonalEmail = (email) => personalEmailDomains.has(getEmailDomain(email));

export const isWorkEmail = (email) => !isPersonalEmail(email);
