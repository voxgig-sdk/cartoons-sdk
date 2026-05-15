# Cartoons SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CartoonsFeatures
  def self.make_feature(name)
    case name
    when "base"
      CartoonsBaseFeature.new
    when "test"
      CartoonsTestFeature.new
    else
      CartoonsBaseFeature.new
    end
  end
end
