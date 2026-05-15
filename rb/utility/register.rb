# Cartoons SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CartoonsUtility.registrar = ->(u) {
  u.clean = CartoonsUtilities::Clean
  u.done = CartoonsUtilities::Done
  u.make_error = CartoonsUtilities::MakeError
  u.feature_add = CartoonsUtilities::FeatureAdd
  u.feature_hook = CartoonsUtilities::FeatureHook
  u.feature_init = CartoonsUtilities::FeatureInit
  u.fetcher = CartoonsUtilities::Fetcher
  u.make_fetch_def = CartoonsUtilities::MakeFetchDef
  u.make_context = CartoonsUtilities::MakeContext
  u.make_options = CartoonsUtilities::MakeOptions
  u.make_request = CartoonsUtilities::MakeRequest
  u.make_response = CartoonsUtilities::MakeResponse
  u.make_result = CartoonsUtilities::MakeResult
  u.make_point = CartoonsUtilities::MakePoint
  u.make_spec = CartoonsUtilities::MakeSpec
  u.make_url = CartoonsUtilities::MakeUrl
  u.param = CartoonsUtilities::Param
  u.prepare_auth = CartoonsUtilities::PrepareAuth
  u.prepare_body = CartoonsUtilities::PrepareBody
  u.prepare_headers = CartoonsUtilities::PrepareHeaders
  u.prepare_method = CartoonsUtilities::PrepareMethod
  u.prepare_params = CartoonsUtilities::PrepareParams
  u.prepare_path = CartoonsUtilities::PreparePath
  u.prepare_query = CartoonsUtilities::PrepareQuery
  u.result_basic = CartoonsUtilities::ResultBasic
  u.result_body = CartoonsUtilities::ResultBody
  u.result_headers = CartoonsUtilities::ResultHeaders
  u.transform_request = CartoonsUtilities::TransformRequest
  u.transform_response = CartoonsUtilities::TransformResponse
}
