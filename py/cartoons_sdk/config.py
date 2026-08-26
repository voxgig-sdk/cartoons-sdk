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
            "slug": "cartoons",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "short": "Creator(s) of the cartoon",
            "type": "`$ARRAY`",
          },
          {
            "name": "episodes",
            "short": "Number of episodes",
            "type": "`$INTEGER`",
          },
          {
            "name": "genre",
            "short": "Genre(s) of the cartoon",
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the cartoon",
            "type": "`$INTEGER`",
          },
          {
            "name": "image",
            "short": "URL to the cartoon's image",
            "type": "`$STRING`",
          },
          {
            "name": "rating",
            "short": "Rating of the cartoon",
            "type": "`$STRING`",
          },
          {
            "name": "runtime_in_minutes",
            "short": "Runtime of the cartoon episode in minutes",
            "type": "`$INTEGER`",
          },
          {
            "name": "title",
            "short": "Title of the cartoon",
            "type": "`$STRING`",
          },
          {
            "name": "year",
            "short": "Year the cartoon was released",
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
