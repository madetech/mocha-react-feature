import { mount } from 'enzyme'
import pageWrapper from '../../src/lib/pageWrapper'
import createTestStore from './createTestStore'
import createTestApp from './createTestApp'

export default function () {
  const store = createTestStore()
  const wrapper = mount(createTestApp(store))
  const page = pageWrapper(wrapper, store)

  return [page, store]
}
