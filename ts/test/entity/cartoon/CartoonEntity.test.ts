

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CartoonsSDK, BaseFeature, stdutil } from '../../..'

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cartoon.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"creator","req":false,"short":"Creator(s) of the cartoon","type":"`$ARRAY`","index$":0},{"active":true,"name":"episodes","req":false,"short":"Number of episodes","type":"`$INTEGER`","index$":1},{"active":true,"name":"genre","req":false,"short":"Genre(s) of the cartoon","type":"`$ARRAY`","index$":2},{"active":true,"name":"id","req":false,"short":"Unique identifier for the cartoon","type":"`$INTEGER`","index$":3},{"active":true,"format":"uri","name":"image","req":false,"short":"URL to the cartoon's image","type":"`$STRING`","index$":4},{"active":true,"name":"rating","req":false,"short":"Rating of the cartoon","type":"`$STRING`","index$":5},{"active":true,"name":"runtime_in_minutes","req":false,"short":"Runtime of the cartoon episode in minutes","type":"`$INTEGER`","index$":6},{"active":true,"name":"title","req":false,"short":"Title of the cartoon","type":"`$STRING`","index$":7},{"active":true,"name":"year","req":false,"short":"Year the cartoon was released","type":"`$INTEGER`","index$":8}],"id":{"field":"id","name":"id"},"name":"cartoon","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /cartoons/cartoons2D","json":"{\"operationId\":\"get2DCartoons\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"creator\":{\"description\":\"Creator(s) of the cartoon\",\"example\":[\"Stephen Hillenburg\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"episodes\":{\"description\":\"Number of episodes\",\"example\":272,\"type\":\"integer\"},\"genre\":{\"description\":\"Genre(s) of the cartoon\",\"example\":[\"Comedy\",\"Family\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"Unique identifier for the cartoon\",\"example\":1,\"type\":\"integer\"},\"image\":{\"description\":\"URL to the cartoon's image\",\"example\":\"https://example.com/image.jpg\",\"format\":\"uri\",\"type\":\"string\"},\"rating\":{\"description\":\"Rating of the cartoon\",\"example\":\"TV-Y7\",\"type\":\"string\"},\"runtime_in_minutes\":{\"description\":\"Runtime of the cartoon episode in minutes\",\"example\":23,\"type\":\"integer\"},\"title\":{\"description\":\"Title of the cartoon\",\"example\":\"SpongeBob SquarePants\",\"type\":\"string\"},\"year\":{\"description\":\"Year the cartoon was released\",\"example\":1999,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/cartoons/cartoons2D","segments":[{"lit":"cartoons"},{"lit":"cartoons2D"}],"select":{"$action":"cartoons2_d"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"GET /cartoons/cartoons3D","json":"{\"operationId\":\"get3DCartoons\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"creator\":{\"description\":\"Creator(s) of the cartoon\",\"example\":[\"Stephen Hillenburg\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"episodes\":{\"description\":\"Number of episodes\",\"example\":272,\"type\":\"integer\"},\"genre\":{\"description\":\"Genre(s) of the cartoon\",\"example\":[\"Comedy\",\"Family\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"Unique identifier for the cartoon\",\"example\":1,\"type\":\"integer\"},\"image\":{\"description\":\"URL to the cartoon's image\",\"example\":\"https://example.com/image.jpg\",\"format\":\"uri\",\"type\":\"string\"},\"rating\":{\"description\":\"Rating of the cartoon\",\"example\":\"TV-Y7\",\"type\":\"string\"},\"runtime_in_minutes\":{\"description\":\"Runtime of the cartoon episode in minutes\",\"example\":23,\"type\":\"integer\"},\"title\":{\"description\":\"Title of the cartoon\",\"example\":\"SpongeBob SquarePants\",\"type\":\"string\"},\"year\":{\"description\":\"Year the cartoon was released\",\"example\":1999,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/cartoons/cartoons3D","segments":[{"lit":"cartoons"},{"lit":"cartoons3D"}],"select":{"$action":"cartoons3_d"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"cartoon","name__orig":"cartoon","Name":"Cartoon","name_":"cartoon","name-":"cartoon","NAME":"CARTOON","index$":0}, {"active":true,"entity":"cartoon","key$":"BasicCartoonFlow","kind":"basic","name":"BasicCartoonFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"cartoon_ref01"}}],"index$":0}]}, 'Cartoon')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cartoon_ref01_data = Object.values(setup.data.existing.cartoon)[0] as any

    // LIST
    const cartoon_ref01_ent = client.Cartoon()
    const cartoon_ref01_match: any = {}

    const cartoon_ref01_list = (await cartoon_ref01_ent.list(cartoon_ref01_match)).map((e: any) => e.data())


  })
})



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
  
