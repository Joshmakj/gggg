import RemoteFrontDeskCategoryPage from '../../components/RemoteFrontDeskCategoryPage'
import { rfdConfigs } from './rfdConfigs'

export default function LawFirms(props) {
  return <RemoteFrontDeskCategoryPage config={rfdConfigs.lawFirms} {...props} />
}
