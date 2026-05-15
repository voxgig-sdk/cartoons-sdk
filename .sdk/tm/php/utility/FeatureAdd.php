<?php
declare(strict_types=1);

// Cartoons SDK utility: feature_add

class CartoonsFeatureAdd
{
    public static function call(CartoonsContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
