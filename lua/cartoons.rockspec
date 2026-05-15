package = "voxgig-sdk-cartoons"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/cartoons-sdk.git"
}
description = {
  summary = "Cartoons SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["cartoons_sdk"] = "cartoons_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
