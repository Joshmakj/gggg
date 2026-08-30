import RemoteFrontDeskCategoryPage from '../../components/RemoteFrontDeskCategoryPage'
import { rfdConfigs } from './rfdConfigs'

export default function CorporateOffices(props) {
  return <RemoteFrontDeskCategoryPage config={rfdConfigs.corporateOffices} {...props} />
}
