import Spec from 'mocha/lib/reporters/spec'
import { inherits } from 'util'
import { error } from './lib/afterStoreUpdates'

function Reporter (runner) {
  Spec.call(this, runner)

  runner.removeAllListeners('fail')
  runner.on('fail', (test, err) => {
    this.stats.failures = this.stats.failures || 0
    this.stats.failures++
    test.err = global[error] || err
    this.failures.push(test)
  })
}

inherits(Reporter, Spec)
module.exports = Reporter
