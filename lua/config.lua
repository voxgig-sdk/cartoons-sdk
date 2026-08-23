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
            ["short"] = "Creator(s) of the cartoon",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "episodes",
            ["short"] = "Number of episodes",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "genre",
            ["short"] = "Genre(s) of the cartoon",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the cartoon",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "image",
            ["short"] = "URL to the cartoon's image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rating",
            ["short"] = "Rating of the cartoon",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "runtime_in_minutes",
            ["short"] = "Runtime of the cartoon episode in minutes",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "title",
            ["short"] = "Title of the cartoon",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "year",
            ["short"] = "Year the cartoon was released",
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
