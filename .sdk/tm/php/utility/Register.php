<?php
declare(strict_types=1);

// Cartoons SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

CartoonsUtility::setRegistrar(function (CartoonsUtility $u): void {
    $u->clean = [CartoonsClean::class, 'call'];
    $u->done = [CartoonsDone::class, 'call'];
    $u->make_error = [CartoonsMakeError::class, 'call'];
    $u->feature_add = [CartoonsFeatureAdd::class, 'call'];
    $u->feature_hook = [CartoonsFeatureHook::class, 'call'];
    $u->feature_init = [CartoonsFeatureInit::class, 'call'];
    $u->fetcher = [CartoonsFetcher::class, 'call'];
    $u->make_fetch_def = [CartoonsMakeFetchDef::class, 'call'];
    $u->make_context = [CartoonsMakeContext::class, 'call'];
    $u->make_options = [CartoonsMakeOptions::class, 'call'];
    $u->make_request = [CartoonsMakeRequest::class, 'call'];
    $u->make_response = [CartoonsMakeResponse::class, 'call'];
    $u->make_result = [CartoonsMakeResult::class, 'call'];
    $u->make_point = [CartoonsMakePoint::class, 'call'];
    $u->make_spec = [CartoonsMakeSpec::class, 'call'];
    $u->make_url = [CartoonsMakeUrl::class, 'call'];
    $u->param = [CartoonsParam::class, 'call'];
    $u->prepare_auth = [CartoonsPrepareAuth::class, 'call'];
    $u->prepare_body = [CartoonsPrepareBody::class, 'call'];
    $u->prepare_headers = [CartoonsPrepareHeaders::class, 'call'];
    $u->prepare_method = [CartoonsPrepareMethod::class, 'call'];
    $u->prepare_params = [CartoonsPrepareParams::class, 'call'];
    $u->prepare_path = [CartoonsPreparePath::class, 'call'];
    $u->prepare_query = [CartoonsPrepareQuery::class, 'call'];
    $u->result_basic = [CartoonsResultBasic::class, 'call'];
    $u->result_body = [CartoonsResultBody::class, 'call'];
    $u->result_headers = [CartoonsResultHeaders::class, 'call'];
    $u->transform_request = [CartoonsTransformRequest::class, 'call'];
    $u->transform_response = [CartoonsTransformResponse::class, 'call'];
});
