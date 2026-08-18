# Cartoons SDK configuration


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
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "type": "`$ARRAY`",
          },
          {
            "name": "episodes",
            "type": "`$INTEGER`",
          },
          {
            "name": "genre",
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "image",
            "type": "`$STRING`",
          },
          {
            "name": "rating",
            "type": "`$STRING`",
          },
          {
            "name": "runtime_in_minutes",
            "type": "`$INTEGER`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
          {
            "name": "year",
            "type": "`$INTEGER`",
          },
        ],
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
                "parts": [
                  "cartoons",
                  "cartoons2D",
                ],
                "select": {
                  "$action": "cartoons2_d",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/cartoons/cartoons3D",
                "parts": [
                  "cartoons",
                  "cartoons3D",
                ],
                "select": {
                  "$action": "cartoons3_d",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
