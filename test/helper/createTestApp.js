import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import createHistory from 'react-router/lib/createMemoryHistory'

export default function createTestApp (store) {
  const memoryHistory = createHistory()
  const App = () => <div />
  const Users = () => <div>Users</div>

  return (
    <Provider store={store} key="provider">
      <Router history={memoryHistory}>
        <Route path="/" component={App} />
        <Route path="/users" component={Users} />
      </Router>
    </Provider>
  )
}
