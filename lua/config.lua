-- Cartoons SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Cartoons",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
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
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "episodes",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "genre",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rating",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "runtime_in_minutes",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "year",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "cartoon",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cartoons/cartoons2D",
                ["parts"] = {
                  "cartoons",
                  "cartoons2D",
                },
                ["select"] = {
                  ["$action"] = "cartoons2_d",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cartoons/cartoons3D",
                ["parts"] = {
                  "cartoons",
                  "cartoons3D",
                },
                ["select"] = {
                  ["$action"] = "cartoons3_d",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
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
