import { push } from 'react-router-redux'

const simulator = (wrapper, eventName) =>
  (selector, options = {}) =>
    wrapper.find(selector).simulate(eventName, options)

export default function pageWrapper (wrapper, store) {
  const page = {
    body: wrapper
  }

  page.visit = (...args) =>
    store.dispatch(push(...args))

  page.click = simulator(page.body, 'click')
  page.dblclick = simulator(page.body, 'dblclick')

  page.change = (selector, value) => {
    console.log('TRYING TO FIND SELECTOR')
    const input = page.body.find(selector)
    console.log('FOUND SELECTOR', input)
    input.get(0).value = value
    input.first().simulate('change', { target: { value } })
  }

  page.pressEnter = selector =>
    page.body.find(selector).simulate('keydown', { keyCode: 13 })

  page.toggle = selector => {
    const element = page.body.find(selector)
    const checked = element.is('[checked]')
    element.simulate('change', { target: { checked: !checked } })
  }

  return page
}
