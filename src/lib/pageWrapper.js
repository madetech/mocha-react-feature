import { push } from 'react-router-redux'

export default function pageWrapper (wrapper, store) {
  const page = {}

  page.body = wrapper
  page.visit = (...args) => store.dispatch(push(...args))
  page.click = (selector) => page.body.find(selector).simulate('click')

  return page
}
