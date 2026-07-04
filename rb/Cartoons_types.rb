# frozen_string_literal: true

# Typed models for the Cartoons SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Cartoon entity data model.
#
# @!attribute [rw] creator
#   @return [Array, nil]
#
# @!attribute [rw] episode
#   @return [Integer, nil]
#
# @!attribute [rw] genre
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] rating
#   @return [String, nil]
#
# @!attribute [rw] runtime_in_minute
#   @return [Integer, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
Cartoon = Struct.new(
  :creator,
  :episode,
  :genre,
  :id,
  :image,
  :rating,
  :runtime_in_minute,
  :title,
  :year,
  keyword_init: true
)

# Match filter for Cartoon#list (any subset of Cartoon fields).
#
# @!attribute [rw] creator
#   @return [Array, nil]
#
# @!attribute [rw] episode
#   @return [Integer, nil]
#
# @!attribute [rw] genre
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] rating
#   @return [String, nil]
#
# @!attribute [rw] runtime_in_minute
#   @return [Integer, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
CartoonListMatch = Struct.new(
  :creator,
  :episode,
  :genre,
  :id,
  :image,
  :rating,
  :runtime_in_minute,
  :title,
  :year,
  keyword_init: true
)

