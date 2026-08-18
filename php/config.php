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
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
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
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'episodes',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'genre',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rating',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'runtime_in_minutes',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'year',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'cartoon',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cartoons/cartoons2D',
                  'parts' => [
                    'cartoons',
                    'cartoons2D',
                  ],
                  'select' => [
                    '$action' => 'cartoons2_d',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cartoons/cartoons3D',
                  'parts' => [
                    'cartoons',
                    'cartoons3D',
                  ],
                  'select' => [
                    '$action' => 'cartoons3_d',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
