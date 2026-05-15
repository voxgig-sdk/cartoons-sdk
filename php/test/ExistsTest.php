<?php
declare(strict_types=1);

// Cartoons SDK exists test

require_once __DIR__ . '/../cartoons_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CartoonsSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
