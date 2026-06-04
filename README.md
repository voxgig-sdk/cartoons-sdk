# Cartoons SDK

Browse a sample dataset of 2D and 3D cartoons with titles, descriptions, and sourced imagery

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Cartoons

The Cartoons API is one of the free practice datasets published on [SampleAPIs](https://sampleapis.com), a playground for experimenting with RESTful endpoints. It serves a small catalogue of cartoons split into 2D and 3D collections, each entry typically including a title, description and an image URL.

What you can do with the API:

- List 2D cartoons via `GET /cartoons/cartoons2D`.
- List 3D cartoons via `GET /cartoons/cartoons3D`.

The service is unauthenticated and CORS-enabled, so it can be called directly from browser code. As with the rest of SampleAPIs, the dataset is reset periodically and is intended for demos, tutorials and SDK testing rather than as a canonical source of cartoon information.

## Try it

**TypeScript**
```bash
npm install cartoons
```

**Python**
```bash
pip install cartoons-sdk
```

**PHP**
```bash
composer require voxgig/cartoons-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/cartoons-sdk/go
```

**Ruby**
```bash
gem install cartoons-sdk
```

**Lua**
```bash
luarocks install cartoons-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { CartoonsSDK } from 'cartoons'

const client = new CartoonsSDK({})

// List all cartoons
const cartoons = await client.Cartoon().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o cartoons-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "cartoons": {
      "command": "/abs/path/to/cartoons-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Cartoon** | A cartoon entry from the SampleAPIs catalogue, served from `GET /cartoons/cartoons2D` and `GET /cartoons/cartoons3D` with title, description and image fields. | `/cartoons/cartoons2D` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from cartoons_sdk import CartoonsSDK

client = CartoonsSDK({})

# List all cartoons
cartoons, err = client.Cartoon(None).list(None, None)
```

### PHP

```php
<?php
require_once 'cartoons_sdk.php';

$client = new CartoonsSDK([]);

// List all cartoons
[$cartoons, $err] = $client->Cartoon(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/cartoons-sdk/go"

client := sdk.NewCartoonsSDK(map[string]any{})

// List all cartoons
cartoons, err := client.Cartoon(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Cartoons_sdk"

client = CartoonsSDK.new({})

# List all cartoons
cartoons, err = client.Cartoon(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("cartoons_sdk")

local client = sdk.new({})

-- List all cartoons
local cartoons, err = client:Cartoon(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = CartoonsSDK.test()
const result = await client.Cartoon().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = CartoonsSDK.test(None, None)
result, err = client.Cartoon(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = CartoonsSDK::test(null, null);
[$result, $err] = $client->Cartoon(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Cartoon(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = CartoonsSDK.test(nil, nil)
result, err = client.Cartoon(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Cartoon(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Cartoons

- Upstream: [https://sampleapis.com/api-list/cartoons](https://sampleapis.com/api-list/cartoons)

- Data is published by [SampleAPIs](https://sampleapis.com) for educational and prototyping use only.
- SampleAPIs states the data is not owned by them and may be reset on a regular basis.
- No explicit licence is declared for the cartoon entries or accompanying images; treat as unsuitable for production reuse.
- Verify any image attribution independently before redistribution.

---

Generated from the Cartoons OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
