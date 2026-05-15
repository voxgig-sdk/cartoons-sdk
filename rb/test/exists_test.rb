# Cartoons SDK exists test

require "minitest/autorun"
require_relative "../Cartoons_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CartoonsSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
