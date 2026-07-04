# Typed models for the Cartoons SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Cartoon:
    creator: Optional[list] = None
    episode: Optional[int] = None
    genre: Optional[list] = None
    id: Optional[int] = None
    image: Optional[str] = None
    rating: Optional[str] = None
    runtime_in_minute: Optional[int] = None
    title: Optional[str] = None
    year: Optional[int] = None


@dataclass
class CartoonListMatch:
    creator: Optional[list] = None
    episode: Optional[int] = None
    genre: Optional[list] = None
    id: Optional[int] = None
    image: Optional[str] = None
    rating: Optional[str] = None
    runtime_in_minute: Optional[int] = None
    title: Optional[str] = None
    year: Optional[int] = None

