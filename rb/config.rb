# Cartoons SDK configuration

module CartoonsConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Cartoons",
        "slug" => "cartoons",
        "version" => "0.0.1",
        "target" => "rb",
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
              "short" => "Creator(s) of the cartoon",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "episodes",
              "short" => "Number of episodes",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "genre",
              "short" => "Genre(s) of the cartoon",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the cartoon",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "image",
              "short" => "URL to the cartoon's image",
              "type" => "`$STRING`",
            },
            {
              "name" => "rating",
              "short" => "Rating of the cartoon",
              "type" => "`$STRING`",
            },
            {
              "name" => "runtime_in_minutes",
              "short" => "Runtime of the cartoon episode in minutes",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "title",
              "short" => "Title of the cartoon",
              "type" => "`$STRING`",
            },
            {
              "name" => "year",
              "short" => "Year the cartoon was released",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "cartoon",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
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
                },
                {
                  "args" => {},
                  "kind" => "http",
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
                },
              ],
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
