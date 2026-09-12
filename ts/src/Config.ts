
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

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
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
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

