# Cartoons SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Cartoons",
            "slug": "cartoons",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.sampleapis.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "cartoon": {},
            },
        },
        "entity": {
      "cartoon": {
        "fields": [
          {
            "name": "creator",
            "title": "Creator",
            "type": "`$ARRAY`",
            "short": "Creator(s) of the cartoon",
          },
          {
            "name": "episodes",
            "title": "Episodes",
            "type": "`$INTEGER`",
            "short": "Number of episodes",
          },
          {
            "name": "genre",
            "title": "Genre",
            "type": "`$ARRAY`",
            "short": "Genre(s) of the cartoon",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique identifier for the cartoon",
          },
          {
            "name": "image",
            "title": "Image",
            "type": "`$STRING`",
            "short": "URL to the cartoon's image",
            "format": "uri",
          },
          {
            "name": "rating",
            "title": "Rating",
            "type": "`$STRING`",
            "short": "Rating of the cartoon",
          },
          {
            "name": "runtime_in_minutes",
            "title": "Runtime In Minutes",
            "type": "`$INTEGER`",
            "short": "Runtime of the cartoon episode in minutes",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "short": "Title of the cartoon",
          },
          {
            "name": "year",
            "title": "Year",
            "type": "`$INTEGER`",
            "short": "Year the cartoon was released",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "cartoon",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/cartoons/cartoons2D",
                "segments": [
                  {
                    "lit": "cartoons",
                  },
                  {
                    "lit": "cartoons2D",
                  },
                ],
                "parts": [
                  "cartoons",
                  "cartoons2D",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {
                  "$action": "cartoons2_d",
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/cartoons/cartoons3D",
                "segments": [
                  {
                    "lit": "cartoons",
                  },
                  {
                    "lit": "cartoons3D",
                  },
                ],
                "parts": [
                  "cartoons",
                  "cartoons3D",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {
                  "$action": "cartoons3_d",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
