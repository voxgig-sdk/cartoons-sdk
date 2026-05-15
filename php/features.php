<?php
declare(strict_types=1);

// Cartoons SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class CartoonsFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new CartoonsBaseFeature();
            case "test":
                return new CartoonsTestFeature();
            default:
                return new CartoonsBaseFeature();
        }
    }
}
