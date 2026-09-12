package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Cartoons",
			"slug": "cartoons",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.sampleapis.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"cartoon": map[string]any{},
			},
		},
		"entity": map[string]any{
			"cartoon": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "creator",
						"short": "Creator(s) of the cartoon",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "episodes",
						"short": "Number of episodes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "genre",
						"short": "Genre(s) of the cartoon",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the cartoon",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "uri",
						"name": "image",
						"short": "URL to the cartoon's image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rating",
						"short": "Rating of the cartoon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "runtime_in_minutes",
						"short": "Runtime of the cartoon episode in minutes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "title",
						"short": "Title of the cartoon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "year",
						"short": "Year the cartoon was released",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "cartoon",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/cartoons/cartoons2D",
								"segments": []any{
									map[string]any{
										"lit": "cartoons",
									},
									map[string]any{
										"lit": "cartoons2D",
									},
								},
								"select": map[string]any{
									"$action": "cartoons2_d",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cartoons",
									"cartoons2D",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/cartoons/cartoons3D",
								"segments": []any{
									map[string]any{
										"lit": "cartoons",
									},
									map[string]any{
										"lit": "cartoons3D",
									},
								},
								"select": map[string]any{
									"$action": "cartoons3_d",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cartoons",
									"cartoons3D",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
