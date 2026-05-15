<?php
declare(strict_types=1);

// Cartoons SDK base feature

class CartoonsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CartoonsContext $ctx, array $options): void {}
    public function PostConstruct(CartoonsContext $ctx): void {}
    public function PostConstructEntity(CartoonsContext $ctx): void {}
    public function SetData(CartoonsContext $ctx): void {}
    public function GetData(CartoonsContext $ctx): void {}
    public function GetMatch(CartoonsContext $ctx): void {}
    public function SetMatch(CartoonsContext $ctx): void {}
    public function PrePoint(CartoonsContext $ctx): void {}
    public function PreSpec(CartoonsContext $ctx): void {}
    public function PreRequest(CartoonsContext $ctx): void {}
    public function PreResponse(CartoonsContext $ctx): void {}
    public function PreResult(CartoonsContext $ctx): void {}
    public function PreDone(CartoonsContext $ctx): void {}
    public function PreUnexpected(CartoonsContext $ctx): void {}
}
