// Typed models for the Cartoons SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Cartoon {
  creator?: any[]
  episodes?: number
  genre?: any[]
  id?: number
  image?: string
  rating?: string
  runtime_in_minutes?: number
  title?: string
  year?: number
}

export interface CartoonListMatch {
  creator?: any[]
  episodes?: number
  genre?: any[]
  id?: number
  image?: string
  rating?: string
  runtime_in_minutes?: number
  title?: string
  year?: number

  // Selects a custom action instead of the plain list:
  //   'cartoons2_d' | 'cartoons3_d'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

