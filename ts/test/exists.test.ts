
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CartoonsSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await CartoonsSDK.test()
    equal(null !== testsdk, true)
  })

})
