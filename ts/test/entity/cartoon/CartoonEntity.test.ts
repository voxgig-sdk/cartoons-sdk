

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CartoonsSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CartoonEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CARTOONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CARTOONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CartoonsSDK.test()
    const ent = testsdk.Cartoon()
    assert(null != ent)
  })




  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CARTOONS_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cartoon.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"creator":{"a":true,"h":"Creator","n":"creator","r":false,"sh":"Creator(s) of the cartoon","t":"`$ARRAY`","key$":"creator","index$":0},"episodes":{"a":true,"h":"Episodes","n":"episodes","r":false,"sh":"Number of episodes","t":"`$INTEGER`","key$":"episodes","index$":1},"genre":{"a":true,"h":"Genre","n":"genre","r":false,"sh":"Genre(s) of the cartoon","t":"`$ARRAY`","key$":"genre","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the cartoon","t":"`$INTEGER`","key$":"id","index$":3},"image":{"a":true,"fo":"uri","h":"Image","n":"image","r":false,"sh":"URL to the cartoon's image","t":"`$STRING`","key$":"image","index$":4},"rating":{"a":true,"h":"Rating","n":"rating","r":false,"sh":"Rating of the cartoon","t":"`$STRING`","key$":"rating","index$":5},"runtime_in_minutes":{"a":true,"h":"Runtime In Minutes","n":"runtime_in_minutes","r":false,"sh":"Runtime of the cartoon episode in minutes","t":"`$INTEGER`","key$":"runtime_in_minutes","index$":6},"title":{"a":true,"h":"Title","n":"title","r":false,"sh":"Title of the cartoon","t":"`$STRING`","key$":"title","index$":7},"year":{"a":true,"h":"Year","n":"year","r":false,"sh":"Year the cartoon was released","t":"`$INTEGER`","key$":"year","index$":8}},"id":{"field":"id","name":"id"},"name":"cartoon","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /cartoons/cartoons2D","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/cartoons/cartoons2D","q":{"$action":"cartoons2_d"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"cartoons"},{"lit":"cartoons2D"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /cartoons/cartoons3D","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/cartoons/cartoons3D","q":{"$action":"cartoons3_d"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"cartoons"},{"lit":"cartoons3D"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"cartoon","name__orig":"cartoon","Name":"Cartoon","name_":"cartoon","name-":"cartoon","NAME":"CARTOON","index$":0}, {"active":true,"entity":"cartoon","key$":"BasicCartoonFlow","kind":"basic","name":"BasicCartoonFlow","param":{},"step":[{"a":false,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"cartoon_ref01"}}],"unreachable":true}]}, 'Cartoon', {"GET /cartoons/cartoons2D":{"protocol":"http","parameters":[]},"GET /cartoons/cartoons3D":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cartoon_ref01_data = Object.values(setup.data.existing.cartoon)[0] as any

  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cartoon/CartoonTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CartoonsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['cartoon01','cartoon02','cartoon03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CARTOONS_TEST_CARTOON_ENTID': idmap,
    'CARTOONS_TEST_LIVE': 'FALSE',
    'CARTOONS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CARTOONS_TEST_CARTOON_ENTID']

  const live = 'TRUE' === env.CARTOONS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CARTOONS_TEST_CARTOON_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CartoonsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CARTOONS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
