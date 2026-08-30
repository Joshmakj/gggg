import RemoteFrontDeskCategoryPage from '../../components/RemoteFrontDeskCategoryPage'
import { rfdConfigs } from './rfdConfigs'

export default function MedicalClinics(props) {
  return <RemoteFrontDeskCategoryPage config={rfdConfigs.medicalClinics} {...props} />
}
