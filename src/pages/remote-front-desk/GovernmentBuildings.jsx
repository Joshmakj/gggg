import RemoteFrontDeskCategoryPage from '../../components/RemoteFrontDeskCategoryPage'
import { rfdConfigs } from './rfdConfigs'

export default function GovernmentBuildings(props) {
  return <RemoteFrontDeskCategoryPage config={rfdConfigs.governmentBuildings} {...props} />
}
