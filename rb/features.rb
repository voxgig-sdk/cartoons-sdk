# Cartoons SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module CartoonsFeatures
  def self.make_feature(name)
    case name
    when "base"
      CartoonsBaseFeature.new
    when "ratelimit"
      CartoonsRatelimitFeature.new
    when "retry"
      CartoonsRetryFeature.new
    when "test"
      CartoonsTestFeature.new
    when "timeout"
      CartoonsTimeoutFeature.new
    else
      CartoonsBaseFeature.new
    end
  end
end
