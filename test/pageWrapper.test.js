import { expect } from 'chai'
import afterStoreUpdates from '../src/lib/afterStoreUpdates'
import createPageWrapper from './helper/createPageAndStore'

describe('pageWrapper', function () {
  describe('body', function () {
    it('stores the enzyme wrapper', function () {
      const [page] = createPageWrapper()
      expect(page.body.html()).to.be.eq('<div></div>')
    })
  })

  describe('visit', function (done) {
    it('changes the page', function () {
      const [page, store] = createPageWrapper()
      const predicate = () => expect(page.body.html()).to.be.eq('<div>Users</div>')
      afterStoreUpdates(store, predicate).then(() => done())
      page.visit('/test')
    })
  })
})
