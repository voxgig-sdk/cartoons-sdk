<?php
declare(strict_types=1);

// Cartoons SDK utility: result_body

class CartoonsResultBody
{
    public static function call(CartoonsContext $ctx): ?CartoonsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
