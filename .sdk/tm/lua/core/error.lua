-- Cartoons SDK error

local CartoonsError = {}
CartoonsError.__index = CartoonsError


function CartoonsError.new(code, msg, ctx)
  local self = setmetatable({}, CartoonsError)
  self.is_sdk_error = true
  self.sdk = "Cartoons"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CartoonsError:error()
  return self.msg
end


function CartoonsError:__tostring()
  return self.msg
end


return CartoonsError
