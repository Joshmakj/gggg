/**
 * Creates the two Google Forms used by the cybersecurity resource pages.
 *
 * Run createCybersecurityForms() once from script.google.com while signed in
 * to the Google account that should own the forms. The execution log contains
 * the public form URLs and the response URLs needed by the website.
 */
function createCybersecurityForms() {
  const careerForm = FormApp.create('Cybersecurity Career Resources');
  careerForm.setDescription(
    'Tell us where you are in your cybersecurity career and we will share practical resources for your next step.'
  );
  careerForm.addTextItem().setTitle('First name').setRequired(true);
  careerForm.addTextItem().setTitle('Email address').setRequired(true);
  careerForm.addTextItem().setTitle('Target cybersecurity role').setRequired(false);
  careerForm.addMultipleChoiceItem()
    .setTitle('Experience level')
    .setChoiceValues(['Beginner / Entry level', '1-3 years', '3-5 years', '5+ years'])
    .setRequired(false);
  careerForm.addMultipleChoiceItem()
    .setTitle('Career focus')
    .setChoiceValues([
      'Starting a cybersecurity career',
      'Transitioning into cybersecurity',
      'Finding a new cybersecurity role',
      'Improving my resume / LinkedIn',
      'Preparing for interviews',
      'Developing cybersecurity skills',
    ])
    .setRequired(true);

  const hiringForm = FormApp.create('Cybersecurity Hiring Manager Resources');
  hiringForm.setDescription(
    'Tell us what you are hiring for and we will share practical cybersecurity hiring resources.'
  );
  hiringForm.addTextItem().setTitle('Your name').setRequired(true);
  hiringForm.addTextItem().setTitle('Work email').setRequired(true);
  hiringForm.addTextItem().setTitle('Company').setRequired(false);
  hiringForm.addMultipleChoiceItem()
    .setTitle('What are you hiring for?')
    .setChoiceValues([
      'SOC Analyst',
      'Cloud Security Engineer',
      'Security Engineer',
      'GRC Professional',
      'Cybersecurity Manager',
      'Other Cybersecurity Role',
    ])
    .setRequired(true);

  Logger.log('Career form: ' + careerForm.getPublishedUrl());
  Logger.log('Hiring-manager form: ' + hiringForm.getPublishedUrl());
}

/**
 * Links the already-created forms to separate Google Sheets response files.
 * Run this once after createCybersecurityForms().
 */
function connectCybersecurityFormsToSheets() {
  const careerForm = FormApp.openByUrl(
    'https://docs.google.com/forms/d/e/1FAIpQLSdML14c71dOIRzJp3ARXKerH1IqyX6QQv70VdeQduJAqi6_pQ/viewform'
  );
  const hiringForm = FormApp.openByUrl(
    'https://docs.google.com/forms/d/e/1FAIpQLSfE7zK4IX_RHD99FgrhlYPQmj0yhBeRuA2n_78SfYzf3_twXQ/viewform'
  );

  const careerSheet = SpreadsheetApp.create('Cybersecurity Career Form Responses');
  const hiringSheet = SpreadsheetApp.create('Cybersecurity Hiring Manager Form Responses');

  careerForm.setDestination(FormApp.DestinationType.SPREADSHEET, careerSheet.getId());
  hiringForm.setDestination(FormApp.DestinationType.SPREADSHEET, hiringSheet.getId());

  Logger.log('Career responses sheet: ' + careerSheet.getUrl());
  Logger.log('Hiring-manager responses sheet: ' + hiringSheet.getUrl());
}
