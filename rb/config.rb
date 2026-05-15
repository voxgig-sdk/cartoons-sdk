# Cartoons SDK configuration

module CartoonsConfig
  def self.make_config
    {
      "main" => {
        "name" => "Cartoons",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.sampleapis.com",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "cartoon" => {},
        },
      },
      "entity" => {
        "cartoon" => {
          "fields" => [
            {
              "name" => "creator",
              "req" => false,
              "type" => "`$ARRAY`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "episode",
              "req" => false,
              "type" => "`$INTEGER`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "genre",
              "req" => false,
              "type" => "`$ARRAY`",
              "active" => true,
              "index$" => 2,
            },
            {
              "name" => "id",
              "req" => false,
              "type" => "`$INTEGER`",
              "active" => true,
              "index$" => 3,
            },
            {
              "name" => "image",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 4,
            },
            {
              "name" => "rating",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 5,
            },
            {
              "name" => "runtime_in_minute",
              "req" => false,
              "type" => "`$INTEGER`",
              "active" => true,
              "index$" => 6,
            },
            {
              "name" => "title",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 7,
            },
            {
              "name" => "year",
              "req" => false,
              "type" => "`$INTEGER`",
              "active" => true,
              "index$" => 8,
            },
          ],
          "name" => "cartoon",
          "op" => {
            "list" => {
              "name" => "list",
              "points" => [
                {
                  "method" => "GET",
                  "orig" => "/cartoons/cartoons2D",
                  "parts" => [
                    "cartoons",
                    "cartoons2D",
                  ],
                  "select" => {
                    "$action" => "cartoons2_d",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "args" => {},
                  "index$" => 0,
                },
                {
                  "method" => "GET",
                  "orig" => "/cartoons/cartoons3D",
                  "parts" => [
                    "cartoons",
                    "cartoons3D",
                  ],
                  "select" => {
                    "$action" => "cartoons3_d",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "args" => {},
                  "index$" => 1,
                },
              ],
              "input" => "data",
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    CartoonsFeatures.make_feature(name)
  end
end
