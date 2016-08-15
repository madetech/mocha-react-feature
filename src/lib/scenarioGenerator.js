import afterStoreUpdates from './afterStoreUpdates'
import pageWrapper from './pageWrapper'

export default function scenarioGenerator (createWrapperAndStore) {
  return function (message, generator) {
    return it(message, function (done) {
      const [wrapper, store] = createWrapperAndStore()
      const page = pageWrapper(wrapper, store)
      const iterator = generator(page, store)

      const next = () => {
        const result = iterator.next()
        if (result.done) done()

        afterStoreUpdates(store, result.value).then(() => next())
      }

      return next()
    })
  }
}
