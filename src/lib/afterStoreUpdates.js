export const error = 'Mocha React Feature Spec Error'

// function attemptPredicate (store, predicate) {
//   const state = store.getState()
//   predicate(state)
//   return state
// }

export default function afterStoreUpdates (store, predicate) {
  return new Promise(function (accept) {
    try {
      console.log('find the predicate')
      console.log(predicate)
      if (predicate) console.log(predicate.toString())
      // const state = attemptPredicate(store, predicate)
      const state = store.getState()
      predicate(state)
      accept(state)
    } catch (err) {
      console.error(`There was an error in your spec: ${err}`)
      global[error] = err

      const unsubscribe = store.subscribe(function () {
        try {
          console.log('find the predicate')
          console.log(predicate)
          if (predicate) console.log(predicate.toString())
          // const state = attemptPredicate(store, predicate)
          const state = store.getState()
          predicate(state)
          unsubscribe()
          accept(state)
        } catch (actionError) {
          console.error(`There was an error in your spec: ${err}`)
          global[error] = actionError
        }
      })
    }
  })
}
