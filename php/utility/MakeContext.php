<?php
declare(strict_types=1);

// Cartoons SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CartoonsMakeContext
{
    public static function call(array $ctxmap, ?CartoonsContext $basectx): CartoonsContext
    {
        return new CartoonsContext($ctxmap, $basectx);
    }
}
