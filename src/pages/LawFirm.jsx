import React from 'react';
import RemoteFrontDeskCategoryPage from '../components/RemoteFrontDeskCategoryPage';
import { rfdConfigs } from './remote-front-desk/rfdConfigs';

const LawFirm = () => {
  return <RemoteFrontDeskCategoryPage config={rfdConfigs.lawFirms} />;
};

export default LawFirm;
