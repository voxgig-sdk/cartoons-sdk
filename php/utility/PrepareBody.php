<?php
declare(strict_types=1);

// Cartoons SDK utility: prepare_body

class CartoonsPrepareBody
{
    public static function call(CartoonsContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
