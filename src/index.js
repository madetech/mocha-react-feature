import scenarioGenerator from './lib/scenarioGenerator'

export default function createFeature (createWrapperAndStore) {
  return function feature (name, cb) {
    return describe('Feature', function () {
      const scenario = scenarioGenerator(createWrapperAndStore)
      describe(name, cb.bind(this, scenario))
    })
  }
}
