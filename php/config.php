<?php
declare(strict_types=1);

// Cartoons SDK configuration

class CartoonsConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Cartoons",
                "slug" => "cartoons",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://api.sampleapis.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "cartoon" => [],
                ],
            ],
            "entity" => [
        'cartoon' => [
          'fields' => [
            [
              'name' => 'creator',
              'title' => 'Creator',
              'type' => '`$ARRAY`',
              'short' => 'Creator(s) of the cartoon',
            ],
            [
              'name' => 'episodes',
              'title' => 'Episodes',
              'type' => '`$INTEGER`',
              'short' => 'Number of episodes',
            ],
            [
              'name' => 'genre',
              'title' => 'Genre',
              'type' => '`$ARRAY`',
              'short' => 'Genre(s) of the cartoon',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$INTEGER`',
              'short' => 'Unique identifier for the cartoon',
            ],
            [
              'name' => 'image',
              'title' => 'Image',
              'type' => '`$STRING`',
              'short' => 'URL to the cartoon\'s image',
              'format' => 'uri',
            ],
            [
              'name' => 'rating',
              'title' => 'Rating',
              'type' => '`$STRING`',
              'short' => 'Rating of the cartoon',
            ],
            [
              'name' => 'runtime_in_minutes',
              'title' => 'Runtime In Minutes',
              'type' => '`$INTEGER`',
              'short' => 'Runtime of the cartoon episode in minutes',
            ],
            [
              'name' => 'title',
              'title' => 'Title',
              'type' => '`$STRING`',
              'short' => 'Title of the cartoon',
            ],
            [
              'name' => 'year',
              'title' => 'Year',
              'type' => '`$INTEGER`',
              'short' => 'Year the cartoon was released',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'cartoon',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cartoons/cartoons2D',
                  'segments' => [
                    [
                      'lit' => 'cartoons',
                    ],
                    [
                      'lit' => 'cartoons2D',
                    ],
                  ],
                  'parts' => [
                    'cartoons',
                    'cartoons2D',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [
                    '$action' => 'cartoons2_d',
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cartoons/cartoons3D',
                  'segments' => [
                    [
                      'lit' => 'cartoons',
                    ],
                    [
                      'lit' => 'cartoons3D',
                    ],
                  ],
                  'parts' => [
                    'cartoons',
                    'cartoons3D',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [
                    '$action' => 'cartoons3_d',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return CartoonsFeatures::make_feature($name);
    }
}
