-- Typed models for the Cartoons SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Cartoon
---@field creator? table
---@field episode? number
---@field genre? table
---@field id? number
---@field image? string
---@field rating? string
---@field runtime_in_minute? number
---@field title? string
---@field year? number

---@class CartoonListMatch

local M = {}

return M
