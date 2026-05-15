-- ProjectName SDK exists test

local sdk = require("cartoons_sdk")

describe("CartoonsSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
