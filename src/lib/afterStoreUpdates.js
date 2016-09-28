export const error = 'Mocha React Feature Spec Error'

export default function afterStoreUpdates (store, predicate) {
  return new Promise(function (accept) {
    const unsubscribe = store.subscribe(function () {
      const state = store.getState()

      try {
        predicate(state)
        unsubscribe()
        accept(state)
      } catch (err) {
        global[error] = err
      }
    })
  })
}
