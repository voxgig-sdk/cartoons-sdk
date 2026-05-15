<?php
declare(strict_types=1);

// Cartoons SDK utility: result_headers

class CartoonsResultHeaders
{
    public static function call(CartoonsContext $ctx): ?CartoonsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
