
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CartoonsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CartoonsSDK.test()
    equal(testsdk instanceof CartoonsSDK, true,
      'CartoonsSDK.test() must return a client synchronously')
  })

})
