import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "cartoon",
    "accessor": "Cartoon",
    "op": "list",
    "method": "GET",
    "path": "/cartoons/cartoons2D",
    "action": "cartoons2_d",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "title": "SpongeBob SquarePants",
        "year": 1999,
        "creator": [
          "Stephen Hillenburg"
        ],
        "rating": "TV-Y7",
        "genre": [
          "Comedy",
          "Family"
        ],
        "runtime_in_minutes": 23,
        "episodes": 272,
        "image": "https://example.com/image.jpg"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "cartoon",
    "accessor": "Cartoon",
    "op": "list",
    "method": "GET",
    "path": "/cartoons/cartoons3D",
    "action": "cartoons3_d",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "title": "SpongeBob SquarePants",
        "year": 1999,
        "creator": [
          "Stephen Hillenburg"
        ],
        "rating": "TV-Y7",
        "genre": [
          "Comedy",
          "Family"
        ],
        "runtime_in_minutes": 23,
        "episodes": 272,
        "image": "https://example.com/image.jpg"
      }
    ],
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
