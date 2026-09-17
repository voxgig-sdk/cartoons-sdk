
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Cartoons',
        slug: "cartoons",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://api.sampleapis.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        cartoon: {
        },
  
    }
  }


  entity = {
    "cartoon": {
      "fields": [
        {
          "name": "creator",
          "short": "Creator(s) of the cartoon",
          "type": "`$ARRAY`"
        },
        {
          "name": "episodes",
          "short": "Number of episodes",
          "type": "`$INTEGER`"
        },
        {
          "name": "genre",
          "short": "Genre(s) of the cartoon",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the cartoon",
          "type": "`$INTEGER`"
        },
        {
          "format": "uri",
          "name": "image",
          "short": "URL to the cartoon's image",
          "type": "`$STRING`"
        },
        {
          "name": "rating",
          "short": "Rating of the cartoon",
          "type": "`$STRING`"
        },
        {
          "name": "runtime_in_minutes",
          "short": "Runtime of the cartoon episode in minutes",
          "type": "`$INTEGER`"
        },
        {
          "name": "title",
          "short": "Title of the cartoon",
          "type": "`$STRING`"
        },
        {
          "name": "year",
          "short": "Year the cartoon was released",
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "cartoon",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/cartoons/cartoons2D",
              "segments": [
                {
                  "lit": "cartoons"
                },
                {
                  "lit": "cartoons2D"
                }
              ],
              "select": {
                "$action": "cartoons2_d"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cartoons",
                "cartoons2D"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/cartoons/cartoons3D",
              "segments": [
                {
                  "lit": "cartoons"
                },
                {
                  "lit": "cartoons3D"
                }
              ],
              "select": {
                "$action": "cartoons3_d"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cartoons",
                "cartoons3D"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

