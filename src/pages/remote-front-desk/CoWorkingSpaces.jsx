import RemoteFrontDeskCategoryPage from '../../components/RemoteFrontDeskCategoryPage'
import { rfdConfigs } from './rfdConfigs'

export default function CoWorkingSpaces(props) {
  return <RemoteFrontDeskCategoryPage config={rfdConfigs.coWorkingSpaces} {...props} />
}
