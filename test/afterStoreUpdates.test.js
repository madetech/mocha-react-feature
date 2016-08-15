import { expect } from 'chai'
import afterStoreUpdates, { error } from '../src/lib/afterStoreUpdates'
import createTestStore from './helper/createTestStore'

describe('afterStoreUpdates', function () {
  it('waits until the predicate passes before resolving the test', function (done) {
    const store = createTestStore()
    const predicate = () => expect(store.getState().counter.count).to.eq(1)
    afterStoreUpdates(store, predicate).then(() => done())
    store.dispatch({ type: 'INCREMENT' })
  })

  it('catches errors', function (done) {
    const store = createTestStore()
    const predicate = () => expect(global[error]).to.not.eq(undefined)
    afterStoreUpdates(store, predicate).then(() => done())
    store.dispatch({ type: 'INCREMENT' }) // will make the predicate fail, defining global[error]
    store.dispatch({ type: 'INCREMENT' }) // will make the predicate succeed
  })
})
