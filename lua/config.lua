-- Cartoons SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Cartoons",
      slug = "cartoons",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://api.sampleapis.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["cartoon"] = {},
      },
    },
    entity = {
      ["cartoon"] = {
        ["fields"] = {
          {
            ["name"] = "creator",
            ["title"] = "Creator",
            ["type"] = "`$ARRAY`",
            ["short"] = "Creator(s) of the cartoon",
          },
          {
            ["name"] = "episodes",
            ["title"] = "Episodes",
            ["type"] = "`$INTEGER`",
            ["short"] = "Number of episodes",
          },
          {
            ["name"] = "genre",
            ["title"] = "Genre",
            ["type"] = "`$ARRAY`",
            ["short"] = "Genre(s) of the cartoon",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$INTEGER`",
            ["short"] = "Unique identifier for the cartoon",
          },
          {
            ["name"] = "image",
            ["title"] = "Image",
            ["type"] = "`$STRING`",
            ["short"] = "URL to the cartoon's image",
            ["format"] = "uri",
          },
          {
            ["name"] = "rating",
            ["title"] = "Rating",
            ["type"] = "`$STRING`",
            ["short"] = "Rating of the cartoon",
          },
          {
            ["name"] = "runtime_in_minutes",
            ["title"] = "Runtime In Minutes",
            ["type"] = "`$INTEGER`",
            ["short"] = "Runtime of the cartoon episode in minutes",
          },
          {
            ["name"] = "title",
            ["title"] = "Title",
            ["type"] = "`$STRING`",
            ["short"] = "Title of the cartoon",
          },
          {
            ["name"] = "year",
            ["title"] = "Year",
            ["type"] = "`$INTEGER`",
            ["short"] = "Year the cartoon was released",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "cartoon",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cartoons/cartoons2D",
                ["segments"] = {
                  {
                    ["lit"] = "cartoons",
                  },
                  {
                    ["lit"] = "cartoons2D",
                  },
                },
                ["parts"] = {
                  "cartoons",
                  "cartoons2D",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {
                  ["$action"] = "cartoons2_d",
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cartoons/cartoons3D",
                ["segments"] = {
                  {
                    ["lit"] = "cartoons",
                  },
                  {
                    ["lit"] = "cartoons3D",
                  },
                },
                ["parts"] = {
                  "cartoons",
                  "cartoons3D",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {
                  ["$action"] = "cartoons3_d",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
